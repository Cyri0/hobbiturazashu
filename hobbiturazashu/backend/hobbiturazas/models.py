from django.db import models
from ckeditor.fields import RichTextField

category_choces = [
    ('hazai', 'hazai'),
    ('kulfoldi', 'kulfoldi'),
    ('utazas', 'utazas'),
    ('tervek', 'tervek'),
]
class Tag(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Hike(models.Model):
    title = models.CharField(max_length=200)
    category = models.CharField(choices=category_choces, max_length=200)
    image = models.ImageField(null = True, upload_to='images/')
    date_of_hike = models.DateField(null=True)
    intro = models.TextField(null = True)

    distance_in_km = models.IntegerField(null=True)
    altitude_in_m = models.IntegerField(null=True)

    description = RichTextField()

    tags = models.ManyToManyField(Tag)

    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
