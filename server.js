import express from 'express';
import path from 'path';
import  bodyParser from 'body-parser';

// Import routes here
import indexRoute  from './routes/index';
import exampleRoute from './routes/example';

// Initialize Express app
const app = express();
// Set the port here
const port = 3000;

// Set the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Use the routes here
app.use(indexRoute);
app.use(exampleRoute);

// Listen on the port
app.listen(port || process.env.PORT, () => console.log(`Server started on port ${port}`));
