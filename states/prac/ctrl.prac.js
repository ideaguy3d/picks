(function(){
    angular.module('rsm-pick').controller('PracCtrl', [
        PracCtrlClass
    ]);

    function PracCtrlClass() {
        const vm = this;
        vm.info = "Practice view to try out different idea's. ~ctrl.prac.js ";

        vm.printPrac = function () {
            window.print();
        }
    }
}());