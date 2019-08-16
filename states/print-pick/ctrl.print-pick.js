(function(){
    angular.module('rsm-pick').controller('PrintPickCtrl', [
        'getPickHashResolve', 'rsmPickService', '$location', PrintPickCtrlClass
    ]);

    function PrintPickCtrlClass(getPickHashResolve, rsmPickService, $location) {
        const vm = this;
        vm.info = "info - will get ID from url";
        vm.pickTicket = {};

        vm.gotoPickTable = function () {
            $location.url('/')
        };

        activate();

        function activate() {
            // cache hashed pick ticket object
            let pickHash = rsmPickService.getPickTicketsHash();

            console.log("__>> ctrl.print-pick.js > activate() rsmPickService data:");
            console.log(pickHash);

            vm.pickTicket = pickHash[getPickHashResolve.pickId];

            console.log("__>> vm.pick ticket =");
            console.log(vm.pickTicket);

            // give window 900ms to load paper img
            setTimeout(function () {
                window.print();
            }, 900);
        }
    }
}());