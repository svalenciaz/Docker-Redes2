from rest_framework import routers, urlpatterns

from .viewsets import QuoteViewSet

router = routers.SimpleRouter()
router.register('quotes', QuoteViewSet)

urlpatterns = router.urls