from django.db import models
from django_quill.fields import QuillField
from django.contrib.auth import get_user_model
from django.core.validators import FileExtensionValidator
from django.utils.translation import ugettext as _

IMAGE_FILE_FORMATS = ["png", "jpg", "jpeg", "raw", "tiff", "gif", "bmp"]


class ContentCategory(models.Model):
    parent_category = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE)
    category_name = models.CharField(max_length=64, null=False, blank=False)
    hierarchy = models.CharField(max_length=512, null=True, blank=True)
    thumbnail = models.ImageField(validators=[FileExtensionValidator(IMAGE_FILE_FORMATS)],
                                  help_text=_("Thumbnail for the category"),
                                  null=False, blank=False)
    ordering = models.SmallIntegerField(default=0, help_text=_("Order in which it has to be displayed,"
                                                               " 1 means display first"))

    class Meta:
        verbose_name_plural = "Content Categories"

    def __str__(self):
        return self.category_name

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


class Content(models.Model):
    title = models.CharField(max_length=255)
    title_tag = models.CharField(max_length=255)
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    body = QuillField(blank=True, null=True)
    post_date = models.DateField(auto_now_add=True)
    category = models.ForeignKey(ContentCategory, on_delete=models.CASCADE)
    snippet = models.CharField(max_length=255, help_text=_("Short description of the content"))
    thumbnail = models.ImageField(validators=[FileExtensionValidator(IMAGE_FILE_FORMATS)],
                                  help_text=_("Thumbnail for the content"),
                                  null=False, blank=False)

    def __str__(self):
        return self.title


class TopNews(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    body = QuillField(blank=True, null=True)
    post_date = models.DateField(auto_now_add=True)
    snippet = models.CharField(max_length=255, help_text=_("Short description of the content"))
    ordering = models.SmallIntegerField(default=0, help_text=_("Order in which it has to be displayed,"
                                                               " 1 means display first"))
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "Top News"
