from django.conf.urls import url

from axf import views

urlpatterns = [
    url(r'^$', views.home, name='index'),  # 首页
    url(r'^home/$', views.home, name='home'),   # 首页
    url(r'^market/(\d+)/(\d+)/(\d+)/$', views.market, name='market'), # 闪购超市
    url(r'^cart/$', views.cart, name='cart'),   # 购物车
    url(r'^mine/$', views.mine, name='mine'),   # 我的


    url(r'^registe/$', views.registe, name='registe'),  # 注册
    url(r'^checkaccount/$', views.checkaccount, name='checkaccount'), # 账号验证
    url(r'^logout/$', views.logout, name='logout'), # 退出
    url(r'^login/$', views.login, name='login'),    # 登录
]