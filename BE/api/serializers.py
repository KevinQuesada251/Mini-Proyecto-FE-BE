from .models import Productos
from rest_framework import serializers
from django.core.exceptions import ValidationError

#Serializers
class ProductosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productos
        fields = '__all__'
        
    # Validaciones
    def validate_precio(self, value):
        if value < 0 :
            raise ValidationError("No puede tener un precio negativo")
        return value
    
    def validate_cantidad(self, value):
        if value < 0 :
            raise ValidationError("No puede tener una cantidad negativa")
        return value
