(function () {
    "use strict";

    angular.module('rsm-pick')
        .directive('rsmHideImage', HideImageDirective)
        .directive('rsmDefaultImage', DefaultImageDirective);

    function HideImageDirective() {
        return {
            link: link,
            restrict: 'A'
        };

        function link(scope, elem, attr, ctrl) {
            console.log("RSM - elem object:");
            console.log(elem);
            elem.on('error', function () {
                elem.parent().parent().css({'display': 'none'});
            });
        }
    }

    function DefaultImageDirective() {
        return {
            link: link,
            restrict: 'A'
        };

        function link(scope, elem, attr, ctrl) {
            elem.bind('error', function () {
                elem.attr('src', attr.rsmDefaultImage);
            });
        }
    }
}());