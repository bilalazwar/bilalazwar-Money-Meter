const User = require('../models/User');

async function getUserById(id) {

  const user = await User.findById(id).select('-password');
  if (!user){
    const error = new Error('User not found');
    error.statusCode = 404; // 👈 This is what errorHandler.js will use
    throw error;
  }
  return user;
};

async function updateUser(id, updates) {

  const user = await User.findByIdAndUpdate(id, updates, { new: true }).select('-password');
  if (!user){
    const error = new Error('User not found');
    error.statusCode = 404;
    throw error;
  }
  return user;
};

async function deleteUser(id) {

  const user = await User.findByIdAndDelete(id);
  if (!user) {
    const error = new Error('User not found');
    error.statusCode = 404;
    throw error;
  }
  return { message: 'User deleted successfully' };
};

// need to add status codes to errors
module.exports = { getUserById, updateUser, deleteUser};