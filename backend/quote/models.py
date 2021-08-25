from django.db import models

# Create your models here.
class Quote(models.Model):
    author = models.CharField(max_length=50)
    phrase = models.TextField()
