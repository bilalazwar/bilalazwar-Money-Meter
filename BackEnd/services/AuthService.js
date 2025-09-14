const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function registerUser({ name, email, password }) {
  const existing = await User.findOne({ email });
  if (existing)
  {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10); // 10 is salt value, adds random data in between hash password for security, making it harder to crack, no same password will have the same hash.
  const user = await User.create({ name, email, password: hashedPassword });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  return { user, token };
};


async function loginUser({ email, password }) {

  const user = await User.findOne({ email }).select('+password');
  if (!user){
    throw new Error('Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch){
    throw new Error('Invalid credentials');
  }

  //JWT is created here!
  const token = jwt.sign(
    { id: user._id },                    // Payload
    process.env.JWT_SECRET,             // Secret key (must be set in .env)
    { expiresIn: '1d' }                 // Expiry time
  );

  return {
    message: 'Login successful',
    token,                              // Send token back to client
    user: { id: user._id, email: user.email }
  };
};

async function getCurrentUser(id) {

  const user = await User.findById(id).select('-password'); // telling mongoose to exclude the password field, minus means "don’t include this field"
  if (!user){
    throw new Error('User not found');
  }
  return user;
};



module.exports = { registerUser, loginUser,getCurrentUser};