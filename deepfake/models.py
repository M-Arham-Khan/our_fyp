from django.db import models

# Create your models here.

class Audio(models.Model):
    title = models.CharField(max_length=200)
    audio_file = models.FileField(upload_to='audios/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
