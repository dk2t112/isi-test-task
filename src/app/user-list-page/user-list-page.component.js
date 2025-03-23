(() => {
    angular
        .module('app')
        .component('userListPage', {
            controller: 'UserListPageController',
            controllerAs: 'vm',
            templateUrl: 'app/user-list-page/user-list-page.html'
        });
})();