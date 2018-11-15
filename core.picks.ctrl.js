(function () {
    angular.module('rsm-pick').controller('CoreCtrl', [
        '$scope', '$location', '$rootScope', 'rsmPickService', '$mdToast',
        CoreCtrlClass
    ]);

    function CoreCtrlClass($scope, $location, $rootScope, rsmPickService, $mdToast) {

        $rootScope.R_appLocal = true;

        // get a timestamp for logging while developing:
        let today = getCurrentDate();
        let picksComplete;

        $scope.ccPrintTickets = [];
        $scope.ccRowsSelected = 0;
        $scope.ccMaximumRows = 5;
        $scope.ccMarkComplete = markComplete;
        $scope.ccRowSelectedCallback = rowSelectedCallback;
        activate();

        // class functions
        function activate() {
            rsmPickService.readPickTickets()
                .then(function (res) {
                    $scope.ccPrintTickets = res.data;
                })
                .catch(function (err) {
                    console.log("__>> RSM_ERROR: ", err);
                });
        }

        /**
         * @param rows -
         */
        function markComplete(rows) {
            $scope.ccRowsSelected = 0;
            console.log("hide element, then make request to db, element = ");
            console.log(rows);

            $mdToast.show($mdToast.simple().content("Deleted row id(s): " + rows).hideDelay(3000));

            if ($scope.ccRowsSelected <= 5) {
                rsmPickService.markPickComplete(picksComplete)
                    .then(function (res) {
                        console.log("response from markPickComplete app:");
                        console.log(res);
                    })
                    .catch(function (err) {
                        console.log('__>> RSM_ERROR: ');
                        console.log(err);
                    });
            }
        }

        /**
         * @param rows - array that will retain state from mdDataTable
         */
        function rowSelectedCallback(rows) {
            picksComplete = rows;
            $scope.ccRowsSelected = rows.length;

            console.log("current picks to mark complete:");
            console.log(picksComplete);
        }

        function getCurrentDate() {
            let currentdate = new Date();
            return (currentdate.getMonth() + 1) + "/"
                + currentdate.getDate() + "/"
                + currentdate.getFullYear() + " @ "
                + currentdate.getHours() + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();
        }
    }
}());