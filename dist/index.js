"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_2 = require("express");
const app = (0, express_1.default)();
app.use(cors_1.default);
const router = (0, express_2.Router)();
const port = 3000;
app.use(router);
router.get('/', (req, res) => {
    const text = { value: 'Hello World' };
    res.send(text);
});
app.listen(port, () => { });
