from django.urls import path
from .views import login_view, sign_up_view

urlpatterns = [
    path('login', login_view, name='login'),
    path('crate-account', sign_up_view),
]

