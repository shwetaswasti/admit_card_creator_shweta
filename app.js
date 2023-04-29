require("dotenv").config();
var express = require("express");
var app = express();
let students = require("./router/post.route");
const cors = require('cors');
const pdfs = require('./router/pdf.route');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use("/api/v1",students);
app.use('/api/v1',pdfs);
app.listen(process.env.PORT,()=>{console.log(`connected at port ${process.env.PORT}`)});

