# Generated by Django 5.0.6 on 2024-09-28 18:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_purchase_truck'),
    ]

    operations = [
        migrations.AlterField(
            model_name='purchase',
            name='currency',
            field=models.CharField(blank=True, choices=[('USD', 'USD'), ('EUR', 'EUR')], default='EUR', max_length=3, null=True),
        ),
        migrations.AlterField(
            model_name='purchase',
            name='material',
            field=models.CharField(blank=True, choices=[('PE100', 'PE100'), ('STEEL', 'STEEL'), ('STAINLESS_STEEL', 'STAINLESS STEEL'), ('CI', 'CI'), ('NA', 'NA')], default='PE100', max_length=15, null=True),
        ),
        migrations.AlterField(
            model_name='purchase',
            name='measure',
            field=models.CharField(blank=True, choices=[('PCS', 'PCS'), ('M', 'M'), ('KG', 'KG')], default='PCS', max_length=5, null=True),
        ),
        migrations.AlterField(
            model_name='purchase',
            name='pn',
            field=models.CharField(blank=True, choices=[('8', '8'), ('10', '10'), ('16', '16'), ('20', '20'), ('25', '25'), ('40', '40'), ('65', '65'), ('NA', 'NA')], default='NA', max_length=3, null=True),
        ),
        migrations.AlterField(
            model_name='purchase',
            name='type',
            field=models.CharField(blank=True, choices=[('PIPE', 'PIPE'), ('VALVE', 'VALVE'), ('FITTING', 'FITTING'), ('STRAINER', 'STRAINER'), ('PUMP', 'PUMP'), ('DISMANTLING_JOINT', 'DISMANTLING JOINT'), ('OTHER', 'OTHER')], default='OTHER', max_length=17, null=True),
        ),
    ]
