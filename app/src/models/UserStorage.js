"use strict";

class UserStorage {
  static #users = {
    id: ["나유겸", "나유준", "나유빈"],
    psword: ["1234", "1234", "123456"],
  };

  static getUsers(...fields) {
    return this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (this.#users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return;
  }
}

module.exports = UserStorage;
