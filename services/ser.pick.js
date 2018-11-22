(function () {
    "use strict";

    angular.module('rsm-pick').factory('rsmPickService', [
        '$http', '$rootScope',
        InventoryServiceClass
    ]);

    function InventoryServiceClass($http, $rootScope) {
        let localUri = 'http://localhost/ninja/app/pick/tickets';
        let productionUri = 'http://192.168.7.17/ninja/app/pick/tickets';
        let uri = localUri;

        function readPickTickets() {
            return $http.get(uri + '/read/v1');
        }

        function createPickTicket(pickTicket) {
            let coordinatorName = encodeURIComponent(pickTicket['coordinatorName']);
            let dueDate = encodeURIComponent(pickTicket['dueDate']);
            let quantity = encodeURIComponent(pickTicket['quantity']);
            let paperDescription = encodeURIComponent(pickTicket['paperDescription']);
            let envelopeDescription = encodeURIComponent(pickTicket['envelopeDescription']);
            let paperImgUrl = encodeURIComponent(pickTicket['paperImgUrl']);
            let envelopeImgUrl = encodeURIComponent(pickTicket['envelopeImgUrl']);
            let jobNumber = encodeURIComponent(pickTicket['jobNumber']);

            let request = uri + '/create/v1?' +
                'coordinatorName=' + coordinatorName +
                '&dueDate=' + dueDate +
                '&quantity=' + quantity +
                '&paperDescription=' + paperDescription +
                '&envelopeDescription=' + envelopeDescription +
                '&paperImgUrl=' + paperImgUrl +
                '&envelopeImgUrl=' + envelopeImgUrl +
                '&jobNumber=' + jobNumber
            ;

            if ($rootScope.R_appLocal) {
                console.log("will make HTTP GET request to:");
                console.log(request);
            }

            return $http.get(request);
        }

        function markPickComplete(completedPicks) {
            // ["42","1","7"]
            // dynamically generate API URI
            let limit = completedPicks.length;
            let request = uri + '/mark/complete';

            for (let i = 0; i < limit; i++) {
                let item = completedPicks[i];
                let pickId = encodeURIComponent(item);
                request += ('/' + pickId);
            }

            console.log("will send request to:");
            console.log(request);

            return $http.get(request);
        }

        return {
            readPickTickets: readPickTickets,
            createPickTicket: createPickTicket,
            markPickComplete: markPickComplete
        }
    }
}());