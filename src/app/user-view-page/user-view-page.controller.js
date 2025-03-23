(() => {
  angular
    .module('app')
    .controller('UserViewPageController', UserViewPageController);

  function UserViewPageController($scope, $state, $stateParams, userViewPageService) {
    const vm = this;
    vm.user = {
      username: "user",
      firstname: "fname",
      lastname: "",
      email: "",
      type: "",
      password: "",
      repeatPassword: "",
    };
    vm.userTypes = ["Administrator", "Driver"];
    vm.editMode = false;
    vm.createUser = createUser;
    vm.updateUser = updateUser;
    vm.deleteUser = deleteUser;

    if ($stateParams.userId) {
      vm.editMode = true;
      getUser($stateParams.userId);
    }

    function getUser(userId) {
      userViewPageService.getUser(userId)
        .then(user => $scope.$apply(() => vm.user = user));
    }

    function createUser() {
      userViewPageService.createUser(vm.user)
        .then(() => $scope.$apply(() => $state.go('userListPage')));
    }

    function updateUser(user) {
      userViewPageService.updateUser(user)
        .then(() => $scope.$apply(() => $state.go('userListPage')));
    }

    function deleteUser(userId) {
      userViewPageService.deleteUser(userId)
        .then(() => $scope.$apply(() => $state.go('userListPage')));
    }
  }
})();