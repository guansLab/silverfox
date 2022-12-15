from rest_framework import serializers
from .models import ContentCategory, Content, TopNews


class ContentCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ContentCategory
        fields = '__all__'


class ContentSerializer(serializers.ModelSerializer):
    category = ContentCategorySerializer()
    body = serializers.SerializerMethodField(read_only=True, source='body')

    def get_body(self, obj):
        return obj.body.html

    class Meta:
        model = Content
        fields = '__all__'


class TopNewsSerializer(serializers.ModelSerializer):

    class Meta:
        model = TopNews
        fields = '__all__'
