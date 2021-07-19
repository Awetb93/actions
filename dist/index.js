"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = process.env.PORT || 5000;
var sum = function (a, b) { return a + b; };
app.get("/", function (req, res) { return res.send("welcome"); });
app.listen(port, function () { return console.log("welcome", sum(4, 5)); });
