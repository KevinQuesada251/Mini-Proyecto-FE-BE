from django.db import models

# Modelo de Productos

class Productos(models.Model):
    nombre = models.CharField(max_length=60)
    descripcion = models.CharField(max_length=120)
    precio = models.IntegerField()
    cantidad = models.IntegerField()
