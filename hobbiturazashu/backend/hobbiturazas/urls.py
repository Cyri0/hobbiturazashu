from django.urls import path
from .views import getAllHikes

urlpatterns = [
    path('hikes/', getAllHikes)
]
