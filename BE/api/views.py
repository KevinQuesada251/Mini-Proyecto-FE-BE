from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Productos
from .serializers import ProductosSerializer

# Vista Crear y Listar
class ProductosListCreateView(ListCreateAPIView):
    queryset = Productos.objects.all()
    serializer_class = ProductosSerializer

# Vista Actualizar y Eliminar
class ProductosDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Productos.objects.all()
    serializer_class = ProductosSerializer


