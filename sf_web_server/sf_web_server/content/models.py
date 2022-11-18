from django.db import models


class ContentCategory(models.Model):
    parent_category = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE)
    category_name = models.CharField(max_length=64, null=False, blank=False)
    hierarchy = models.CharField(max_length=512, null=False, blank=False)

    def gen_hierarchy(self):
        if self.parent_category is None:
            return []
        hierarchy_list = reversed(list(ContentCategory.objects.filter(
            pk=self.parent_category_id
        ).values_list("category_name", flat=True)) + self.parent_category.gen_hierarchy())
        return list(map(lambda x: x.replace(" ", "_").lower(), hierarchy_list))

    def clean(self):
        # assign self.hierarchy
        super().clean()
        self.hierarchy = '|'.join(self.gen_hierarchy())

    def save(self, **kwargs):
        self.clean()
        return super().save(**kwargs)
