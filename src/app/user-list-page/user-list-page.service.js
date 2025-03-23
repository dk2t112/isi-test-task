(() => {
  angular
    .module('app')
    .factory('userListPageService', UserListPageService);

  function UserListPageService(apiService) {
    return {
      getUsers: getUsers
    };

    function getUsers() {
      return apiService.getUsers();
    }
  }
})();