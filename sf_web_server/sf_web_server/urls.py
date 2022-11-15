from django.urls import include, path
from rest_framework import routers
from sf_web_server.userReg import views
from django.contrib import admin

router = routers.DefaultRouter()
router.register(r'groups', views.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', views.LoginView.as_view(), name='login'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('', include(router.urls)),
]
