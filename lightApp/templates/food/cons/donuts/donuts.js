/**
 * Created by Lowlowlow on 2016/12/24.
 */
angular.module("myApp")
    .controller("donutsCtrl",function($scope,$http){

            $scope.page = 0;
            $scope.total = 1;
            $scope.dons1 = [];
            $scope.dons2 = [];

            $scope.getDons = function () {
                $scope.page++;

                var url = "templates/food/cons/donuts/donuts.json";   // 请求的url
                $http.get(url)
                    .success(function (response) {
                        angular.forEach(response.dons1, function (aDo) {
                            $scope.dons1.push(aDo);
                        });

                        angular.forEach(response.dons2, function (aDo) {
                            $scope.dons2.push(aDo);
                        });

                        $scope.total = response.totalPages;
                    })
                    .finally(function () {

                        $scope.$broadcast("scroll.infiniteScrollComplete");
                    });
            };

            $scope.getDons();    // 加载时，从API加载第一页餐馆数据

    })