from django.contrib.auth.base_user import AbstractBaseUser
from .managers import UserManager
from django.db.models import (
    EmailField,
    CharField,
    DateTimeField,
    BooleanField,
    Model,
)


class User(AbstractBaseUser):
    email = EmailField(unique=True)
    first_name = CharField(max_length=255)
    second_name = CharField(max_length=255)
    phone_number = CharField(max_length=11)
    date_of_joined = DateTimeField(auto_now_add=True)
    is_active = BooleanField(default=True)
    is_superuser = BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email
