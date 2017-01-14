(function(){
    angular.module('home')
        .component('dateComponent', require('./date/date.component'))
        .factory('dateService', require('./date/date.service'));
})();