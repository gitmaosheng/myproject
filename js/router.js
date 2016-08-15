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

        // default router
        $urlRouterProvider.when('','/default');

        $urlRouterProvider.otherwise('/default');

        $stateProvider
        // nav
        .state('index',{
            url:'',
            templateUrl:'tpls/nav.tpl'
        })
        .state('index.default',{
            url:'/default',
            templateUrl:'modules/index/tpl/default.tpl'
        })
        .state('index.about',{
            url:'/about',
            templateUrl:'modules/index/tpl/about.tpl'
        })
        .state('index.GK',{
            url:'/GK',
            templateUrl:'modules/index/tpl/gained_knowledge.tpl'
        })
        .state('index.images',{
            url:'/images',
            templateUrl:'modules/index/tpl/images.tpl'
        })
        .state('index.over',{
            url:'/over',
            templateUrl:'modules/index/tpl/over.tpl'
        })

}]);