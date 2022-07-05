from email import message
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib import messages
from . models import UserReg

# Create your views here.

def home(request):
    return render(request, "bodyapp/index.html")


def head(request):
    return render(request, "bodyapp/head.html")


def manbody(request):
    return render(request, "bodyapp/manbody.html")

def signin(request):

    if request.method == "POST":
        username = request.POST["name"]
        usermail = request.POST["email"]
        details = UserReg(username = username, usermail = usermail)
        if username !="" and usermail !="":
            check_existing = UserReg.objects.filter(username=username) and UserReg.objects.filter(usermail=usermail).exists()
            if check_existing:
                message1 = "user already exists"
                return render(request, "bodyapp/signup.html", {
                    "message1": message1
                })
                return HttpResponseRedirect(reverse("bodyapp:index"))
            else:    
                details.save()
                return HttpResponseRedirect(reverse("bodyapp:home"))
            
            
            
        else:
            message ="Please enter valid input"
            return render(request, "bodyapp/signup.html", {
                "message": message
            })
    return render(request, "bodyapp/signup.html")



