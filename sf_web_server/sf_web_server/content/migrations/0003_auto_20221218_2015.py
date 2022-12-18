# Generated by Django 3.2.16 on 2022-12-18 20:15

import django.core.validators
from django.db import migrations, models
import django_quill.fields


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0002_auto_20221215_1809'),
    ]

    operations = [
        migrations.CreateModel(
            name='AboutUs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('picture', models.ImageField(blank=True, help_text='Profile picture for about us', null=True, upload_to='', validators=[django.core.validators.FileExtensionValidator(['png', 'jpg', 'jpeg', 'raw', 'tiff', 'gif', 'bmp'])])),
                ('display_name', models.CharField(help_text='Name to be displayed', max_length=128)),
                ('bio', django_quill.fields.QuillField(blank=True, help_text='Personal Bio', null=True)),
                ('title', models.CharField(help_text='Role played in the project or title', max_length=128)),
                ('ordering', models.SmallIntegerField(default=0, help_text='Order in which it has to be displayed, 1 means display first')),
            ],
            options={
                'verbose_name_plural': 'About Us',
            },
        ),
        migrations.AlterModelOptions(
            name='contentcategory',
            options={'verbose_name_plural': 'Content Categories'},
        ),
        migrations.AlterModelOptions(
            name='topnews',
            options={'verbose_name_plural': 'Top News'},
        ),
        migrations.AlterField(
            model_name='content',
            name='snippet',
            field=models.CharField(help_text='Short description of the content', max_length=255),
        ),
        migrations.AlterField(
            model_name='contentcategory',
            name='ordering',
            field=models.SmallIntegerField(default=0, help_text='Order in which it has to be displayed, 1 means display first'),
        ),
        migrations.AlterField(
            model_name='topnews',
            name='ordering',
            field=models.SmallIntegerField(default=0, help_text='Order in which it has to be displayed, 1 means display first'),
        ),
        migrations.AlterField(
            model_name='topnews',
            name='snippet',
            field=models.CharField(help_text='Short description of the content', max_length=255),
        ),
    ]
