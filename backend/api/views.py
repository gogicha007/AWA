from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import Purchase

from .serializers import UserSerializer, MyTokenObtainPairSerializer, PurchaseSerializer


class PurchaseView(APIView):
    def get(self, request):
        queryset = Purchase.objects.all().order_by('id')
        serializer = PurchaseSerializer(queryset, many=True) 
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request):
        pass
        

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    

class GetUserView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
