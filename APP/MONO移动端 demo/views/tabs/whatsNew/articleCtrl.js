/**
 * Created by Administrator on 2016/6/12.
 */
app.controller("articleCtrl",function($scope,$stateParams,$http){
    $http.get("json/whatsNew.json").success(function(data){
        for(i in data){
            if(data[i].articleID==$stateParams.articleID){
                $scope.currentArticle=data[i];
            }
        }
    }).finally();
});