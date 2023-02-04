from django.urls import path
from .views import getAllHikes, getLatestHikes, getHikesByCategory, getHikeById

urlpatterns = [
    path('hikes/', getAllHikes),
    path('latesthikes/<int:volume>', getLatestHikes),
    path('hikes/<str:category>', getHikesByCategory),
    path('hike/<int:id>', getHikeById),
]
