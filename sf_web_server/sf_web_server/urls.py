from django.urls import include, path
from rest_framework import routers
from sf_web_server.user_auth.views import GroupViewSet, LoginView, RegisterView, LogoutView, index_view
from sf_web_server.content.views import ContentCategoryViewSet, ContentViewSet
from django.contrib import admin

router = routers.DefaultRouter()
router.register(r'^groups$', GroupViewSet)
router.register(r'^content-category$', ContentCategoryViewSet)
router.register(r'^content$', ContentViewSet)

admin.site.site_header = "Silver Foxes Admin"
admin.site.site_title = "Silver Foxes Admin Portal"
admin.site.index_title = "Welcome to Silver Foxes Admin Portal"

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', index_view, name='index'),
    path('api/admin/', admin.site.urls),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/logout/', LogoutView.as_view(), name='login'),
    path('api/register/', RegisterView.as_view(), name='register'),
    path(r'api/', include(router.urls))
]
