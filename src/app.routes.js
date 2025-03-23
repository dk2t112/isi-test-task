(() => {
  angular.module('app')
    .config(($stateProvider, $urlRouterProvider) => {
      const states = [
        {
          name: 'userListPage',
          url: '',
          template: '<user-list-page></user-list-page>',
          data: {
            pageTitle: 'userListPage'
          }
        },
        {
          name: 'userViewPage',
          url: '/user/:userId',
          template: '<user-view-page></user-view-page>',
          data: {
            pageTitle: 'User View Page'
          }
        }];
      states.forEach(state => {
        $stateProvider.state(state);
      });
      $urlRouterProvider.when('/', ['$state', '$match', ($state, $match) => {
        $state.go('userListPage');
      }]);
    })
    .run(
      ['$rootScope', '$state', '$stateParams',
        ($rootScope, $state, $stateParams) => {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
        }
      ]
    );
})();