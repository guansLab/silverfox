from django.urls import include, path
from rest_framework import routers
from sf_web_server.user_auth import views
from django.contrib import admin

router = routers.DefaultRouter()
router.register(r'groups', views.GroupViewSet)

admin.site.site_header = "Silver Foxes Admin"
admin.site.site_title = "Silver Foxes Admin Portal"
admin.site.index_title = "Welcome to Silver Foxes Admin Portal"

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', views.LoginView.as_view(), name='login'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('', include(router.urls)),
]
