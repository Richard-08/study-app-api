import db from "../../../loaders/sqlite";
import { IUser } from "../interfaces/user.interface";

class UserDao {
  findById(id: number) {
    return db.get("SELECT * FROM users WHERE id = ?", [id]);
  }

  findByEmail(email: string) {
    return db.get("SELECT * FROM users WHERE email = ?", [email]);
  }

  create(payload: IUser) {
    const { username, email, password } = payload;
    return db.run(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );
  }
}

export default new UserDao();
