/**
 * Created by Administrator on 2016/6/12.
 */
app.controller("myFriendsCtrl", function ($scope, $rootScope) {
    $scope.delete = function (item) {
        $rootScope.friends.splice($rootScope.friends.indexOf(item), 1)
    };
    $scope.reorder = function (item, fromIndex, toIdx) {
        $rootScope.friends.splice(fromIndex, 1);
        $rootScope.friends.splice(toIdx, 0, item);
    };
    $scope.show = {
        delete: false,
        reorder: false
    };
    $scope.showDelete = function () {
        $scope.show.reorder = false;
        $scope.show.delete = !$scope.show.delete;
    };
    $scope.showReorder = function () {
        $scope.show.delete = false;
        $scope.show.reorder = !$scope.show.reorder;

    };
});