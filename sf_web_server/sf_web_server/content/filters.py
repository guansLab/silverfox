from django_filters import rest_framework as filters
from .models import ContentCategory


class ContentCategoryFilter(filters.Filter):

    class Meta:
        model = ContentCategory
        fields = ["parent_category", "category_name", "hierarchy"]
