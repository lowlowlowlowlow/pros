/**
 * Created by Lowlowlow on 2016/12/24.
 */

angular.module("myApp")
    .controller("coffeesCtrl",function($scope,$http){

        $scope.page = 0;
        $scope.total = 1;
        $scope.cof1 = [];
        $scope.cof2 = [];

        $scope.getCof = function () {
            $scope.page++;  // 页数++

            var url = "templates/food/cons/coffees/coffees.json";   // 请求的url
            $http.get(url)
                .success(function (response) {
                    angular.forEach(response.cof1, function (aCof) {
                        $scope.cof1.push(aCof);
                    });

                    angular.forEach(response.cof2, function (aCof) {
                        $scope.cof2.push(aCof);
                    });

                    $scope.total = response.totalPages;
                })
                .finally(function () {
                    $scope.$broadcast("scroll.infiniteScrollComplete");
                });
        };

        $scope.getCof();    // 加载时，从API加载第一页餐馆数据

    })