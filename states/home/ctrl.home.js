(function(){
    "use strict";

    angular.module('rsm-pick').controller('HomeCtrl', [
        '$rootScope', '$scope', '$mdToast',
        HomeCtrlClass
    ]);

    function HomeCtrlClass($rootScope, $scope, $mdToast) {
        const vm = this;
        vm.info = "HomeCtrl - ctrl.home.js";

        $scope.mockData = [
            {
                id: 601,
                name: "Tori",
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                sodium: 82,
                calcium: "White Paper 100#",
                iron: "9,900"
            },
            {
                id: 602,
                name: "Venus",
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                sodium: 129,
                calcium: "Snap Pack green 10#",
                iron: "44,500"
            },
            {
                id: 601,
                name: "Tori",
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                sodium: 82,
                calcium: "White Paper 100#",
                iron: "9,900"
            },
            {
                id: 602,
                name: "Venus",
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                sodium: 129,
                calcium: "Snap Pack green 10#",
                iron: "44,500"
            },
            {
                id: 601,
                name: "Tori",
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                sodium: 82,
                calcium: "White Paper 100#",
                iron: "9,900"
            },
            {
                id: 602,
                name: "Venus",
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                sodium: 129,
                calcium: "Snap Pack green 10#",
                iron: "44,500"
            },
            {
                id: 601,
                name: "Tori",
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                sodium: 82,
                calcium: "White Paper 100#",
                iron: "9,900"
            },
            {
                id: 602,
                name: "Venus",
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                sodium: 129,
                calcium: "Snap Pack green 10#",
                iron: "44,500"
            },
            {
                id: 601,
                name: "Tori",
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                sodium: 82,
                calcium: "White Paper 100#",
                iron: "9,900"
            },
            {
                id: 602,
                name: "Venus",
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                sodium: 129,
                calcium: "Snap Pack green 10#",
                iron: "44,500"
            },
        ];
    }

}());