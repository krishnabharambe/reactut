# Generated by Django 3.1.2 on 2020-10-11 13:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='description',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
    ]