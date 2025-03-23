(() => {
    angular
        .module('app')
        .component('userViewPage', {
            controller: 'UserViewPageController',
            controllerAs: 'vm',
            templateUrl: 'app/user-view-page/user-view-page.html'
        });

})();