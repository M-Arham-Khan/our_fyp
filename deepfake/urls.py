from django.urls import path
from . import views

urlpatterns = [
    path('upload-audio/', views.upload_audio, name='upload_audio'),
    path('base/', views.base, name='base'),
    path('index/', views.index, name='index1'),
    path('', views.index, name='index'),
    path('support/', views.support, name='support'),
    path('terms/', views.terms, name='terms'),
    path('about/', views.about, name='about'),
    path('blog/', views.blog, name='blog'),
    path('result/', views.result, name='result'),
    path('privacy/', views.privacy, name='privacy'),
    path('contact/', views.contact, name='contact'),
]
