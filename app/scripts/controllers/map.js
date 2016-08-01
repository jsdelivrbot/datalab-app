angular.module('calidadDelAire').controller('MapCtrl',["$scope", "NgMap", function($scope, NgMap) {
  var vm = this;
  NgMap.getMap().then(function(map) {
    console.log('map', map);
    vm.map = map;
    //$timeout(function(){
    //  vm.HideAllInfo()
    //}, 200);
  })

  $scope.showDetails = function(evt, p) {
    $scope.point_data = {"refugio":p.refugio, "distance":p.distance};
    console.log($scope.point_data)
    $scope.showInfoWindow.apply(this, [evt, 'details']);
   };

  $scope.getpos = function(event) {
    $scope.longitude = event.latLng.lng()
    $scope.latitude = event.latLng.lat()
    $scope.positions = [[$scope.latitude,$scope.longitude]]
    console.log($scope.distanceSelected.name)
    $scope.drawGraph($scope.longitude, $scope.latitude)
  };

}]);
