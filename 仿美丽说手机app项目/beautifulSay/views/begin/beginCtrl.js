/**
 * Created by hxsd on 2016/6/8.
 */
angular.module("myapp")
    .controller("beginCtrl", function ($scope,$ionicSlideBoxDelegate) {
        $scope.onSlideChanged2 = function () {
            if($ionicSlideBoxDelegate.currentIndex() == $ionicSlideBoxDelegate.slidesCount() - 1){
                setTimeout(jinru,3000);
                function jinru(){
                    $("#btn").click();
                }
            }
        }
    });