from django.shortcuts import render

# Create your views here.
from .forms import AudioForm

def upload_audio(request):
    if request.method == 'POST':
        form = AudioForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return result(request)
    else:
        form = AudioForm()
        return render(request, 'upload_audio.html', {'form': form})

def base(request):
    return render(request, 'base.html')

def index(request):
    return render(request, 'index1.html')

def support(request):
    return render(request, 'support.html')

def about(request):
    return render(request, 'about-us.html')

def terms(request):
    return render(request, 'terms.html')

def blog(request):
    return render(request, 'blog.html')

def result(request):
    return render(request, 'result.html')   

def privacy(request):
    return render(request, 'privacy.html')

def contact(request):
    return render(request, 'contact.html') 