from django.urls import include, path
from rest_framework import routers
from sf_web_server.user_auth.views import GroupViewSet, LoginView, RegisterView, LogoutView
from sf_web_server.content.views import ContentCategoryViewSet, ContentViewSet, TopNewsViewSet, AboutUsViewSet
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'groups', GroupViewSet)
router.register(r'content-category', ContentCategoryViewSet)
router.register(r'content', ContentViewSet)
router.register(r'top-news', TopNewsViewSet)
router.register(r'about-us', AboutUsViewSet)

admin.site.site_header = "Silver Foxes Admin"
admin.site.site_title = "Silver Foxes Admin Portal"
admin.site.index_title = "Welcome to Silver Foxes Admin Portal"

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/logout/', LogoutView.as_view(), name='login'),
    path('api/register/', RegisterView.as_view(), name='register'),
    path(r'api/', include(router.urls))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
