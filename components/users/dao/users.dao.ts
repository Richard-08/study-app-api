import db from "../../../loaders/sqlite";
import { CreateUser } from "../interfaces/user.interface";

class UserDao {
  findById(id: number) {
    return db.get("SELECT * FROM users WHERE id = ?", [id]);
  }

  findByEmail(email: string) {
    return db.get("SELECT * FROM users WHERE email = ?", [email]);
  }

  create(payload: CreateUser) {
    const { username, email, password } = payload;
    return db.run(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );
  }
}

export default new UserDao();
