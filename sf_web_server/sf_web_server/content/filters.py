import django_filters
from django_filters import rest_framework as filters
from .models import ContentCategory, Content


class ContentCategoryFilter(filters.FilterSet):
    root_category = django_filters.BooleanFilter(field_name="parent_category", lookup_expr="isnull")

    class Meta:
        model = ContentCategory
        fields = ["category_name", "hierarchy", "parent_category", "parent_category__category_name"]

class ContentFilter(filters.FilterSet):
    class Meta:
        model = Content
        fields = ["category", "category__category_name"]
