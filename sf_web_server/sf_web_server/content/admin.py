from django.contrib import admin

from sf_web_server.content.models import ContentCategory, Content


@admin.register(ContentCategory)
class ContentCategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(Content)
class ContentCategoryAdmin(admin.ModelAdmin):
    pass
