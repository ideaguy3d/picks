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
        $scope.ccDataLoading = true;
        // the print tickets data hashed by their id
        $scope.ccHash = {};
        $scope.testData = "client scope";
        // controller functions
        $scope.ccMarkComplete = markComplete;
        $scope.ccRowSelectedCallback = rowSelectedCallback;
        $scope.ccConstructUri = constructUri;
        activate();

        //-----------------------
        // -- Class Functions --
        //-----------------------

        // activate initializes view model data in .then()
        function activate() {
            rsmPickService.readPickTickets()
                .then(function (res) {
                    let tData = res.data;
                    // do some custom data transforms
                    tData.forEach(function (record) {
                        // add a field to "Print" to print data
                        record.print = "Print";
                        console.log("res.data record  for record " + record.id + " = ");
                        console.log(record);
                        $scope.ccHash[record.id] = record;
                    }); // END OF: .forEach()

                    rsmPickService.setPickTicketsHash($scope.ccHash);

                    // SUPER IMPORTANT, the view model data from API
                    $scope.ccPrintTickets = tData;
                    $scope.ccDataLoading = false;
                })
                .catch(function (err) {
                    console.log("__>> RSM_ERROR: ", err);
                    $scope.ccDataLoading = false;
                });
        }

        function constructUri(rowId) {
            let uri = "";
            let record = $scope.ccHash[rowId];
            for (let key in record) {
                if (record.hasOwnProperty(key)) {
                    // just get the id, otherwise the url will get really complex
                    // but since I'm iterating over the object, I can add more data to the url if need be
                    if (key === 'id') {
                        uri += ("/" + record[key]);
                    }
                }
            }
            return uri;
        }

        /**
         * @param rows - the rows to set as complete in SQL Server
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