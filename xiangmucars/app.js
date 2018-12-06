//导入路由器
const express = require('express');
const bodyParser = require('body-parser');
const cors=require("cors");
const pool=require('./pool.js')

var app = express();
app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static(__dirname+'/public'));

app.use(cors({
  origin:["http://127.0.0.1:8888","http://localhost:8888"],
  credentials:true,
}))


//把路由器挂载到 /user下
//访问路由/user/login  /user/reg
app.use("/myPro",myPro);



