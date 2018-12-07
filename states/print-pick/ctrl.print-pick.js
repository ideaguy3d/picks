(function(){
    angular.module('rsm-pick').controller('PrintPickCtrl', [
        'getPickHash', 'rsmPickService', '$location', PrintPickCtrlClass
    ]);

    function PrintPickCtrlClass(getPickHash, rsmPickService, $location) {
        const vm = this;
        vm.info = "info - will get ID from url";
        vm.pickTicket = {};

        vm.gotoPickTable = function () {
            $location.url('/')
        };

        activate();

        function activate() {
            console.log("__>> ctrl.print-pick.js > activate() rsmPickService data:");
            console.log(rsmPickService.getPickTicketsHash());
            let tData = rsmPickService.getPickTicketsHash();
            vm.pickTicket = tData[getPickHash.pickId];
            console.log("vm.pick ticket =");
            console.log(vm.pickTicket);

            setTimeout(function () {
                window.print();
            }, 900);
        }
    }
}());