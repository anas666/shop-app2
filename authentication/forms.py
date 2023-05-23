from django import forms
from .models import User


class UserCreationForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ["email", "first_name", "second_name", "phone_number", "password"]
