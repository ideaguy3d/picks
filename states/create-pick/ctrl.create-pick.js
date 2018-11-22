(function () {
    "use strict";

    angular.module('rsm-pick').controller('CreatePickCtrl', [
        '$rootScope', '$scope', '$mdToast', 'rsmPickService', '$mdDialog',
        CreatePickCtrlClass
    ]);

    function CreatePickCtrlClass(
        $rootScope, $scope, $mdToast, rsmPickService, $mdDialog
    ) {
        const vm = this;
        let pickTicketModel = {};
        // rootScope bindings
        $rootScope.R_appLocal = true;
        // scope bindings
        $scope.pracDialogStatus = "";
        $scope.customFullscreen = false;
        $scope.createPickEnvelopeUrlTidCancelled = '';
        $scope.createPickImageUrlTidCancelled = '';
        $scope.createPickEnvelopeImgUrl = '';
        $scope.createPickPaperImgUrl = '';

        // envelope url's
        vm.imgEnvelopesUrls = [
            {
                tid: 1,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Single%20Window%20Chevron,%20Fairfax%20VA.%201908.jpg',
                description: '#10 Single Window Chevron, Fairfax VA'
            }, {
                tid: 2,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p9%20Single%20Window%20Black%20Eagle%20Standard%201935.jpg',
                description: '#9 Single Window Black Eagle Standard',
                permit: '1935'
            }, {
                tid: 3,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Single%20Window%20Washington%20DC,%201908.jpg',
                description: '#10 Single Window Washington DC',
                permit: '1908'
            }, {
                tid: 4,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p9%20White%20Blank.jpg',
                description: '#9 White Blank'
            }, {
                tid: 5,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20double%20window%20black%20bird%201st%20class%201946.jpg',
                description: '#10 double window black bird 1st class',
                permit: '1946'
            }, {
                tid: 6,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Double%20Window%20Blue%20Eagle%20First%20Class%201935.jpg',
                description: '#10 Double Window Blue Eagle First Class',
                permit: '1935'
            }, {
                tid: 7,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Double%20Window%20Blue%20Eagle%20First%20Class%201935.jpg',
                description: '#10 Double Window Blue Eagle First Class',
                permit: '1935'
            }, {
                tid: 8,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Double%20Window%20First%20Class%201946.jpg',
                description: '#10 Double Window First Class',
                permit: '1946'
            }, {
                tid: 9,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Full%20Window%20White%20Blank.jpg',
                description: '#10 Full Window White Blank'
            }, {
                tid: 10,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Half%20Window%20First%20Class%201935.jpg',
                description: '#10 Half Window First Class',
                permit: '1935'
            }, {
                tid: 11,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Half%20Window%20First%20Class%201946.jpg',
                description: '#10 Half Window First Class'
            }, {
                tid: 12,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Half%20Window%20White%20Blank.jpg',
                description: '#10 Half Window White Blank'
            }, {
                tid: 13,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Pistol%20Do%20Not%20Destroy%20Standard%201935.jpg',
                description: '#10 Pistol Do Not Destroy Standard',
                permit: '1935'
            }, {
                tid: 14,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Pistol%20Do%20Not%20Destroy%20Standard%201935.jpg',
                description: '#10 Pistol Window First Class',
                permit: '1946'
            }, {
                tid: 15,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Single%20Window%20Asura%20First%20Class%201935.jpg',
                description: '#10 Single Window Asura First Class',
                permit: '1935'
            }, {
                tid: 16,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Single%20Window%20Blank.jpg',
                description: '#10 Single Window Blank',
                permit: '1935'
            }, {
                tid: 17,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Single%20Window%20Blue%20Eagle%20First%20Class%201935.jpg',
                description: 'p10 Single Window Blue Eagle First Class',
                permit: '1935'
            }, {
                tid: 18,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Single%20Window%20Brown%20Kraft%20First%20Class%201935.jpg',
                description: '#10 Single Window Brown Kraft First Class',
                permit: '1935'
            }, {
                tid: 19,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Single%20Window%20Brown%20Kraft%20Standard%201935.jpg',
                description: '#10 Single Window Brown Kraft Standard',
                permit: '1935'
            }, {
                tid: 20,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Single%20Window%20Brown%20Kraft%20Time%20Sensitive%20Material%20Standard%201935.jpg',
                description: '#10 Single Window Brown Kraft Time Sensitive Material Standard',
                permit: '1935'
            }, {
                tid: 21,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Single%20Window%20Brown%20Kraft.jpg',
                description: '#10 Single Window Brown Kraft',
                permit: ''
            }, {
                tid: 22,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Single%20Window%20Chevron,%20Fairfax%20VA.%201908.jpg',
                description: '#10 Single Window Chevron, Fairfax VA',
                permit: '1908'
            }, {
                tid: 23,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Single%20Window%20First%20Class%201946.jpg',
                description: '#10 Single Window First Class',
                permit: '1946'
            }, {
                // CUSTOM ENVELOPE - I think
                tid: 24,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Single%20Window%20Peoples%20Bank.jpg',
                description: '#10 Single Window Peoples Bank',
                permit: ''
            }, {
                tid: 25,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Single%20Window%20Standard%20Black%20Eagle%201935.jpg',
                description: '#10 Single Window Standard Black Eagle',
                permit: '1935'
            }, {
                tid: 26,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Single%20Window%20Washington%20DC,%201908.jpg',
                description: '#10 Single Window Washington DC',
                permit: '1908'
            }, {
                tid: 27,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20Special%20Double%20Window%20First%20Class%201946.jpg',
                description: '#10 Special Double Window First Class',
                permit: '1946'
            }, {
                tid: 28,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/p10%20White%20Blank.jpg',
                description: '#10 White Blank',
                permit: ''
            }, {
                tid: 29,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/s%206%20x%2011%20Brown%20Kraft%20Blank.jpg',
                description: 's 6 x 11 Brown Kraft Blank',
                permit: ''
            }, {
                tid: 30,
                url: 'http://192.168.7.17/images/house-stock/envelope-url/s%206%20x%2011%20Special%20Double%20Window%20Brown%20Kraft%20First%20Class%201946.jpg',
                description: 's 6 x 11 Special Double Window Brown Kraft First Class',
                permit: '1946'
            }
        ];
        // paper url's
        vm.imgPaperUrls = [
            {
                tid: 1,
                url: 'http://192.168.7.17/images/house-stock/paper-url/8.5x11%2020p%20blue.jpg',
                description: '8.5x11 20p blue',
                side: ''
            }, {
                tid: 2,
                url: 'http://192.168.7.17/images/house-stock/paper-url/8.5x11%2020p%20green.jpg',
                description: '8.5x11 20p green',
                side: ''
            }, {
                tid: 3,
                url: 'http://192.168.7.17/images/house-stock/paper-url/8.5x11%2020p%20pink.jpg',
                description: '8.5x11 20p pink',
                side: ''
            }, {
                tid: 4,
                url: 'http://192.168.7.17/images/house-stock/paper-url/8.5x11%2020p%20yellow.jpg',
                description: '8.5x11 20p yellow',
                side: ''
            }, {
                tid: 5,
                url: 'http://192.168.7.17/images/house-stock/paper-url/sp-ps%208.5x11%20c%20fold%20blue%20window%20check%20snaps%20-back.jpg',
                description: 'sp-ps 8.5x11 c fold blue window check snaps',
                side: 'back'
            }, {
                tid: 6,
                url: 'http://192.168.7.17/images/house-stock/paper-url/sp-ps%208.5x11%20c%20fold%20blue%20window%20check%20snaps%20-front.jpg',
                description: 'sp-ps 8.5x11 c fold blue window check snaps',
                side: 'front'
            }, {
                tid: 7,
                url: 'http://192.168.7.17/images/house-stock/paper-url/sp-ps%20v%20fold%208.5x11%20black%20on%20white%20-back.jpg',
                description: 'sp-ps v fold 8.5x11 black on white',
                side: 'back'
            }, {
                tid: 8,
                url: 'http://192.168.7.17/images/house-stock/paper-url/sp-ps%20v%20fold%208.5x11%20black%20on%20white%20-front.jpg',
                description: 'sp-ps v fold 8.5x11 black on white',
                side: 'front'
            }, {
                tid: 9,
                url: 'http://192.168.7.17/images/house-stock/paper-url/sp-ps%20z%20fold%208.5x14%20blue%20on%20white%20-back.jpg',
                description: 'sp-ps z fold 8.5x14 blue on white',
                side: 'back'
            }, {
                tid: 10,
                url: 'http://192.168.7.17/images/house-stock/paper-url/sp-ps%20z%20fold%208.5x14%20blue%20on%20white%20-front.jpg',
                description: 'sp-ps z fold 8.5x14 blue on white',
                side: 'front'
            }, {
                tid: 11,
                url: 'http://192.168.7.17/images/house-stock/paper-url/sp-ps%20z%20fold%208.5x14%20white%20on%20white%20-back.jpg',
                description: 'sp-ps z fold 8.5x14 white on white',
                side: 'back'
            }, {
                tid: 12,
                url: 'http://192.168.7.17/images/house-stock/paper-url/sp-ps%20z%20fold%208.5x14%20white%20on%20white%20-front.jpg',
                description: 'sp-ps z fold 8.5x14 white on white',
                side: 'front'
            }, {
                tid: 14,
                url: 'http://192.168.7.17/images/house-stock/paper-url/sp-ps%20v%20fold%208.5x11%20white%20on%20black%20-back.jpg',
                description: 'sp-ps v fold 8.5x11 white on black',
                side: 'BACK'
            }, {
                tid: 15,
                url: 'http://192.168.7.17/images/house-stock/paper-url/sp-ps%20v%20fold%208.5x11%20white%20on%20black%20-front.jpg',
                description: 'sp-ps v fold 8.5x11 white on black',
                side: 'FRONT'
            }, {
                tid: 16,
                url: 'http://192.168.7.17/images/house-stock/paper-url/sp-ps%20v%20fold%208.5x11%20white%20on%20white.jpg',
                description: 'sp-ps v fold 8.5x11 white on white',
                side: ''
            }
        ];

        // basic vm bindings
        vm.viewTitle = 'Create a Pick';
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
        vm.showEnvelopeImages = showEnvelopeImages;
        vm.showPaperImages = showPaperImages;

        //------------------------------------------
        // ----------- Class Functions ------------
        //------------------------------------------
        function showPaperImages(event) {
            $mdDialog.show({
                controller: PaperDialogCtrl,
                templateUrl: 'states/create-pick/dialog.paper-grid.html',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: true,
                fullscreen: vm.customFullscreen
            }).then(function (tid) {
                vm.imgPaperUrls.forEach(function (elem) {
                    if (elem.tid === tid) {
                        $scope.createPickPaperImgUrl = elem.url;
                        vm.paperImgUrl = elem.url;
                    }
                });
            }, function () {
                $scope.createPickImageUrlTidCancelled = "You cancelled the Paper dialog.";
            });

            function PaperDialogCtrl($scope, $mdDialog) {
                $scope.createPickPaperImages = vm.imgPaperUrls;

                $scope.hide = function () {
                    $mdDialog.hide();
                };

                $scope.cancel = function () {
                    $mdDialog.cancel();
                };

                $scope.answer = function (answer) {
                    $mdDialog.hide(answer);
                };

                $scope.createPickImageSelected = function (tid) {
                    $mdDialog.hide(tid);
                    console.log("tid of envelope selected = " + tid);
                }
            } // END OF: inner-function PaperImageCtrl

        } // END OF: PaperDialogCtrl(){}

        function showEnvelopeImages(event) {
            $mdDialog.show({
                controller: EnvelopeDialogCtrl,
                templateUrl: 'states/create-pick/dialog.envelope-grid.html',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: true,
                fullscreen: vm.customFullscreen
            }).then(function (tid) {
                vm.imgEnvelopesUrls.forEach(function (elem) {
                    if (elem.tid === tid) {
                        $scope.createPickEnvelopeImgUrl = elem.url;
                        vm.envelopeImgUrl = elem.url;
                    }
                });
            }, function () {
                $scope.createPickEnvelopeUrlTidCancelled = "You cancelled the Envelope dialog.";
            });

            function EnvelopeDialogCtrl($scope, $mdDialog) {
                $scope.createPickEnvelopeImages = vm.imgEnvelopesUrls;

                $scope.cancel = function () {
                    $mdDialog.cancel();
                };

                $scope.createPickImageSelected = function (tid) {
                    $mdDialog.hide(tid);
                    console.log("tid of envelope selected = " + tid);
                };
            } // END OF: inner-function EnvelopeDialogCtrl(){}

        } // END OF: showEnvelopeImages(){}

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