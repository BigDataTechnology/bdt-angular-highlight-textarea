# bdt-angular-highlight-textarea
Angular directive based on [jQuery highlighttextarea](http://garysieling.github.io/jquery-highlighttextarea/index.html)

## Dependencies

* angular
* jquery-highlighttextarea
* jquery-ui

## How do I add this to my project?
```js
angular.module('your-app', ['bdt-highlight']);
```

Now, in some HTML, you can just add a directive as follows:

```html
<textarea rows="8" id="text"
          ng-model="text"
          bdt-highlight
          bdt-option="option"></textarea>
```

And in your controller define an option object that contains words, ranges and other:
```js
angular.module('your-app').controller('MainCtrl', ["$scope", function($scope) {
    
    $scope.option = {
      words: {
          color: '#FFFF00',
          words: ["lorem","consectetur","convallis"]
      }
    };
}]);
```

For more examples follow the [jQuery highlighttextarea examples page](http://garysieling.github.io/jquery-highlighttextarea/examples.html)