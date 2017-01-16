/**
 * Created by Lowlowlow on 2016/12/24.
 */
angular.module("myApp")
    .controller("oatsCtrl",function($scope,$http){

        $scope.page = 0;
        $scope.total = 1;
        $scope.oat1 = [];
        $scope.oat2 = [];

        $scope.getOats = function () {
            $scope.page++;

            var url = "templates/food/cons/oats/oats.json";   // 请求的url
            $http.get(url)
                .success(function (response) {
                    angular.forEach(response.oat1, function (aOat) {
                        $scope.oat1.push(aOat);
                    });

                    angular.forEach(response.oat2, function (aOat) {
                        $scope.oat2.push(aOat);
                    });

                    $scope.total = response.totalPages;
                })
                .finally(function () {
                    $scope.$broadcast("scroll.infiniteScrollComplete");
                });
        };

        $scope.getOats();    // 加载时，从API加载第一页餐馆数据

    })