from django.contrib import admin
from django.urls import path
from .views import home
from .views import album_list

urlpatterns = [
    path('home/', home, name='home'),
    path('albums/', album_list, name='album-list')
]
