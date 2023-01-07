const jwt = require("jsonwebtoken");

const middleware = {
  authUser: (req, res, next) => {
    try {
      console.log(req.headers);
      const token = req.headers.authorization.split(" ")[1];
      const isValid = jwt.verify(token, process.env.Key);
      if (isValid) {
        next();
      } else {
        res.status(500).json({ messages: "Invalid User" });
      }
    } catch {
      res.status(500).json({ messages: "Invalid User" });
    }
  },
};

module.exports = middleware;
