(() => {
  angular
    .module('app')
    .factory('apiService', ApiService);

  function ApiService(apiMocks) {
    const createPromise = (data) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(data), 100);
      });
    }
    const getUsers = () => createPromise(apiMocks.getUsers());
    const getUser = (userId) => createPromise(apiMocks.getUser(userId));
    const updateUser = (user) => createPromise(apiMocks.updateUser(user));
    const deleteUser = (userId) => createPromise(apiMocks.deleteUser(userId));
    const createUser = (user) => createPromise(apiMocks.createUser(user));
    const validateFormField = (fieldName, value) => createPromise(apiMocks.validateFormField(fieldName, value));

    return {
      getUsers,
      createUser,
      getUser,
      updateUser,
      deleteUser,
      validateFormField
    };
  }
})();