/**
 * Created by Administrator on 2016/6/10.
 */
app.controller("whatsNewCtrl", function ($scope,$http,$rootScope,$ionicPopup) {
    $scope.articles = [];
    $scope.friends=[];
    $scope.fav=[];
    $scope.login=$rootScope.userLogin;
    $http.get("json/whatsNew.json").success(function(data){
        $scope.articles=data;
        for(i in $scope.articles){
            $scope.articles[i].liked=false;
        }
        }).finally(function(){
        });
       $scope.data = {
        showFlag: false,
        reorderFlag: false
    };

    $scope.like=function(item){
        if(!item.liked){
            item.likes++;
            item.liked=!item.liked;
            var likePopup =$ionicPopup.alert({
                title: '成功点赞',
                template: '您已成功点赞'
            });
            likePopup.then(function(res){
            });
        } else {
            item.likes--;
            item.liked=!item.liked;
            var likePopup =$ionicPopup.alert({
                title: '成功取消赞',
                template: '您已残忍取消赞'
            });
            likePopup.then(function(res){
            });
        }
    };
    $scope.addAttention=function(item){
        if($scope.login.in) {
            if ($scope.friends[0] == undefined) {
                $scope.friends.push(item);
                var addPopup =$ionicPopup.alert({
                    title: '添加成功',
                    template: '已添加关注'+item.author+",可在猫的关注中查看"
                });
                addPopup.then(function(res){
                });
            } else {
                var flag = false;
                for (i in $scope.friends) {
                    if ($scope.friends[i].author == item.author) {
                        flag = true;
                    }
                }
                if (!flag) {
                    $scope.friends.push(item);
                    var addPopup =$ionicPopup.alert({
                        title: '添加成功',
                        template: '已添加关注'+item.author+",可在猫的关注中查看"
                    });
                    addPopup.then(function(res){
                    });
                } else {
                    var addPopup =$ionicPopup.alert({
                        title: '添加失败',
                        template: '您已关注过'+item.author+"啦"
                    });
                    addPopup.then(function(res){
                    });
                }
            }
        } else {
            var loginPopup =$ionicPopup.alert({
                title: '还未登录',
                template: '请右滑拉出登录菜单，登录完就能关注啦'
            });
            loginPopup.then(function(res){
            });
        }
        $rootScope.friends=$scope.friends;
    };
    $scope.addFav=function(item){
        if($scope.login.in) {
            if ($scope.fav[0] == undefined) {
                $scope.fav.push(item);
                var addPopup =$ionicPopup.alert({
                    title: '添加成功',
                    template: '已添加收藏，可在猫的收藏夹中查看'
                });
                addPopup.then(function(res){
                });
            } else {
                var flag = false;
                for (i in $scope.fav) {
                    if ($scope.fav[i].articleID == item.articleID) {
                        flag = true;
                    }
                }
                if (!flag) {
                    $scope.fav.push(item);
                    var addPopup =$ionicPopup.alert({
                        title: '添加成功',
                        template: '已添加收藏，可在猫的收藏夹中查看'
                    });
                    addPopup.then(function(res){
                    });
                } else {
                    var addPopup =$ionicPopup.alert({
                        title: '添加失败',
                        template: '您已收藏过这篇猫粮啦，可在猫的收藏夹中查看'
                    });
                    addPopup.then(function(res){
                    });
                }
            }
        } else {
            var loginPopup =$ionicPopup.alert({
                title: '还未登录',
                template: '请右滑拉出登录菜单，登录完就能添加收藏啦'
            });
            loginPopup.then(function(res){
            });
        }
        $rootScope.fav=$scope.fav;

    };
    $scope.refresh = function () {
        $http.get("json/whatsNew.json").success(function (data) {
            $scope.articles = data;
        }).finally(function () {
            $scope.$broadcast("scroll.refreshComplete");
        });
    };
    $scope.infiniteScroll = function () {
        $http.get("json/whatsNew.json").success(function (data) {
            Array.prototype.push.apply($scope.articles,data);
        }).finally(function () {
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    };
});