const jwt = require('jsonwebtoken');
const User = require('../Models/user.model');
const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
};