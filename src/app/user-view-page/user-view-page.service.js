(() => {
  angular
    .module('app')
    .factory('userViewPageService', UserViewPageService);

  function UserViewPageService(apiService) {
    return {
      getUser: getUser,
      createUser: createUser,
      updateUser: updateUser,
      deleteUser: deleteUser
    };

    function createUser(user) {
      return apiService.createUser(user);
    }

    function getUser(userId) {
      return apiService.getUser(userId);
    }

    function updateUser(user) {
      return apiService.updateUser(user);
    }

    function deleteUser(userId) {
      return apiService.deleteUser(userId);
    }
  }
})();