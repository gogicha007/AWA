# Generated by Django 5.0.6 on 2024-09-26 06:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_delete_nodes_delete_suppliers'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Junctions',
        ),
        migrations.DeleteModel(
            name='Materials',
        ),
    ]
