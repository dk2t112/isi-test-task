(() => {
  angular.module('app')
    .config(($stateProvider, $urlRouterProvider) => {
      const states = [
        {
          name: 'userListPage',
          url: '',
          template: '<user-list-page></user-list-page>',
          data: {
            pageTitle: 'User List Page'
          }
        },
        {
          name: 'userViewPage',
          url: '/user/:userId',
          template: '<user-view-page></user-view-page>',
          data: {
            pageTitle: 'User View Page'
          }
        },
        {
          name: 'page404',
          url: '/404',
          template: '<page404></page404>',
          data: {
            pageTitle: 'Not Found'
          }
        },{
          name: 'page403',
          url: '/403',
          template: '<page403></page403>',
          data: {
            pageTitle: 'Forbidden'
          }
        }];

      states.forEach(state => {
        $stateProvider.state(state);
      });

      $urlRouterProvider
        .when('/', ['$state', '$match', ($state, $match) => {
          $state.go('userListPage');
        }])
        .otherwise('/404');
    });
})();