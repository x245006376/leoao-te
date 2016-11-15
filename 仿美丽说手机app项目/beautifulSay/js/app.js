/**
 * Created by hxsd on 2016/6/8.
 */
// 创建主模块
var myapp = angular.module("myapp",["ionic"]);



// 配置路由
myapp.config(function($stateProvider,$urlRouterProvider, $ionicConfigProvider){
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

    $stateProvider.state("tabs",{    //tabs 指定状态
        url:"/tabs",   //指定url 无固定
        abstract:true,  //意思是：将这个路由声明为抽象的，也就是说，不能直接在浏览器显示；
        templateUrl:"views/tabs/tabs.html"
    });
    //开场动画路由
    $stateProvider.state("begin",{
        url:"/begin",
        templateUrl:"views/begin/begin.html",
        controller:"beginCtrl"
    });
    $stateProvider.state("search",{
        url:"/search",
        templateUrl:"views/home/search.html"
    });
    //------------------home----------------------
    $stateProvider.state("search-love",{
        url:"/search-love",
        templateUrl:"views/love/search-love.html"
    });
    $stateProvider.state("search-classify",{
        url:"/search-classify",
        templateUrl:"views/classify/search-classify.html"
    });
    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{"tab_home":{templateUrl:"views/home/home.html",controller:"homeCtrl"}} // 将指定的templateUrl填充到名为"tab-home"的ionNavView中
    });
    $stateProvider.state("yundong",{
        url:"/yundong",
        templateUrl:"views/yundong/yundong.html",
        controller:"yundongCtrl"
    });
    $stateProvider.state("shou",{
        url:"/shou",
        templateUrl:"views/yundong/shou.html",
        controller:"shouCtrl"
    });
    $stateProvider.state("sn",{
        url:"/sn",
        templateUrl:"views/yundong/sn.html",
        controller:"snCtrl"
    });
    $stateProvider.state("ct",{
        url:"/ct",
        templateUrl:"views/yundong/ct.html",
        controller:"ctCtrl"
    });
    $stateProvider.state("meili",{
        url:"/meili",
        templateUrl:"views/yundong/meili.html",
        controller:"meiliCtrl"
    });
    //------------------love----------------------
    $stateProvider.state("tabs.love",{
        url:"/love",
        views:{"tab_love":{templateUrl:"views/love/love.html",controller:"loveCtrl"}}
    });
    $stateProvider.state("sx",{
        url:"/sx",
        templateUrl:"views/love/sx.html",
        controller:"loveCtrl"
    });
    $stateProvider.state("lx",{
        url:"/lx",
        templateUrl:"views/love/lx.html",
        controller:"loveCtrl"
    });
    $stateProvider.state("zdm",{
        url:"/zdm",
        templateUrl:"views/love/zdm.html",
        controller:"loveCtrl"
    });
    //------------------classify----------------------
    $stateProvider.state("tabs.classify",{
        url:"/classify",
        views:{"tab_classify":{templateUrl:"views/classify/classify.html",controller:"classifyCtrl"}}
    });
    $stateProvider.state("shangyi",{
        url:"/shangyi",
        templateUrl:"views/classify/shangyi.html",
        controller:"classifyCtrl"
    });
    $stateProvider.state("kuzi",{
        url:"/kuzi",
        templateUrl:"views/classify/kuzi.html",
        controller:"classifyCtrl"
    });
    $stateProvider.state("qunzi",{
        url:"/qunzi",
        templateUrl:"views/classify/qunzi.html",
        controller:"classifyCtrl"
    });
    $stateProvider.state("xiezi",{
        url:"/xiezi",
        templateUrl:"views/classify/xiezi.html",
        controller:"classifyCtrl"
    });
    $stateProvider.state("peishi",{
        url:"/peishi",
        templateUrl:"views/classify/peishi.html",
        controller:"classifyCtrl"
    });
    $stateProvider.state("bao",{
        url:"/bao",
        templateUrl:"views/classify/bao.html",
        controller:"classifyCtrl"
    });
    $stateProvider.state("man",{
        url:"/man",
        templateUrl:"views/classify/man.html",
        controller:"classifyCtrl"
    });
    $stateProvider.state("family",{
        url:"/family",
        templateUrl:"views/classify/family.html",
        controller:"classifyCtrl"
    });
    $stateProvider.state("tongzhuang",{
        url:"/tongzhuang",
        templateUrl:"views/classify/tongzhuang.html",
        controller:"classifyCtrl"
    });
    //------------------news----------------------
    $stateProvider.state("tabs.news",{
        url:"/news",
        views:{"tab_news":{templateUrl:"views/news/news.html"}}
    });
    $stateProvider.state("notice",{
        url:"/notice",
        templateUrl:"views/news/notice.html"
    });
    $stateProvider.state("praise",{
        url:"/praise",
        templateUrl:"views/news/praise.html"
    });
    $stateProvider.state("comment",{
        url:"/comment",
        templateUrl:"views/news/comment.html"
    });
    $stateProvider.state("friend",{
        url:"/friend",
        templateUrl:"views/news/friend.html"
    });
    //------------------myself----------------------
    $stateProvider.state("tabs.myself",{
        url:"/myself",
        views:{"tab_myself":{templateUrl:"views/myself/myself.html"}}
    });

    // 默认路由
    $urlRouterProvider.otherwise("/begin");
});
