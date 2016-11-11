//注意这里是引用已经创建好的模块,所以不用使用[]
angular.module("myapp")
    .constant("categoriesUrl", "json/categories.json")//定义URL常量
    .constant("productsUrl", "json/products.json")//定义URL常量
    .constant("orderUrl", "json/order.json")//定义URL常量
    .controller("sportsStoreCtrl", function ($scope, $http, categoriesUrl, productsUrl, shopCart, orderUrl, $location) {
        //准备商品模拟数据
        $scope.data = {};

        //http请求服务器端商品数据
        $http.get(categoriesUrl).success(function (responseData) {
            $scope.data.categories = responseData;
        });

        $http.get(productsUrl).success(function (responseData) {
            $scope.data.products = responseData;
        });
        //将商品加入购物车
        $scope.addToCart = function (product) {
            shopCart.add(product);
        };

        //发送订单
        //1:购物车中商品信息  2,用户的收货信息
        $scope.sendOrder = function () {
            var order = angular.copy(shopCart.findAll());//拷贝一份购物信息数据
            order.shipping = $scope.data.shipping;
            $http.post(orderUrl, order)
                .success(function (responseData) {

                    //储存订单号
                    $scope.data.shipping.orderId = responseData.orderId;
                    //清空购物车
                    shopCart.findAll().length = 0;
                })
                .error(function (err) {

                    //储存错误信息
                    $scope.data.shipping.orderError = err;
                })
                .finally(function () {
                    //跳转到thankYou.html页面
                    $location.path("thankYou");
                });
        };


        /* categories:[
         {id:"01",category:"Category #01"},
         {id:"02",category:"Category #02"},
         {id:"03",category:"Category #03"},
         {id:"04",category:"Category #04"}
         ],
         //商品明细
         products:[
         {name:"product #1",description:"A product",category:"Category #01",price:100,imgurl:"images/1.jpg"},
         {name:"product #2",description:"A product",category:"Category #02",price:100,imgurl:"images/1.jpg"},
         {name:"product #3",description:"A product",category:"Category #02",price:100,imgurl:"images/1.jpg"},
         {name:"product #4",description:"A product",category:"Category #04",price:100,imgurl:"images/1.jpg"},
         {name:"product #1",description:"A product",category:"Category #01",price:100,imgurl:"images/1.jpg"},
         {name:"product #2",description:"A product",category:"Category #02",price:100,imgurl:"images/1.jpg"},
         {name:"product #3",description:"A product",category:"Category #03",price:100,imgurl:"images/1.jpg"},
         {name:"product #4",description:"A product",category:"Category #02",price:100,imgurl:"images/1.jpg"},
         {name:"product #1",description:"A product",category:"Category #01",price:100,imgurl:"images/1.jpg"},
         {name:"product #2",description:"A product",category:"Category #02",price:100,imgurl:"images/1.jpg"},
         {name:"product #3",description:"A product",category:"Category #03",price:100,imgurl:"images/1.jpg"},
         {name:"product #4",description:"A product",category:"Category #04",price:100,imgurl:"images/1.jpg"},
         {name:"product #1",description:"A product",category:"Category #01",price:100,imgurl:"images/1.jpg"},
         {name:"product #2",description:"A product",category:"Category #02",price:100,imgurl:"images/1.jpg"},
         {name:"product #3",description:"A product",category:"Category #03",price:100,imgurl:"images/1.jpg"},
         {name:"product #4",description:"A product",category:"Category #04",price:100,imgurl:"images/1.jpg"},
         {name:"product #1",description:"A product",category:"Category #01",price:100,imgurl:"images/1.jpg"},
         {name:"product #2",description:"A product",category:"Category #01",price:100,imgurl:"images/1.jpg"},
         {name:"product #3",description:"A product",category:"Category #01",price:100,imgurl:"images/1.jpg"},
         {name:"product #4",description:"A product",category:"Category #04",price:100,imgurl:"images/1.jpg"},
         {name:"product #1",description:"A product",category:"Category #01",price:100,imgurl:"images/1.jpg"},
         {name:"product #2",description:"A product",category:"Category #02",price:100,imgurl:"images/1.jpg"},
         {name:"product #3",description:"A product",category:"Category #03",price:100,imgurl:"images/1.jpg"},
         {name:"product #4",description:"A product",category:"Category #02",price:100,imgurl:"images/1.jpg"},
         {name:"product #1",description:"A product",category:"Category #01",price:100,imgurl:"images/1.jpg"},
         {name:"product #2",description:"A product",category:"Category #02",price:100,imgurl:"images/1.jpg"},
         {name:"product #3",description:"A product",category:"Category #03",price:100,imgurl:"images/1.jpg"},
         {name:"product #4",description:"A product",category:"Category #04",price:100,imgurl:"images/1.jpg"},
         {name:"product #1",description:"A product",category:"Category #02",price:100,imgurl:"images/1.jpg"},
         {name:"product #2",description:"A product",category:"Category #02",price:100,imgurl:"images/1.jpg"},
         {name:"product #3",description:"A product",category:"Category #03",price:100,imgurl:"images/1.jpg"},
         {name:"product #4",description:"A product",category:"Category #04",price:100,imgurl:"images/1.jpg"}
         ]

         }*/
    });