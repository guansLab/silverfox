from rest_framework.viewsets import ModelViewSet
from .models import ContentCategory, Content, TopNews
from .serializers import ContentCategorySerializer, ContentSerializer, TopNewsSerializer
from .filters import ContentCategoryFilter, ContentFilter, TopNewsFilter
import django_filters


class ContentCategoryViewSet(ModelViewSet):
    queryset = ContentCategory.objects.all().order_by("ordering")
    serializer_class = ContentCategorySerializer
    filterset_class = ContentCategoryFilter
    filter_backends = (django_filters.rest_framework.DjangoFilterBackend, )


class ContentViewSet(ModelViewSet):
    queryset = Content.objects.all().order_by("-post_date")
    serializer_class = ContentSerializer
    filterset_class = ContentFilter


class TopNewsViewSet(ModelViewSet):
    queryset = TopNews.objects.all().order_by("-ordering")
    serializer_class = TopNewsSerializer
    filterset_class = TopNewsFilter
