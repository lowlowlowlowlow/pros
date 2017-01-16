/**
 * Created by Lowlowlow on 2016/12/22.
 */
angular.module("myApp",['ionic'])

.config(function($stateProvider,$urlRouterProvider){

    $stateProvider.state("clicks",{          //一级路由,状态名为tabs
        url:"/clicks",                       //自定义路径为/tabs
        //由于一级路由不直接显示,显示的是二级clothes页面,则设置abstract为true
        templateUrl:"templates/clicks/clicks.html"      //实际文件夹的路径
    })

    $stateProvider.state("home", {        //way1设置一个状态为states1
        url: "/home",                       //way2自定义一个路径 路径记得加/开头
        templateUrl: "templates/home/home.html"   //way3内联模块路径,由于app会被引入到index中,而index在文件夹的最外层,所以路径可以直接进入templates文件夹
    });

    $stateProvider.state("clicks.rewards", {        //way1设置一个状态为states1
        url: "/rewards",                       //way2自定义一个路径 路径记得加/开头
        views:{"click_rewards":{templateUrl: "templates/rewards/rewards.html"}}, //way3内联模块路径,由于app会被引入到index中,而index在文件夹的最外层,所以路径可以直接进入templates文件夹

    });

    $stateProvider.state("clicks.offers", {        //way1设置一个状态为states1
        url: "/offers",                       //way2自定义一个路径 路径记得加/开头
        views:{"click_offers":{templateUrl: "templates/offers/offers.html"}} //way3内联模块路径,由于app会被引入到index中,而index在文件夹的最外层,所以路径可以直接进入templates文件夹
    });

    $stateProvider.state("clicks.goods", {        //way1设置一个状态为states1
        url: "/goods",                       //way2自定义一个路径 路径记得加/开头
        views:{"click_goods":{templateUrl: "templates/food/food.html"}} //way3内联模块路径,由于app会被引入到index中,而index在文件夹的最外层,所以路径可以直接进入templates文件夹
    });

    $stateProvider.state("clicks.goods.donuts", {        //way1设置一个状态为states1
        url: "/donuts",                       //way2自定义一个路径 路径记得加/开头
        views:{"shows":{templateUrl: "templates/food/cons/donuts/donuts.html",
            controller:"donutsCtrl"
        }} //way3内联模块路径,由于app会被引入到index中,而index在文件夹的最外层,所以路径可以直接进入templates文件夹
    });

    $stateProvider.state("clicks.goods.coffees", {        //way1设置一个状态为states1
        url: "/coffees",                       //way2自定义一个路径 路径记得加/开头
        views:{"shows":{templateUrl: "templates/food/cons/coffees/coffees.html",
            controller:"coffeesCtrl"
        }} //way3内联模块路径,由于app会被引入到index中,而index在文件夹的最外层,所以路径可以直接进入templates文件夹
    });

    $stateProvider.state("clicks.goods.drinks", {        //way1设置一个状态为states1
        url: "/drinks",                       //way2自定义一个路径 路径记得加/开头
        views:{"shows":{templateUrl: "templates/food/cons/drinks/drinks.html",
            controller:"drinksCtrl"
        }} //way3内联模块路径,由于app会被引入到index中,而index在文件夹的最外层,所以路径可以直接进入templates文件夹
    });

    $stateProvider.state("clicks.goods.oats", {        //way1设置一个状态为states1
        url: "/oats",                       //way2自定义一个路径 路径记得加/开头
        views:{"shows":{templateUrl: "templates/food/cons/oats/oats.html",
            controller:"oatsCtrl"
        }} //way3内联模块路径,由于app会被引入到index中,而index在文件夹的最外层,所以路径可以直接进入templates文件夹
    });

    $stateProvider.state("clicks.shops", {        //way1设置一个状态为states1
        url: "/shops",                       //way2自定义一个路径 路径记得加/开头
        views:{"click_shops":{templateUrl: "templates/shops/shops.html",
            controller:"shopsCtrl"
        }} //way3内联模块路径,由于app会被引入到index中,而index在文件夹的最外层,所以路径可以直接进入templates文件夹


    });

    $stateProvider.state("clicks.logs", {        //way1设置一个状态为states1
        url: "/logs",                       //way2自定义一个路径 路径记得加/开头
        views:{"click_logs":{templateUrl: "templates/login/login.html",
            controller:"lgCtrl"
        }} //way3内联模块路径,由于app会被引入到index中,而index在文件夹的最外层,所以路径可以直接进入templates文件夹
    });

    $stateProvider.state("clicks.regi", {        //way1设置一个状态为states1
        url: "/regis",                       //way2自定义一个路径 路径记得加/开头
        views:{"click_logs":{templateUrl: "templates/login/regi/regi.html",
            controller:"regiCtrl"
        }} //way3内联模块路径,由于app会被引入到index中,而index在文件夹的最外层,所以路径可以直接进入templates文件夹
    });


    $urlRouterProvider.otherwise("/home");

})

