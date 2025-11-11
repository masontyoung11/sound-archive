from django.db import models

# Create your models here.
class Album(models.Model):
    title = models.CharField(max_length=200)
    artist = models.CharField(max_length=200)
    genre = models.CharField(max_length=100)
    rating = models.CharField(max_length=10)
    runtime = models.CharField(max_length=100)
    cover_url = models.URLField(blank=True, null=True)
    release_date = models.DateField()
    songs = models.JSONField(default=list)
    colours = models.JSONField(default=list)
