'use strict';

/**
 * @ngdoc service
 * @name calidadDelAire.api
 * @description
 * # api
 * Service in the calidadDelAire.
 */
angular.module('calidadDelAire')
  .service('Api', ['$http', function ($http) {
    function uriParam(param) {
      return '/' + param;
    };

    function convertCalltoObj(return_list) {
      var return_Obj = {}
      return_list.pollutants.forEach(function (val,i){
        return_Obj[val.pollutant] = val.timeline
      });
      return return_Obj
    };

    var baseUrl = 'https://datalabapi.herokuapp.com';
    var uri = {
      get_near_points: function(longitude, latitude, mode, head) {
        var string_url = baseUrl + "/get_near_points?longitude="+ longitude + "&latitude=" + latitude+ "&mode=" + mode + "&head=" + head
        console.log(string_url)
        return string_url;
      }
    };

    var _distanceOptions = [
      { name: 'euclidean', label: 'Directa'},
      { name: 'walking', label: 'Caminando'},
      { name: 'driving', label: 'Manejando'}
    ];


    var _get_near_points = function(longitude, latitude, mode, head){
      return $http.get(uri.get_near_points(longitude, latitude, mode, head));
    };


    return {
      distanceOptions: _distanceOptions,
      get_near_points: _get_near_points
      // indicator: _indicator,
      //
      // // dummy datasets
    };
  }]);
