//在创建一个新的模块
angular.module("myFilter",[]);

//在该模块中注册一个过滤器
angular.module("myFilter").filter("range", function () {
    return function (products, currentPage,pageSize) {
        //先判断一下这个过滤器传过来的参数 是否正确
        if(angular.isArray(products)&&angular.isNumber(currentPage)&&angular.isNumber(pageSize)){
            //计算要截取子集的起始索引
            var startIndex=(currentPage-1)*pageSize;
            //如果起始位置索引超出了数组范围
            if(startIndex>products.length-1){
                return[];//返回一个空数组
            }
            //从计算出来的起始索引处开始,截取指定页面打下大小的元素子集 并返回
            return products.splice(startIndex,pageSize);
        }
        else {
            return products;
        }
    }
});

//创建一个过滤导航按钮的过滤器
angular.module("myFilter").filter("pageCount", function () {
    return function (products, pageSize) {

        if(angular.isArray(products)&&angular.isNumber(pageSize)){
            //先计算导航按钮的个数
            var pages=Math.ceil(products.length/pageSize);

            //生成一个新的数组[1,2,3]
            var result=[];
            for(var i=0;i<pages;i++){
                result.push(i+1);
            }
            return result;
        }else {
            return products;
        }
    }
});