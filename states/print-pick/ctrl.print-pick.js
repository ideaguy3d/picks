(function(){
    angular.module('rsm-pick').controller('PrintPickCtrl', [
        'getPickHash', 'rsmPickService', '$rootScope', PrintPickCtrlClass
    ]);

    function PrintPickCtrlClass(getPickHash, rsmPickService, $rootScope) {
        const vm = this;
        vm.info = "info - will get data from url";

        activate();

        function activate() {
            console.log("__>> ctrl.print-pick.js > activate() rsmPickService data:");
            console.log(rsmPickService.getPickTicketsHash());
            console.log($rootScope.R_pickTicketHash);
        }
    }
}());