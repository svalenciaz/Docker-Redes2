from .serializer import QuoteSerializer
from .models import Quote
from rest_framework import viewsets

class QuoteViewSet(viewsets.ModelViewSet):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer