from django.contrib import admin

from sf_web_server.content.models import ContentCategory, Content, TopNews, AboutUs


@admin.register(ContentCategory)
class ContentCategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(Content)
class ContentCategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(TopNews)
class TopNewsCategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(AboutUs)
class AboutUsCategoryAdmin(admin.ModelAdmin):
    pass
