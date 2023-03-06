from django import forms
from .models import Audio

class AudioForm(forms.ModelForm):
    class Meta:
        model = Audio
        fields = ( 'audio_file',)
        
'''class AudioUploadForm(forms.Form):
    audio_file = forms.FileField(required=True)

    def clean_audio_file(self):
        audio_file = self.cleaned_data.get('audio_file', False)
        if audio_file:
            if not audio_file.name.endswith('.mp3'):
                raise forms.ValidationError("Only MP3 files are allowed.")
            if audio_file.size > 10 * 1024 * 1024:
                raise forms.ValidationError("File size must be under 10MB.")
        else:
            raise forms.ValidationError("Please upload a file.")
        return audio_file'''