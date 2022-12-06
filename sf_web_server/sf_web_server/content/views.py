from rest_framework.viewsets import ModelViewSet
from .models import ContentCategory, Content
from .serializers import ContentCategorySerializer, ContentSerializer
from .filters import ContentCategoryFilter
import django_filters


class ContentCategoryViewSet(ModelViewSet):
    queryset = ContentCategory.objects.all()
    serializer_class = ContentCategorySerializer
    filterset_class = ContentCategoryFilter
    filter_backends = (django_filters.rest_framework.DjangoFilterBackend, )


class ContentViewSet(ModelViewSet):
    queryset = Content.objects.all()
    serializer_class = ContentSerializer

