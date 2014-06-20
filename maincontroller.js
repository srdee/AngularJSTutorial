app.controller("MainController", function($scope, pleiadesAPIservice){
  $scope.pleiadesPlaces = []

  pleiadesAPIservice.getpleiadesPlaces().success(function(response) {
  		$scope.pleiadesPlaces = response;
  });

  $scope.places = [
  		{"uri":"http://pelagios.dme.ait.ac.at/api/places/http%3A%2F%2Fpleiades.stoa.org%2Fplaces%2F246401",
  		"source":"http://pleiades.stoa.org/places/246401",
  		"label":"Galliaco",
  		"altLabels":["Galliaco"],
  		"comment":"An ancient place, cited: BAtlas 25 G2 Galliaco"}
  ]




    $scope.newPlace = null;
    $scope.addNew = function(){
    	if ($scope.newPlace != null && $scope.newPlace != ""){
    		$scope.places.push({
    			uri:$scope.places.length,
    			source:"",
    			label: $scope.newPlace,
    			altLabels: [],
    			comment:""
    			
    		});
    	}
    }


});