/**
 * Created by Lowlowlow on 2016/12/24.
 */

angular.module("myApp")

    .controller("regiCtrl",function($scope,$ionicPopup){

        $scope.input={'username':''};

        $scope.input2={'pwd':''};

        $scope.data=[];

        $scope.logs=function() {
            if ($scope.input.username && $scope.input2.pwd) {

                $scope.data.unshift({
                    "name": $scope.input.username,
                    "rewards":"1",
                    "offers":"1",
                    "points":"0",
                    "c_num":"139010311"
                });

                $scope.showAlert2()

                $scope.menuState.show=!$scope.menuState.show;



            }else{
                $scope.showAlert()
            }
        }

        $scope.menuState={
            show: false
        };

        $scope.showAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Something misses!',
                template: 'YOUR USERNAME AND PASSWORD COULD NOT BE EMPTY'
            });
        };

        $scope.showAlert2 = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Successfully Registered!',
                template: 'WELCOME TO OUR KREME FEMILY!'
            });
        };


    })