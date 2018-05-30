"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// importing our controllers from their respective controller file
const statusController = require("./controllers/status");
// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);
// API Endpoints
app.get('/', statusController.hi);
app.get('/hello', statusController.hello);
app.get('/awesome', statusController.awesome);
// export our app
exports.default = app;
//# sourceMappingURL=app.js.map