from django.contrib import admin
from django.urls import path, include
from api.views import CreateUserView, GetUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from api.views import MyTokenObtainPairView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/register/', CreateUserView.as_view(), name='register'),
    path('api/user-detail/<pk>', GetUserView.as_view(), name='user-detail'),
    path('api/token/', MyTokenObtainPairView.as_view(), name='get_token'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='refresh'),
    # path('api-auth/', include('rest_framework.urls'))
]
