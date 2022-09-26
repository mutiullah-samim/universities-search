import express, { Express } from 'express';

const cors = require('cors')

const app: Express = express();

const PORT = process.env.PORT || 5500

app.use(cors());
app.use(express.json());

// v1 APIs
app.use('/api/v1', require('./api'));

// middleware for handling not found
app.use(require('./middlewares').notFound);

// middleware for handling errors
app.use(require('./middlewares').errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});