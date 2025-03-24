(() => {
  angular
    .module('app')
    .factory('apiMocks', ApiMocks);

  function ApiMocks() {
    let users = createMockUsers();
    let lastUserId = users.length;

    return {
      getUsers,
      createUser,
      getUser,
      updateUser,
      deleteUser,
      validateFormField
    };

    function getUsers() {
      return users;
    }

    function createUser(user) {
      users.push({
        ...user,
        id: (lastUserId++).toString()
      });
    }

    function getUser (userId) {
      return users.find(u => u.id === userId);
    }

    function deleteUser(userId) {
      users = users.filter(u => u.id !== userId);
    }

    function updateUser(user) {
      deleteUser(user.id);
      users.push(user);
    }

    function validateFormField(fieldName, value) {
      const validResponse = {
        isValid: true,
        errorMessage: ""
      };
      const invalidResponse = (errorMessage) => ({
        isValid: false,
        errorMessage: errorMessage
      });
      const isValidEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      const isValidPassword = (password) => {
        return String(password)
          .match(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
          );
      }

      if (!value) {
        return invalidResponse("Required Field");
      }
      if (fieldName === "uname") {
        const usernameExists = users.find(u => u.username === value);
        if (usernameExists) {
          return invalidResponse("Username exists");
        }
      }
      if (fieldName === "email") {
        const isValid = isValidEmail(value);
        if (!isValid) {
          return invalidResponse("Invalid email");
        }
      }
      if (fieldName === "password") {
        if (!isValidPassword(value)) {
          return invalidResponse("Password min length is 8 characters. At least one number and one letter");
        }
      }
      return validResponse;
    }

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