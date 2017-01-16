/**
 * Created by Lowlowlow on 2016/12/24.
 */

angular.module("myApp")
    .controller("drinksCtrl",function($scope,$http){

        // 创建一些scope变量
        $scope.page = 0;
        $scope.total = 1;
        $scope.dri1 = [];
        $scope.dri2 = [];

        $scope.getDris = function () {
            $scope.page++;

            var url = "templates/food/cons/drinks/drinks.json";   // 请求的url
            $http.get(url)
                .success(function (response) {
                    angular.forEach(response.dri1, function (aDri) {
                        $scope.dri1.push(aDri);
                    });

                    angular.forEach(response.dri2, function (aDri) {
                        $scope.dri2.push(aDri);
                    });

                    $scope.total = response.totalPages;
                })
                .finally(function () {
                    $scope.$broadcast("scroll.infiniteScrollComplete");
                });
        };

        $scope.getDris();    // 加载时，从API加载第一页餐馆数据

    })