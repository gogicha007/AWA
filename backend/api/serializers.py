from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'username', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        print(user.first_name)
        return user


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['firstName'] = user.first_name
        token['lastName'] = user.last_name
        token['username'] = user.username
        token['email'] = user.email
        token['is_superuser'] = user.is_superuser
        token['is_staff'] = user.is_staff
        token['refresh_lifetime'] = int(token.lifetime.total_seconds()*1000) # type: ignore
        token['access_lifetime'] = int(token.access_token.lifetime.total_seconds()*1000) # type: ignore
        print(int(token.lifetime.total_seconds()*1000)) # type: ignore
        print(int(token.access_token.lifetime.total_seconds()*1000)) # type: ignore
        return token
