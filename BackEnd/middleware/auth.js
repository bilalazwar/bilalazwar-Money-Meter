// Protect routes by verifying JWT tokens and checking user permissions.

// The server generates a JWT (JSON Web Token) and sends it back.
// On every protected API request, the client (usually React) sends this token in the Authorization header.
// auth.js middleware checks that token and identifies the logged-in user.

const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Authentication Middleware
module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if Authorization header is missing or doesn't start with 'Bearer '
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized - No token provided' });
  }

  // Extract token from header
  const token = authHeader.split(' ')[1];

  try {
    // Verify token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user in the database, exclude password field
    const user = await User.findById(decoded.id).select('-password');

    // If user doesn't exist
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized - User not found' });
    }

    // Attach user to request object so that it can be accessed in route handlers
    req.user = user;

    // Move to the next middleware or route handler
    next();

  } catch (error) {
    // Token invalid or expired
    return res.status(401).json({ message: 'Unauthorized - Invalid or expired token' });
  }
};

