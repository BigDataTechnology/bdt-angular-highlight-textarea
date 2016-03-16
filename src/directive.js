angular.module('bdt-highlight', [])
    .directive('bdtHighlight', [function() {
        return {
            restrict: 'A',
            scope: {
                opts: "=bdtOption"
            },
            link: function(scope, element, attrs) {
                $(element).highlightTextarea(scope.opts);
                if (attrs.ngModel) {
                    scope.$watch(attrs.ngModel, function() {
                        return $(element).data('highlighter').highlight();
                    });
                }
                return scope.$watch('opts', function(nVal, oVal) {
                    if (!nVal || nVal === oVal) {
                        return;
                    }
                    $(element).data('highlighter').setOptions(nVal);
                    return $(element).data('highlighter').highlight();
                });
            }
        };
    }]);