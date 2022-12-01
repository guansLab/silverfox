from django.contrib.auth.models import Group
from rest_framework import viewsets, permissions, generics, views, status
from sf_web_server.user_auth.serializers import RegisterSerializer, GroupSerializer, LoginSerializer
from django.contrib.auth import get_user_model, logout, login
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


@method_decorator(csrf_exempt, name='dispatch')
class RegisterView(generics.CreateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = RegisterSerializer


class LoginView(views.APIView):
    @csrf_exempt
    def post(self, request, format=None):
        serializer = LoginSerializer(data=self.request.data, context={'request': self.request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        login(request, user)
        return Response(None, status=status.HTTP_202_ACCEPTED)


class LogoutView(views.APIView):

    def post(self, request):
        if not request.user.is_authenticated:
            return Response({'error': 'User not logged in'}, status=status.HTTP_400_BAD_REQUEST)
        logout(request)
        return Response(None, status=status.HTTP_202_ACCEPTED)


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]
