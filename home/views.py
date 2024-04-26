from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return render(request, "index.html")


def python_quiz(request):
    return render(request, "python_quiz.html")


def java_quiz(request):
    return render(request, "java_quiz.html")


def cplus_quiz(request):
    return render(request, "cplus_quiz.html")


def javas_quiz(request):
    return render(request, "javas_quiz.html")


def cshark_quiz(request):
    return render(request, "cshark_quiz.html")
def ruby_quiz(request):
    return render(request, "ruby_quiz.html")
def swift_quiz(request):
    return render(request, "swift_quiz.html")
def go_quiz(request):
    return render(request, "go_quiz.html")
def kotlin_quiz(request):
    return render(request, "kotlin_quiz.html")
def fsharp_quiz(request):
    return render(request, "fsharp_quiz.html")

def blog_programming(request):
    return render(request, "blog_pf.html")
