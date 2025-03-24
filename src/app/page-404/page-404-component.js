(() => {
    angular
        .module('app')
        .component('page404', {
            controller: 'Page404Controller',
            controllerAs: 'vm',
            templateUrl: 'app/page-404/page-404.html'
        });
})();