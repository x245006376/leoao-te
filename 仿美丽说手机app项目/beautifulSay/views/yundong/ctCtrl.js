/**
 * Created by Administrator on 2016/6/11 0011.
 */

angular.module("myapp").controller("ctCtrl",function($scope,$http){
    //ajax请求
    var url = "json/ct.json";
    $http.get(url).success(function (data) {
        $scope.images = data;
    }).error(function (err) {
        $ionicLoading.show({
            template: "无法加载数据。请稍后再试。",
            duration: 2000
        });
    });

});
