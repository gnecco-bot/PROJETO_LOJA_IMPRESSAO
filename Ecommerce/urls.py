from django.urls import path
from . import views

app_name = 'app-ecommerce'

urlpatterns = [
    path('', views.pagina_inicial, name='pagina_inicial'),
    path('produto/', views.pagina_produto, name='pagina_produto'),
]
