"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MONGODB_URI = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://Bharath_Gopalswamy:t6kfNAN2wT2f9mVO@bharath.b4lwfbh.mongodb.net/test";
exports.MONGODB_URI = MONGODB_URI;