import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../../models/UserModel.js";

export const registerUser = async (req, res) => {
  const _user = req.body;
  // email + pswd

  // create schema + model for user

  // id, email, password

  // encrypt -> password

  // bcrypt -> string encrypt
  const encryptedPassword = await bcrypt.hash(_user.password, 10);
  _user.password = encryptedPassword;

  // .create()

  const user = await UserModel.create(_user);

  // generate token -> JWT

  // jsonwebtoken -> jwt -> .sign() -> data + expiry

  const token = jwt.sign(
    {
      userId: user.id,
    }, // payload
    process.env.APP_SECRET, // private/encryption key (heavy scene)
    {
      expiresIn: "1h",
    } //expiry time of the token
  );

  user.token = token;

  // save token in database against the created user

  user.save(); // update the user in database

  // response -> token, success message, created user

  res.send(user);
};
