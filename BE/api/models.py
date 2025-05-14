from django.db import models

class Productos(models.Model):
    nombre = models.CharField(max_length=60)
    descripcion = models.CharField(max_length=120)
    precio = models.IntegerField()
    cantidad = models.IntegerField()
