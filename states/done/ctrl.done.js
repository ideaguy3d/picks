(function () {

    angular.module('rsm-pick').controller('DoneCtrl', [
        DoneCtrlClass
    ]);

    function DoneCtrlClass() {
        const vm = this;
        vm.viewInfo = "Tickets that have been picked will be displayed here.";
        vm.mockData = [
            {timePicked: 'time picked', jobNumber: 54321, coordinator: 'Coordinator'},
            {timePicked: 'time picked', jobNumber: 54321, coordinator: 'Coordinator'},
            {timePicked: 'time picked', jobNumber: 54321, coordinator: 'Coordinator'},
            {timePicked: 'time picked', jobNumber: 54321, coordinator: 'Coordinator'},
            {timePicked: 'time picked', jobNumber: 54321, coordinator: 'Coordinator'},
            {timePicked: 'time picked', jobNumber: 54321, coordinator: 'Coordinator'}
        ];
    }

}());