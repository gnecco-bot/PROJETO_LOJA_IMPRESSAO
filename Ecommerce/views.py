from django.shortcuts import render

def pagina_inicial(request):
    return render(request, 'HTML/pagina_inicial.html')