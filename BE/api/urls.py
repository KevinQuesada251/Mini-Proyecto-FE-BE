from django.urls import path
from .views import ProductosListCreateView,ProductosDetailView

urlpatterns = [
    path('productos/',ProductosListCreateView.as_view(), name='Productos-listar-crear'),
    path('productos/<int:pk>/',ProductosDetailView.as_view(), name='Productos-editar-eliminar'),
]
