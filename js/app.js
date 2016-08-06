/**
 *
 * @authors Maunsell (982431279@qq.com)
 * @date    2016-08-06 14:59:04
 * @version $Id$
 */

angular.module("Maunsell",['ui.bootstrap','ui.router']);

angular.module('Maunsell')
.config(['$stateProvider','$urlRouterProvider',
    function($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.when('','/index');

        $stateProvider
        .state('index',{
            url:'/index',
            templateUrl:'tpls/nav.tpl'
        })
}]);
