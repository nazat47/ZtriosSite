import { Unauthorized } from "../errors";
import { validateToken } from "../utils";

const authenticateUser = async (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    throw new Unauthorized("User not authenticated");
  }
  try {
    const { userId, username } = validateToken(token);
    req.user = {
      userId,
      username,
    };
    next();
  } catch (error) {
    throw new Unauthorized("Authentication failed");
  }
};
module.exports = authenticateUser;
