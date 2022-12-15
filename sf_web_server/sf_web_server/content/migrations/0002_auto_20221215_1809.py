# Generated by Django 3.2.16 on 2022-12-15 18:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django_quill.fields


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('content', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contentcategory',
            name='ordering',
            field=models.SmallIntegerField(default=0),
        ),
        migrations.CreateModel(
            name='TopNews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('body', django_quill.fields.QuillField(blank=True, null=True)),
                ('post_date', models.DateField(auto_now_add=True)),
                ('snippet', models.CharField(max_length=255)),
                ('ordering', models.SmallIntegerField(default=0)),
                ('is_active', models.BooleanField(default=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
