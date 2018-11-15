(function () {
    "use strict";

    angular.module('rsm-pick').controller('CreatePickCtrl', [
        '$rootScope', '$scope', '$mdToast', 'rsmPickService',
        CreatePickCtrlClass
    ]);

    function CreatePickCtrlClass($rootScope, $scope, $mdToast, rsmPickService) {
        const vm = this;
        let pickTicketModel = {};
        $rootScope.R_appLocal = true;

        vm.viewTitle = 'Create a Pick ';
        vm.showPickForm = true;
        vm.requestStatus = '';
        vm.showBoxOne = false;
        vm.showBoxTwo = false;
        vm.isOpen = false;
        //-- View model data bindings:
        vm.coordinatorName = '';        // 1
        vm.dueDate = new Date();        // 2
        vm.quantity = '';               // 3
        vm.paperDescription = '';       // 4
        vm.envelopeDescription = '';    // 5
        vm.paperImgUrl = '';            // 6
        vm.envelopeImgUrl = '';         // 7
        vm.jobNumber = '';              // 8

        vm.sendPickTicket = sendPickTicket;


        function sendPickTicket() {
            let isoDate = vm.dueDate;
            isoDate = isoDate.toISOString();

            pickTicketModel = {
                jobNumber: vm.jobNumber,
                coordinatorName: vm.coordinatorName,
                dueDate: isoDate,
                quantity: vm.quantity,
                paperDescription: vm.paperDescription,
                envelopeDescription: vm.envelopeDescription,
                paperImgUrl: vm.paperImgUrl,
                envelopeImgUrl: vm.envelopeImgUrl
            };

            if ($rootScope.R_appLocal) {
                console.log("going to send this request:");
                console.log(pickTicketModel);
                console.log("coordinator name = " + vm.coordinatorName);
            }

            if (pickTicketModel.jobNumber) {
                rsmPickService.createPickTicket(pickTicketModel).then(function (res) {
                    console.log("response from createPickTicket app:");
                    console.log(res);
                    vm.requestStatus = "Your Pick ticket was sent ^_^";
                    vm.showPickForm = false;
                }).catch(function (err) {
                    console.log('__>> RSM_ERROR: ');
                    console.log(err);
                    vm.requestStatus = "Uh oh, there was an error. Refresh page & Try again";
                    vm.showPickForm = false;
                });
            }
            else {
                vm.requestStatus = "Please add a job number."
            }
        }

    } // END OF: CreatePickTicketClass

}());