# Generated by Django 5.0.6 on 2024-09-28 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='purchase',
            name='truck',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
