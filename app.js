(function() {
    'use strict';
    angular.module('mpApp', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.injector = ['$scope'];

    function LunchCheckController($scope) {
      $scope.lunchMessage ="";
        $scope.getMenuList = function(menu) {
            var menuList = [];
            $scope.newMenuList = [];
            // creating menu list from user input
            if (menu != undefined) {
                var menuList = menu.split(",");
                // Looping through array, creating a new list from menuList excluding empty values
                angular.forEach(menuList, function(value) {
                    if (value != '') {
                        $scope.newMenuList.push(value);
                    }
                });
            }
        };
        $scope.checkManu = function(newMenu) {
            $scope.lunchMessage = "Please enter data first";
            if ( newMenu == null || newMenu == undefined || (newMenu != undefined &&newMenu.length==0)) {
                $scope.lunchMessage = "Please enter data first";
            } else if (newMenu.length <= 3) {
                $scope.lunchMessage = "Enjoy!";
            } else {
                $scope.lunchMessage = "Too much!";
            }
        };
    };
})();
