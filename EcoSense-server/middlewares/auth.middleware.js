const jwt = require('jsonwebtoken');
const User = require('../Models/user.model');
const authMiddleware = async (req, res, next) => {
  try {
      const token = req.headers.authorization.split('')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findOne({ email: decoded.email });
      if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });}
      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized' });}
  };
  module.exports = {authMiddleware};