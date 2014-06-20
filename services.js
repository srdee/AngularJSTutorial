angular.module("MyTutorialApp.services",[]).
  factory('pleiadesAPIservice', function($http) {

    var pleiadesAPI = {};

    pleiadesAPI.getpleiadesPlaces = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://pelagios.dme.ait.ac.at/api/search.json?query=Gallia.json'
      });

  

    }

    return pleiadesAPI;
  });