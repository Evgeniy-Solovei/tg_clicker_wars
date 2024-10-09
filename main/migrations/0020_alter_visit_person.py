# Generated by Django 5.0.6 on 2024-09-24 10:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0019_visit'),
    ]

    operations = [
        migrations.AlterField(
            model_name='visit',
            name='person',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='visit', to='main.person'),
        ),
    ]