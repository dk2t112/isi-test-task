(() => {
  angular
    .module('app')
    .controller('UserListPageController', UserListPageController);

  function UserListPageController($scope, $state, userListPageService) {
    const vm = this;
    vm.users = null;

    vm.showUserViewPage = (userId = "") => {
      $state.go('userViewPage', {userId: userId});
    }

    const getUsers = () => {
      userListPageService.getUsers()
        .then(users => $scope.$apply(() => vm.users = users));
    }
    getUsers();
  }
})();