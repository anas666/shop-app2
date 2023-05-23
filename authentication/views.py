from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from .models import User


def login_view(request):
    if request.method == 'POST':
        email = request.POST['user-email']
        password = request.POST['user-password']

        user = authenticate(email=email, password=password)

        if user is None:
            pass
        else:
            login(request, user)
            return redirect('home')

        return render(request, 'signin1.html')
    else:
        if request.user.is_authenticated:
            return redirect('/home')

        return render(request, 'signin1.html')


def sign_up_view(request):
    if request.method == 'POST':
        email = request.POST['email']
        first_name = request.POST['first_name']
        second_name = request.POST['second_name']
        phone_number = request.POST['phone_number']
        password = request.POST['password']

        user = User.objects.create_user(email=email, password=password)

        if user is not None:
            user.first_name = first_name
            user.second_name = second_name
            user.phone_number = phone_number
            user.save()
            logout(request)
            print("Creation Done")
            return redirect('authentication/login')

    return render(request, 'signup.html')
