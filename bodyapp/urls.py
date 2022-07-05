from django.urls import path

from . import views


app_name = "bodyapp"
urlpatterns = [
    path("", views.signin, name="index"),
    path("home", views.home, name="home"),
    path("home/head", views.head, name="head"),
    path("home/manbody", views.manbody, name="manbody")
]
