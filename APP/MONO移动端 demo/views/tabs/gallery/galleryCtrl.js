/**
 * Created by Administrator on 2016/6/13.
 */
app.controller("galleryCtrl",function($scope,$http){
    $http.get("json/gengs.json").success(function(data){
       $scope.gallery=data;
    });
    $scope.refreshG = function () {
        $http.get("json/gengs.json").success(function (data) {
            $scope.gallery = data;
        }).finally(function () {
            $scope.$broadcast("scroll.refreshComplete");
        });
    };
    $scope.infiniteScrollG = function () {
        $http.get("json/gengs.json").success(function (data) {
            Array.prototype.push.apply($scope.gallery,data);
        }).finally(function () {
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    };
});