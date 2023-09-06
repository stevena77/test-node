"use strict";

// 모듈
const express = require("express");
// const bodyParser = require("body-parser");

const app = express();

const PORT = 3000;
// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// use -> 미들웨어 등록해주는 메서드
// 모든 미들웨어는 위에서부터 아래로 순차적으로 실행. 미들웨어는 순서가 중요
app.use(express.static(__dirname + "/src/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", home);

module.exports = app;

//npm i express -s 통해 express 설치
