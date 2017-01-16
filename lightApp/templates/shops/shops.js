/**
 * Created by Lowlowlow on 2016/12/23.
 */
angular.module("myApp")
    .controller("shopsCtrl",function($scope,$http){
        $scope.page = 0;    // 用来保存当前请求的页码
        $scope.total = 1;   // 用来保存总页数
        $scope.shops = [];

        $scope.getShops = function () {
            $scope.page++;

            var url = "templates/shops/shops.json";   // 请求的url
            $http.get(url)
                .success(function (response) {
                    angular.forEach(response.shops, function (shop) {
                        $scope.shops.push(shop);
                    });


                    $scope.total = response.totalPages;
                })
                .finally(function () {

                    $scope.$broadcast("scroll.infiniteScrollComplete");
                });
        };

        $scope.getShops();    // 加载时，从API加载第一页餐馆数据
    });




