"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoConnection_1 = require("./database/mongoConnection");
const URLController_1 = require("./controller/URLController");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const urlController = new URLController_1.URLController();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const database = new mongoConnection_1.MongoConnection();
database.connect();
app.post('/shorten', urlController.shorten);
app.get('/:hash', urlController.redirect);
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
//# sourceMappingURL=index.js.map