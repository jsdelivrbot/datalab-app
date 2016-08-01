'use strict';

/**
 * @ngdoc function
 * @name calidadDelAire.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calidadDelAire
 */
angular.module('calidadDelAire')
  .controller('MainCtrl', ['$timeout', '$scope','Api', function ($timeout, $scope,  Api) {
      var self = this;

      // Inititalize variables
      self.distanceSelected = {"name":"euclidian"};
      self.distanceOptions = Api.distanceOptions;
      self.initialize = function() {
        // Comment this when using real data
        // self.showChart = false;
        // self.data = Api.dummy_cities();

        self.drawGraph();
        $scope.drawGraph = self.drawGraph
        // Uncomment this for real functionality
        // Api.cities().then(function successCallback(response){
        //   // Fetch graph config options
        //   // self.chartConfig = Graph.chartConfig(null);
        //   // self.showChart = true;
        // }, function errorCallback(response){
        //   console.error(response);
        //   // self.showChart = false;
        // });
      };

      self.drawGraph = function(longitude, latitude) {
        $scope.distanceSelected = self.distanceSelected
        self.showChart = true;

        Api.get_near_points(longitude, latitude, $scope.distanceSelected.name, "3").then(function successCallback(response){


           $scope.response_places = response.data
           $scope.path1 = $scope.response_places["traces"][0]
           console.log($scope.path1)
           $scope.path2 = $scope.response_places["traces"][1]
           $scope.path3 = $scope.response_places["traces"][2]
           $scope.points = $scope.response_places["points"]

           console.log($scope.points)
        }, function errorCallback(response){
            console.error(response);
            self.showChart = false;
        });




        // Give time for the container to draw
        $timeout(function(){
          // self.chartConfig = Graph.chartConfig(self.data);
        }, 50);
      };

      self.initialize();
  }]);
