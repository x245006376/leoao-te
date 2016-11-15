/**
 * Created by Administrator on 2016/6/11 0011.
 */
angular.module("myapp").controller("classifyCtrl",function($scope,$http){
    var url = "json/classify.json";
    $http.get(url).success(function (data) {
        $scope.shangyis = data.shangyi;
        $scope.kuzis = data.kuzi;
        $scope.qunzis = data.qunzi;
        $scope.xiezis = data.xiezi;
        $scope.peishis = data.peishi;
        $scope.baos = data.bao;
        $scope.mans = data.man;
        $scope.familys = data.family;
        $scope.tongzhuangs = data.tongzhuang;
    }).error(function (err) {
        $ionicLoading.show({
            template: "无法加载数据。请稍后再试。",
            duration: 2000
        });
    });
});