# Generated by Django 5.0.6 on 2024-07-10 21:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_alter_picture_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='tg_id',
            field=models.BigIntegerField(),
        ),
    ]