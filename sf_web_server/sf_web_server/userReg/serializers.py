from django.contrib.auth.models import Group
from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
import difflib
from django.db import transaction


class LoginSerializer(serializers.Serializer):
    """
    This serializer defines two fields for authentication:
      * username
      * password.
    It will try to authenticate the user with when validated.
    """
    username = serializers.CharField(
        write_only=True
    )
    password = serializers.CharField(
        # This will be used when the DRF browsable API is enabled
        style={'input_type': 'password'},
        trim_whitespace=False,
        write_only=True
    )

    def validate(self, attrs):
        # Take username and password from request
        username = attrs.get('username')
        password = attrs.get('password')

        if username and password:
            # Try to authenticate the user using Django auth framework.
            user = authenticate(request=self.context.get('request'),
                                username=username, password=password)
            if not user:
                # If we don't have a regular user, raise a ValidationError
                msg = 'Access denied: wrong username or password.'
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = 'Both "username" and "password" are required.'
            raise serializers.ValidationError(msg, code='authorization')
        # We have a valid user, put it in the serializer's validated_data.
        # It will be used in the view.
        attrs['user'] = user
        return attrs


class RegisterSerializer(serializers.HyperlinkedModelSerializer):
    confirm_password = serializers.CharField(min_length=5, required=True,
                                            write_only=True, label='Confirm password')

    class Meta:
        model = get_user_model()
        fields = ['first_name', 'last_name', 'email', 'username', 'password', 'confirm_password']
        extra_kwargs = {
            'username': {'read_only': True},
            'first_name': {'required': True},
            'last_name': {'required': True},
            'email': {'required': True},
            'password': {'required': True},
            'confirm_password': {'required': True}
        }

    def create(self, validated_data):
        with transaction.atomic():
            user = get_user_model().objects.create_user(
                first_name=validated_data['first_name'],
                last_name=validated_data['last_name'],
                email=validated_data['email'],
                username=validated_data['email'],
                password=validated_data['password'],
            )
        return user

    def validate(self, value):
        if len(value['password']) < 5:
            raise serializers.ValidationError("Password is too short."
                                              " Must be at least 5 characters long.")
        ###

        max_similarity = 0.5

        if difflib.SequenceMatcher(
                a=value['password'].lower(),
                b=value['email'].lower()
        ).quick_ratio() > max_similarity:
            raise serializers.ValidationError("The password is"
                                              " too similar to the email.")

        confirm_password = value.pop('confirm_password')

        if not value['password'] == confirm_password:
            raise serializers.ValidationError("Password does not match.")

        return value


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']
