(function () {
    angular.module('rsm-pick').controller('PracCtrl', [
        PracCtrlClass
    ]);

    function PracCtrlClass() {
        const vm = this;
        vm.info = "Practice view to try out different idea's. ~ctrl.prac.js ";

        vm.openJb = function () {
            let jb = window.open("https://redstonemail.com/users/login");

            console.log("window.open(https://redstonemail.com/users/login).document returned");
            console.log(jb.document);

            // give the page a bit of time to load
            setTimeout(function () {
                let jbUserElem = jb.document.getElementById('UserUserName');
                console.log("jbUserElem = ");
                console.log(jbUserElem);
                jbUserElem.value = 'Julius Test';
            }, 300);
        };

        vm.printPrac = function () {
            window.print();
        };

        // give view 200ms to load:
        setTimeout(function () {
            //vm.printPrac();
            console.log("setTimeout() invoked.");
        }, 200);
    }
}());