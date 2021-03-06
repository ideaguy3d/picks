<!DOCTYPE html>
<html lang="en">
<head>
    <title>Redstone Intranet App</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="pick tickets">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no"/>

    <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic'>
    <link rel="stylesheet" href="node_modules/angular-material/angular-material.css"/>
    <link rel="stylesheet" href="node_modules/md-data-table/dist/md-data-table-style.css">
    <link rel="stylesheet" href="assets/picks.app.css"/>

    <style type="text/css">
        /** Hide when Angular is not yet loaded and initialized **/
        [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
            display: none !important;
        }
    </style>
</head>

<!-- ng-app="rsm-pick" layout="column" ng-cloak ng-controller="CoreCtrl" -->

<body ng-app="rsm-pick">

<div ng-include="'layout/in.horiz-nav.html'"></div>

<ng-view></ng-view>

<!-- node modules -->
<script type="text/javascript" src="node_modules/angular/angular.js"></script>
<script type="text/javascript" src="node_modules/angular-animate/angular-animate.js"></script>
<script type="text/javascript" src="node_modules/angular-aria/angular-aria.js"></script>
<script type="text/javascript" src="node_modules/angular-route/angular-route.js"></script>
<script type="text/javascript" src="node_modules/angular-messages/angular-messages.js"></script>
<script type="text/javascript" src="node_modules/angular-sanitize/angular-sanitize.js"></script>
<script type="text/javascript" src="node_modules/angular-material/angular-material.js"></script>
<script type="text/javascript" src="node_modules/md-data-table/dist/md-data-table-templates.js"></script>
<script type="text/javascript" src="node_modules/md-data-table/dist/md-data-table.js"></script>

<!-- remote cdn JavaScript -->
<script type="text/javascript"
        src="//cdnjs.cloudflare.com/ajax/libs/angular-material-icons/0.7.1/angular-material-icons.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.min.js"></script>
<script type="text/javascript"
        src="//cdnjs.cloudflare.com/ajax/libs/angular-material-icons/0.7.1/angular-material-icons.min.js"></script>

<!-- main application entry point -->
<script type="text/javascript" src="picks.app.js"></script>
<script type="text/javascript" src="core.picks.ctrl.js"></script>
<!-- services -->
<script type="text/javascript" src="services/ser.pick.js"></script>
<!-- controllers -->
<script type="text/javascript" src="states/home/ctrl.home.js"></script>
<script type="text/javascript" src="states/create-pick/ctrl.create-pick.js"></script>
<script type="text/javascript" src="states/done/ctrl.done.js"></script>
<script type="text/javascript" src="states/prac/ctrl.prac.js"></script>
<script type="text/javascript" src="states/print-pick/ctrl.print-pick.js"></script>
<!-- directives -->
<script type="text/javascript" src="directives/dir.hide-image.js"></script>


</body>
</html>
