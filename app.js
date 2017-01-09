(function() {
    'use strict';
    angular.module('cricApp', [])
        .controller('CricController', CricController)
        .service('CricService', CricService);


    CricController.injector = ['$scope', 'CricService'];

    function CricController($scope, CricService) {
        var controller = this;
        controller.options = ["Available", "Not-Available", "Tentive","Out of town"];
        controller.playerName = "";
        controller.playerAvailablity = "";


        controller.addInformation = function() {
            CricService.addInfo(controller.playerName, controller.playerAvailablity);
            controller.playerList = CricService.getPlayersList();
        };
            
    };

    function CricService() {
        var service = this;
        var team = [];

        service.addInfo = function(playerName, playerAvailablity) {

            var player = {
                name: playerName,
                availabilty: playerAvailablity
            };
            team.push(player);
        };
        
    service.getPlayersList = function(){
        return team;
    }


    }
})();