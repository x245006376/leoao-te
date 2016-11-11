//创建一个新的模块
var mycart=angular.module("myCart",[]);

// 创建购物车对象
//创建这样的service有三个方法, service provider  factory
//factory是一个工厂方法
angular.module('myCart').factory("shopCart", function () {

    var cart=[];   //相当于购物车里的购物筐

    //返回一个对象-购物车
    return {
            //定义一个方法  向购物车添加商品
            add: function (product) {
                var flag=false;
                //先判断购物车是否有此商品
                for(var index=0;index<cart.length;index++){
                    if(cart[index].product.name==product.name){
                        flag=true;
                        //如果找到了,则修改item对象有number值做代表的数量(++)
                        cart[index].number++;
                        break;
                    }
                }
                //如果没有找到,则创建一个新的对象,然后将item添加到这个购物车中
                if(!flag){
                    var item={};
                    item.product=product;
                    item.number=1;
                    //将item放入购物车中
                    cart.push(item)
                }
            },
            remove: function (name) {
                for(var index=0;index<cart.length;index++){
                    if(cart[index].product.name==name){
                        //如果找到了,则修改item对象有number值做代表的数量(++)
                        cart.splice(index,1);
                    }
                }
            },
            find:function(name){

            },
            findAll:function (name) {
                return cart;
            },
            clear: function () {
                cart.length=0;
            }
        };

});
//在这个模块中,再定义一个控制器(MVC- C-... V-.html M-购物车中的数据)
//分析:这个控制器提供了两个方法,1获取购物车中的商品的数量 2获取购物车中商品的总金额

angular.module("myCart").controller("cartController", function ($scope, shopCart) {
    //拿到购物车中所有商品信息
    var cart=shopCart.findAll();

    //方法一  获取购物车中商品的数量

    $scope.countTotal= function () {
        var total=0;//保存商品的数量

        //遍历CART数组  统计商品的总量
        for(var i=0;i<cart.length;i++){
            total+=cart[i].number;
        }
        return total;
    };

    //方法二: 获取购物车中商品的总金额
    $scope.moneyTotal= function () {

        var total=0; //保存商品总金额

        //遍历CART数组  统计商品总金额
        for(var i=0;i<cart.length;i++){
            total+=cart[i].product.price*cart[i].number;
        }
        return total;
    };



});