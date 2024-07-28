# Generated by Django 5.0.6 on 2024-07-23 21:55

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0012_friendship'),
    ]

    operations = [
        migrations.CreateModel(
            name='ReferralSystem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('referral_bonus', models.BooleanField(default=True)),
                ('new_person_bonus', models.BooleanField(default=True)),
                ('new_person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='new_person', to='main.person')),
                ('referral', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='referral', to='main.person')),
            ],
        ),
        migrations.DeleteModel(
            name='FriendShip',
        ),
    ]