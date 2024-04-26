"""
URL configuration for quiz_exam project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
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

from django.urls import path
from home.views import *

urlpatterns = [
    path("", home, name="home"),
    path("pythonQuiz/", python_quiz, name="python_quiz"),
    path("javaQuiz/", java_quiz, name="java_quiz"),
    path("cplusQuiz/", cplus_quiz, name="cplus_quiz"),
    path("javasQuiz/", javas_quiz, name="javas_quiz"),
    path("csharkQuiz/", cshark_quiz, name="cshark_quiz"),
    path("rubyQuiz/", ruby_quiz, name="ruby_quiz"),
    path("swiftQuiz/", swift_quiz, name="swift_quiz"),
    path("goQuiz/", go_quiz, name="go_quiz"),
    path("kotlinQuiz/", kotlin_quiz, name="kotlin_quiz"),
    path("fsharpQuiz/", go_quiz, name="fsharp_quiz"),
    path("blogProgramming/", blog_programming, name="blog_programming"),
    
]
