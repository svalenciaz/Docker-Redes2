from django.db.models import fields
from .models import Quote
from rest_framework import serializers

class QuoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quote
        fields = '__all__'
        