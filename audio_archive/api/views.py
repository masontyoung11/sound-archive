from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Album
from .serialisers import AlbumSerialiser

# Create your views here.
@api_view(['GET'])
def home(request):
    return Response({"message": "Welcome to the Audio Archive API"})

@api_view(['GET'])
def album_list(request):
    albums = Album.objects.all()
    serialiser = AlbumSerialiser(albums, many=True)
    return Response(serialiser.data)

