(() => {
  angular
    .module('app')
    .controller('UserViewPageController', UserViewPageController);

  function UserViewPageController($scope, $state, $stateParams, userViewPageService) {
    const vm = this;
    vm.userTypes = ["Administrator", "Driver"];
    vm.user = {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      type: vm.userTypes[1],
      password: "",
      repeatPassword: "",
    };
    vm.editMode = false;
    vm.createUser = createUser;
    vm.updateUser = updateUser;
    vm.deleteUser = deleteUser;
    vm.passwordsMatch = () => vm.user.password === vm.user.repeatPassword;

    if ($stateParams.userId) {
      vm.editMode = true;
      getUser($stateParams.userId);
    }

    function getUser(userId) {
      userViewPageService.getUser(userId)
        .then(user => {
          if (!user) {
            $scope.$apply(() => $state.go('page404'));
          } else if (user.id === "1") {
            $scope.$apply(() => $state.go('page403'));
          } else {
            $scope.$apply(() => vm.user = {...user})
          }
        });
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