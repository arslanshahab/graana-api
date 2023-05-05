import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
  const token = jwt.sign(
    {
      userId,
    }, // payload
    process.env.APP_SECRET, // private/encryption key (heavy scene)
    {
      expiresIn: "1h",
    } //expiry time of the token
  );

  return token;
};


