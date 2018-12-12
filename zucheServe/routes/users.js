const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.post("/signin",(req,res)=>{
  var uname=req.body.uname;
  var upwd=req.body.upwd;
  var sql="select * from zc_user where uname=? and upwd=?";
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) console.log(err);
    if(result.length==1){
	//session 中存uid
      req.session.uid=result[0].uid
	//返回数据 是uname
      res.send({data:result[0].uname});
    }else{
      res.send({data:0,msg:"用户名或密码错误！"})
    }
  })
})
router.get("/islogin",(req,res)=>{
  if(req.session.uid===undefined)
    res.send({data:0});
  else
    res.send({data:1});
})
module.exports=router;