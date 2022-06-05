import { CreateUser } from "../interfaces/user.interface";
import UserDao from "../dao/users.dao";

class UserService {
  create(payload: CreateUser) {
    return UserDao.create(payload);
  }

  getUserById(id: number) {
    return UserDao.findById(id);
  }

  getUserByEmail(email: string) {
    return UserDao.findByEmail(email);
  }
}

export default new UserService();
