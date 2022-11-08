from django.contrib.auth.models import User, Group
from rest_framework import serializers
from django.contrib.auth import get_user_model
import difflib


class UserSerializer(serializers.HyperlinkedModelSerializer):
    confirmPassword = serializers.CharField(min_length=5, required=True,
                                            write_only=True, label='Confirm password')

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'username',
                  'password', 'confirmPassword', 'url', 'groups']
        extra_kwargs = {
            'username': {'read_only': True},
            'first_name': {'required': True},
            'last_name': {'required': True},
            'email': {'required': True},
            'password': {'required': True},
            'groups': {'read_only': True},
            'confirmPassword': {'required': True}
        }

    def create(self, validated_data):
        user = User.objects.create_user(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
            username=validated_data['email'],
            password=validated_data['password'],
        )
        user.save()
        return user

    def validate(self, value):
        ### Length Validation
        if len(value['password']) < 5:
            raise serializers.ValidationError("Password is too short."
                                              " Must be at least 5 characters long.")
        ###

        ### Similarity to email validation
        max_similarity = 0.5

        if difflib.SequenceMatcher(
                a=value['password'].lower(),
                b=value['email'].lower()
        ).quick_ratio() > max_similarity:
            raise serializers.ValidationError("The password is"
                                              " too similar to the email.")
        ###

        ### Password match validation
        confirmPassword = value.pop('confirmPassword')

        if not value['password'] == confirmPassword:
            raise serializers.ValidationError("Password does not match.")
        ###

        return value


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']
