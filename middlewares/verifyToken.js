import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers["access-token"];

  console.log(token);

  if (!token) {
    return res.status(401).send({ error: "Authentication Failed" });
  }

  try {
    const isTokenVerified = jwt.verify(token, process.env.APP_SECRET);

    if (!isTokenVerified) {
      return res.status(401).send({ error: "Unauthorized" });
    }
  } catch (error) {
    return res.status(401).send(error);
  }

  return next();
};

// 1 Body
// 2 headers
// 3 params (query parameters)
