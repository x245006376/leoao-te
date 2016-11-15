/**
 * Created by Administrator on 2016/6/9 0009.
 */
angular.module("myapp").controller("homeCtrl",function($scope,$http){
    $scope.imgs = [
        {image:"images/lunbo_01.jpg"},
        {image:"images/lunbo_02.jpg"},
        {image:"images/lunbo_03.jpg"},
        {image:"images/lunbo_04.jpg"},
        {image:"images/lunbo_05.jpg"}
    ];
    //ajax请求
    var url = "json/home.json";
    $http.get(url).success(function (data) {
        $scope.datas = data;

    }).error(function (err) {
        $ionicLoading.show({
            template: "无法加载数据。请稍后再试。",
            duration: 3000
        });
    });
    // 下拉刷新
    $scope.doRefresh = function () {
        $http.get(url).success(function (data) {
            $scope.datas = data;

        }).finally(function () {
            $scope.$broadcast("scroll.refreshComplete")
        })
    };
    //无限滚动
    $scope.loadMore = function () {
        $http.get(url).success(function (data) {
            Array.prototype.push.apply($scope.datas,data);
        }).finally(function () {
            //更新框架，更新数据结束  撤销图标；
            $scope.$broadcast("scroll.infiniteScrollComplete");
        })
    }
});