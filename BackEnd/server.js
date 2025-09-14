const dotenv = require('dotenv');
const connectDB = require('./config/db.js');

// Loading environment variables
dotenv.config();

const app = require('./app');

// Connect to database
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Starts listening on a port (like running the engine).