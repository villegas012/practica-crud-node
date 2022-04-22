var data = require("./MOCK_DATA.json");

module.exports = {
  getUsers: () => data,

  getUser: (id) => {
    let identificador = Number(id);
    let user = data.filter((user) => user.id === identificador)[0];
    return user;
  },

  createUser: (user) => {
    let newUser = {
      id: data.length + 1,
      ...user,
    };
    data.push(newUser);
    return newUser;
  },

  modifyUser: (id, newUser) => {
    let identificador = Number(id); 
    data.forEach((user) => {
      if(user.id === identificador){        
          user.first_name = newUser.first_name,
          user.last_name = newUser.last_name,
          user.email = newUser.email                
      };      
    }); 
    return "Usuario modificado";
  },

  deleteUser: (id) => {
    let identificador = Number(id);
    return data = data.filter((user) => user.id !== identificador);
  }
};
