from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Hike, Tag
from .serializers import HikeSerializer, TagSerializer

@api_view(['GET'])
def getAllHikes(request):
    hikes = Hike.objects.all().order_by('-date_of_hike')
    serializer = HikeSerializer(hikes, many=True)
    
    return Response(serializer.data)

@api_view(['GET'])
def getLatestHikes(request, volume):
    sorted_hikes = Hike.objects.all().order_by('-date_of_hike')

    if len(sorted_hikes) <= volume:
        serializer = HikeSerializer(sorted_hikes, many = True)
        return Response(serializer.data)

    serializer = HikeSerializer(sorted_hikes[0:volume], many = True)
    return Response(serializer.data)


@api_view(['GET'])
def getHikesByCategory(request, category):
    hikes = Hike.objects.filter(category = category).order_by('-date_of_hike')
    serializer = HikeSerializer(hikes, many = True)
    return Response(serializer.data)


@api_view(['GET'])
def getHikeById(request, id):
    hike = Hike.objects.get(id=id)
    serializer = HikeSerializer(hike, many = False)
    return Response(serializer.data)