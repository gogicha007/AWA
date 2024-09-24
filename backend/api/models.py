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
    name = models.CharField(max_length=50)
    material = models.CharField(
        max_length=15, choices=MATERIALS, default='PE100')
    type = models.CharField(
        max_length=17, choices=CATEGORIES, default='OTHER'
    )
    dn = models.IntegerField(null=True)
    pn = models.CharField(
        max_length=3, choices=PN, default='NA')
    decl_no = models.CharField(max_length=7)
    decl_date = models.DateField
    seller = models.CharField(max_length=30)
    truck = models.CharField(max_length=12)
    invoice = models.CharField(max_length=20)
    inv_date = models.DateField
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    quantity = models.DecimalField(
        max_digits=9, decimal_places=2, null=True, blank=True)
    measure = models.CharField(
        max_length=5, choices=UNIT, default='PCS'
    )
    price = models.DecimalField(
        max_digits=9, decimal_places=2, null=True, blank=True
    )
    currency = models.CharField(
        max_length=3, choices=CURRENCY, default='EUR'
    )

    class Meta:
        db_table = 'purchase'
        ordering = ['material', 'dn']

    def __str__(self):
        return f'{self.material}, DN{str(self.dn)}'


class Materials(models.Model):
    MATERIALS = [
        ('PE100', 'PE100'),
        ('STEEL', 'STEEL'),
        ('STAINLESS_STEEL', 'STAINLESS STEEL'),
        ('CI', 'CI'),
        ('NA', 'NA')
    ]
    CATEGORIES = [
        ('PIPE', 'PIPE'),
        ('VALVE', 'VALVE'),
        ('FITTING', 'FITTING'),
        ('STRAINER', 'STRAINER'),
        ('DISMANTLING_JOINT', 'DISMANTLING JOINT'),
        ('OTHER', 'OTHER')
    ]
    PNS = [
        ('8', '8'),
        ('10', '10'),
        ('16', '16'),
        ('20', '20'),
        ('25', '25'),
        ('40', '40'),
        ('65', '65'),
        ('NA', 'NA')
    ]
    name = models.CharField(max_length=50)
    material = models.CharField(
        max_length=15, choices=MATERIALS, default='PE100')
    type = models.CharField(
        max_length=17, choices=CATEGORIES, default='OTHER'
    )
    pn = models.CharField(
        max_length=17, choices=PNS, default='NA')

    dn = models.IntegerField(null=True)
    od = models.DecimalField(
        max_digits=6, decimal_places=2, null=True, blank=True)
    feature = models.CharField(max_length=10)

    class Meta:
        db_table = 'materials'
        ordering = ['material', 'dn']

    def __str__(self):
        return f'{self.material}, DN{str(self.dn)}'


class Suppliers(models.Model):
    name = models.CharField(max_length=20)


class Purchases(models.Model):
    invoice_no = models.CharField(max_length=20)
    manufacturer = models.CharField(max_length=20)

    def __str__(self):
        return str(self.id)


class Nodes(models.Model):
    name = models.CharField(max_length=20)


class Junctions(models.Model):
    geom = models.PointField()
    name = models.CharField(max_length=20)
    make = models.CharField(max_length=50, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    dc_id = models.CharField(max_length=5, null=True, blank=True)
    elevation = models.DecimalField(max_digits=6, decimal_places=2, null=True)

    class Meta:
        db_table = 'junctions'

    def __str__(self):
        return str(self.id)
