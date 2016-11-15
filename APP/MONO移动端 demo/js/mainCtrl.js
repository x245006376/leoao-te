/**
 * Created by Administrator on 2016/6/11.
 */
app.controller("mainCtrl",function($scope,$ionicPopup,$rootScope){
    $scope.login={
        in:false,
        out:true,
        nameInvalid:false,
        pwInvalid:false
    };
    $rootScope.userLogin=$scope.login;
    $scope.user={
        userName:'喵星人',
        password:'mono',
        avatar:'images/avatar.png'
    };
    $scope.userL={
        userName:'',
        password:''
    };
    $scope.userLogin=function(name,pwd) {
        if (name!=$scope.user.userName) {
            $scope.login.nameInvalid=true;
            $scope.login.pwInvalid=false;
        } else if(pwd!=$scope.user.password) {
            $scope.login.nameInvalid=false;
            $scope.login.pwInvalid=true;
        } else {
            $scope.login.in = true;
            $scope.login.out = false;
            $scope.login.nameInvalid=false;
            $scope.login.pwInvalid=false;
        }
    };
    $scope.userLoginOut=function(){
        var confirmPopup =$ionicPopup.confirm({
            title: '退出登陆',
            template: '你确定要退出登陆喵？'
        });
        confirmPopup.then(function(res) {
            if (res) {
                $scope.login.in = false;
                $scope.login.out = true;
                $scope.login.invalid = false;
                $scope.userL.userName = '';
                $scope.userL.password = '';
            }
        });
    };
});