"""projectname URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('deepfake.urls')),
    path('index/',include('deepfake.urls')),
    path('support/',include('deepfake.urls')),
    path('terms/',include('deepfake.urls')),
    path('about-us/',include('deepfake.urls')),
    path('blog/',include('deepfake.urls')),
    path('result/',include('deepfake.urls')),
    ]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
