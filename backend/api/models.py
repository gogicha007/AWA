import datetime
from django.contrib.gis.db import models
from django.contrib.auth.models import User


class Purchase(models.Model):
    MATERIALS = [
        ('PE100', 'PE100'),
        ('STEEL', 'STEEL'),
        ('STAINLESS_STEEL', 'STAINLESS STEEL'),
        ('CI', 'CI'),
        ('NA', 'NA')
    ]
    UNIT = [
        ('PCS', 'PCS'),
        ('M', 'M'),
        ('KG', 'KG'),
    ]
    CATEGORIES = [
        ('PIPE', 'PIPE'),
        ('VALVE', 'VALVE'),
        ('FITTING', 'FITTING'),
        ('STRAINER', 'STRAINER'),
        ('PUMP', 'PUMP'),
        ('DISMANTLING_JOINT', 'DISMANTLING JOINT'),
        ('OTHER', 'OTHER')
    ]
    PN = [
        ('8', '8'),
        ('10', '10'),
        ('16', '16'),
        ('20', '20'),
        ('25', '25'),
        ('40', '40'),
        ('65', '65'),
        ('NA', 'NA')
    ]
    CURRENCY = [
        ('USD', 'USD'),
        ('EUR', 'EUR')
    ]
    name = models.CharField(max_length=50, null=True, blank=True)
    material = models.CharField(
        max_length=15, choices=MATERIALS, default='PE100', null=True, blank=True)
    type = models.CharField(
        max_length=17, choices=CATEGORIES, default='OTHER', null=True, blank=True
    )
    dn = models.IntegerField(null=True)
    pn = models.CharField(
        max_length=3, choices=PN, default='NA', null=True, blank=True)
    decl_no = models.CharField(max_length=7, null=True, blank=True)
    decl_date = models.DateField(default=datetime.date.today)
    seller = models.CharField(max_length=30, null=True, blank=True)
    truck = models.CharField(max_length=25, null=True, blank=True)
    invoice = models.CharField(max_length=20, null=True, blank=True)
    inv_date = models.DateField(default=datetime.date.today)
    name = models.CharField(max_length=100, null=True, blank=True)
    description = models.CharField(max_length=200, null=True, blank=True)
    qty = models.DecimalField(
        max_digits=9, decimal_places=2, null=True, blank=True)
    measure = models.CharField(
        max_length=5, choices=UNIT, default='PCS', null=True, blank=True
    )
    price = models.DecimalField(
        max_digits=9, decimal_places=2, null=True, blank=True
    )
    currency = models.CharField(
        max_length=3, choices=CURRENCY, default='EUR', null=True, blank=True
    )

    class Meta:
        db_table = 'purchase'
        ordering = ['material', 'dn']

    def __str__(self):
        return f'{self.material}, DN{str(self.dn)}'

