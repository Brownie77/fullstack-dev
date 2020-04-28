'use strict'
const Admin = use('App/Models/Admin');
const User = use('App/Models/User');

class AdminController {
    async registerAdmin({request}) {
        const {email, password} = request.all()
        const admin = await Admin.create({
          email,
          password,
          username: email,
        })
        return admin;
        // return this.login(...arguments);
      };

      async loginAdmin({request, auth}) {
        const {username, password} = request.all();
        const token = await auth.authenticator('admin').attempt(username, password);
        return token
      };
      //Ниже представлен метод, возвращающий список всех Пользователей.
      async getAllUsers(){
        // const userList  = await User.pair('id', 'username');
        const userList  = await User.all();
        console.log(userList);
        return userList;
      };
     //метод для проверки всего, в общем.
    async check({auth}) {
        const users = await Admin.pair('id', 'password');
        console.log(users);
    }

      async register({request}) {
        const {email, password} = request.all()
      const user = await User.create({
          email,
          password,
          username: email,
        })
        return user;
      }

}

module.exports = AdminController
