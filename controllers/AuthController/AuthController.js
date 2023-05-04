import bcrypt from "bcrypt";
import { UserModel } from "../../models/UserModel.js";
import { generateToken } from "../../helpers.js";

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

  //   const token = jwt.sign(
  //     {
  //       userId: user.id,
  //     }, // payload
  //     process.env.APP_SECRET, // private/encryption key (heavy scene)
  //     {
  //       expiresIn: "1h",
  //     } //expiry time of the token
  //   );

  const token = generateToken(user.id);

  user.token = token;

  // save token in database against the created user

  user.save(); // update the user in database

  // response -> token, success message, created user

  const { password: _password, ...userData } = user.toJSON(); // skip.delete password from user object

  res.send(userData);
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // databse -> find user -> based on email

  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(401).send({ message: "Invalid Email/Password" });
  }

  // bcrypt to compare received and hashed password .compare()

  const isValidPassword = await bcrypt.compare(password, user.password);

  // if password -> not valid/mismatched -> return 401 -> unauthorized
  if (!isValidPassword) {
    return res.status(401).send({ message: "Invalid Email/Password" });
  }

  // if valid - password

  // token creation

  //   replacing the following code with helper function

  //   const token = jwt.sign(
  //     {
  //       userId: user.id,
  //     }, // payload
  //     process.env.APP_SECRET, // private/encryption key (heavy scene)
  //     {
  //       expiresIn: "1h",
  //     } //expiry time of the token
  //   );

  // helper function:
  const token = generateToken(user.id);

  user.token = token;

  // save token in database against the created user

  user.save(); // update the user in database

  // response

  const { password: _password, ...userData } = user.toJSON();

  res.send(userData);
};
