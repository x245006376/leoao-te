/**
 * Created by Administrator on 2016/6/11 0011.
 */
angular.module("myapp").controller("loveCtrl",function($scope,$http){
    var url = "json/love.json";
    $http.get(url).success(function (data) {
        $scope.cats = data.cat;
        $scope.xias = data.xia;
        //请求上新子页面数据
        $scope.sxs = data.sx;
        //请求流行子页面数据
        $scope.lxs = data.lx;
        //请求值得买子页面数据
        $scope.zdms = data.zdm;
    }).error(function (err) {
        $ionicLoading.show({
            template: "无法加载数据。请稍后再试。",
            duration: 2000
        });
    });

    // 下拉刷新
    $scope.doRefresh = function () {
        $http.get(url).success(function (data) {
            $scope.cats = data.cat;
            $scope.xias = data.xia;
        }).finally(function () {
            $scope.$broadcast("scroll.refreshComplete")
        })
    };
    //无限滚动
    $scope.loadMore = function () {
        $http.get(url).success(function (data) {
            Array.prototype.push.apply($scope.xias,data.xia);
        }).finally(function () {
            //更新框架，更新数据结束  撤销图标；
            $scope.$broadcast("scroll.infiniteScrollComplete");
        })
    }
});