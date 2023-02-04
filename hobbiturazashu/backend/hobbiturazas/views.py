from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Hike, Tag
from .serializers import HikeSerializer, TagSerializer

@api_view(['GET'])
def getAllHikes(request):
    hikes = Hike.objects.all()
    serializer = HikeSerializer(hikes, many=True)
    
    return Response(serializer.data)