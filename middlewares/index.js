const jwt = require("jsonwebtoken");

const middleware = {
  authUser: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const isValid = jwt.verify(token, process.env.Key);
      console.log(isValid);
      if (isValid) {
        next();
      } else {
        res.status(400).json({ messages: "Invalid User" });
      }
    } catch {
      res.status(400).json({ messages: "Invalid User" });
    }
  },
};
