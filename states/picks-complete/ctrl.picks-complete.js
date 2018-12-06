(function () {
    angular.module('rsm-pick').controller('PicksCompleteCtrl', [
        PicksCompleteCtrlClass
    ]);

    function PicksCompleteCtrlClass() {
        const vm = this;
        vm.viewInfo = "Tickets that have been picked will be displayed here.";
    }
}());