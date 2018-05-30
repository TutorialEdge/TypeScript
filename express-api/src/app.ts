import * as express from "express";

// importing our controllers from their respective controller file
import * as statusController from './controllers/status';

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get('/', statusController.hi)
app.get('/hello', statusController.hello)
app.get('/awesome', statusController.awesome)

// export our app
export default app;