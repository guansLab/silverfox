# Generated by Django 3.2.16 on 2022-12-18 23:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0003_auto_20221218_2015'),
    ]

    operations = [
        migrations.AlterField(
            model_name='aboutus',
            name='title',
            field=models.CharField(blank=True, help_text='Role played in the project or title', max_length=128, null=True),
        ),
    ]
