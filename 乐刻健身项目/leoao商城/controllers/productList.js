angular.module("myapp")
    .constant("activeClass", "btn-primary") //定义一个常量
    .constant("pageCount", 3)
    .controller("productListCtrl", function ($scope,activeClass) {
        var selectedCategory = null; //保存当前商品的类别

        //单击类别按钮时
        $scope.selectCategory = function (categoryName) {
            selectedCategory = categoryName;  //保存传过来的被单击的那个类别的名称
            $scope.currentPage=1;//恢复当前按钮页码默认为1
        };

        //自定义一个函数-返回true或false
        $scope.categoryFilter = function (item) {

            //简单方法
            return selectedCategory == null || selectedCategory == item.category;

            /*    if(selectedCategory==null){
             //说明选择的是首页
             return true;
             }else if(selectedCategory==item.category){
             //如果当前选中的类别和当前正在过滤的类别一致
             return true;//让这个商品显示
             }else {
             return false;
             }*/
        };

        //定义一个选中状态下按钮颜色
        $scope.activeClass = function (categoryName) {
            //如果当前的类别是被选中的类别,就返回"btn-primary" 否则返回""
            /*       return selectedCategory==categoryName?"btn-primary" : "";*/
            /*    通用方法,调用了上面定义的常量  这样activeClass调用更方便*/
            return selectedCategory == categoryName ? activeClass : "";
        };

        //定义用于分页的变量
        $scope.currentPage=1;
        $scope.pageSize=3;

        //分页按钮单机响应事件,参数为当前要求显示的码数
        $scope.selectPage= function (page) {
            $scope.currentPage=page;//将当前页面转换为传过来的要显示的页面
        };

        //高亮显示-获取active class 参数为代码页数
        $scope.activePageClass= function (page) {
            return $scope.currentPage==page ? activeClass:"";
        }
    });