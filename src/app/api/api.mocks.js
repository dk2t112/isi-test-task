(() => {
  angular
    .module('app')
    .factory('apiMocks', ApiMocks);

  function ApiMocks() {
    let users = createMockUsers();
    const getUsers = () => users;
    const createUser = (user) => users.push(user);
    const getUser = (userId) => users.find(u => u.id === userId);
    const deleteUser = (userId) => users = users.filter(u => u.id !== userId);
    const updateUser = (user) => {
      let userToUpdate = users.find(u => u.id === user.id);
      if (userToUpdate) {
        userToUpdate = user;
      }
    }
    const validateFormField = (fieldName, value) => {
      if (!value) {
        return {
          isValid: false,
          errorMessage: "Required Field"
        }
      } else {
        return {
          isValid: true,
          errorMessage: ""
        }
      }
    }

    return {
      getUsers,
      createUser,
      getUser,
      updateUser,
      deleteUser,
      validateFormField
    };

    function createMockUsers() {
      return [
        {
          id: "0",
          username: "john12345",
          firstname: "John",
          lastname: "Smith",
          email: "john12345@gmail.com",
          type: "Administrator"
        },
        {
          id: "1",
          username: "amanda123",
          firstname: "Amanda",
          lastname: "Paul",
          email: "amanda123@gmail.com",
          type: "Administrator"
        },
        {
          id: "2",
          username: "terry2864",
          firstname: "Terry",
          lastname: "Johnson",
          email: "terry2864@gmail.com",
          type: "Driver"
        }]
    }
  }
})();