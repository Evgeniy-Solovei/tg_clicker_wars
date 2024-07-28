# Generated by Django 5.0.6 on 2024-07-28 09:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0013_referralsystem_delete_friendship'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='army',
            name='statistics',
        ),
        migrations.RenameField(
            model_name='army',
            old_name='bring_money',
            new_name='damage',
        ),
        migrations.AddField(
            model_name='army',
            name='cards',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='army',
            name='evolve_lvl',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='army',
            name='lvl_damage',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='army',
            name='lvl_speed',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='army',
            name='max_lvl_upgrade',
            field=models.IntegerField(default=5),
        ),
        migrations.AddField(
            model_name='army',
            name='price_damage',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='army',
            name='price_speed',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='person',
            name='recharge_energy',
            field=models.IntegerField(default=1),
        ),
        migrations.DeleteModel(
            name='Statistics_Army',
        ),
    ]
