import express from 'express';
import './config/db.js'; // Import the database connection
import dotenv from 'dotenv';
import './models/index.js';
import logger from './helpers/logger.js';
// Configure dotenv
dotenv.config();
import cors from 'cors'
import Router from './routes/router.js';
const app = express();
// Enable CORS for all routes
app.use(cors());

// Or you can specify CORS options
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your client domain
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}));

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url} - ${req.ip}`);
  next();
});

// Error handling
app.use((err, req, res, next) => {
  logger.error(`Error: ${err.message}`, { stack: err.stack });
  res.status(500).json({ message: 'Internal Server Error' });
});
app.use('/api', Router);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});