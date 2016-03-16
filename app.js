angular.module('bdt-highlight', []).controller('MainCtrl', ["$scope", function($scope) {
    $scope.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at massa non erat convallis vulputate molestie";
    $scope.newWord = "";

    $scope.option = {
        words: {
            color: '#FFFF00',
            words: ["lorem","consectetur","convallis"]
        },
        caseSensitive: false
    };
    
    $scope.addWord = function(){
        if($scope.newWord){
            var newWords = $scope.option.words.words;
            newWords.push($scope.newWord);
            $scope.option = {};
            $scope.option = {
                words: {
                    color: '#FFFF00',
                    words: newWords
                },
                caseSensitive: false
            };
            $scope.newWord = ""
        } 
    };
    
    $scope.cleanWords = function(){
        $scope.option = {
            words: {
                color: '#FFFF00',
                words: []
            },
            caseSensitive: false
        };
    };
}]);