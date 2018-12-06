//引入MySQL连接模块
//哪一个模块中操作SQL语句，就引入连接
const pool=require('../pool.js');
//express下的路由器
const express=require('express');
//创建空路由器
var router=express.Router();
//1 登录 路由
router.post('/login',function(req,res){
	var $uname=req.body.uname;
	var $upwd=req.body.upwd
	if ($uname=='')
	{
		res.send({code:401,msg:'用户名不存在'})
			return;
	}
	if ($upwd=='')
	{
		res.send({code:402,msg:'用户密码不存在'})
			return;
	}
	var sql='select * from xz_user where uname=? and upwd=?'
	pool.query(sql,[$uname,$upwd],function(err,result){
		if (err) throw err;
		if (result.length>0)
		{
			res.send('登录成功')
		}else{
			res.send('用户名或密码错误')	
		}
	})
})
//2 查询用户表的所有数据并相应给前端
router.get('/list',function(req,res){
	var sql='select * from xz_user'
	pool.query(sql,function(err,result){
		if (err) throw err;
		res.send(result)
	})
	
})
//3 用户列表中的删除用户路由
router.get('/deleteUser',function(req,res){
	var $uid=req.query.uid
		if ($uid=='')
		{res.send('用户id不能为空')
		}
	var sql='delete from xz_user where uid=?'
	pool.query(sql,[$uid],function(err,result){
		if (err) throw err;
		if (result.affectedRows>0)
		{
			res.send('1')//删除成功
		}else{
			res.send('0')//用户编号不存在	
		}
		
	})
})
//4 用户列表中的修改用户的路由
router.post('/selUpdate',function(req,res){
	var $uid=req.body.uid
	var $uname=req.body.uname
	var $upwd=req.body.upwd
	var $email=req.body.email
	var $phone=req.body.phone
	var $user_name=req.body.user_name
	var $gender=req.body.gender
	if (!$uname){res.send('用户名不能为空')
		return;}
	if (!$upwd){res.send('密码不能为空')
		return;}
	if (!$email){res.send('邮箱不能为空')
		return;}
	if (!$phone){res.send('电话不能为空')
		return;}
	if (!$user_name){res.send('姓名不能为空')
		return;}
	if (!$gender){res.send('性别不能为空')
		return;}
	var sql='update xz_user set uname=?,upwd=?,email=?,phone=?,user_name=?,gender=? where uid=?'
	pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender,$uid],function(err,result){
		if (err) throw err;
		if (result.affectedRows>0)
		{
			// 此处为修改成功后跳转到用户列表页面
			res.send("<script>alert('修改成功');location.href='http://127.0.0.1:3000/02_list.html'</script>")
			//res.send('修改成功')
		}else{
			res.send('未修改成功')
		}
	})
})
//5 修改用户信息路由
router.get('/selUser',function(req,res){
	var $uid=req.query.uid
	pool.query('select uname,upwd,email,phone,user_name,gender from xz_user where uid=?',[$uid],function(err,result){
		if (err) throw err;
		if (result.length>0)
		{
			res.send(result[0]);
		}else{
			res.send("没有查询到用户信息")
		}
		
	})
})
//6 用户注册路由，用户名验证
router.get('/yhmjc',function(req,res){
	var $uname=req.query.uname
	var sql='select * from xz_user where uname=?'
	pool.query(sql,[$uname],function(err,result){
		if (err) throw err;
		//console.log(result)
		if (result.length>0)
		{
			res.send('1')
		}else{
			res.send('0')	
		}
	})
})
//7 用户注册路由，插入数据
router.post('/regtouser',function(req,res){
	var $uname=req.body.uname
	var $upwd=req.body.upwd
	var $email=req.body.email
	var $phone=req.body.phone
	var sql='INSERT INTO xz_user VALUES(NULL,?,?,?,?,NULL,NULL,0)'
	pool.query(sql,[$uname,$upwd,$email,$phone],function(err,result){
		if (err) throw err;
		if (result.affectedRows>0)
		{
			res.send('1')
		}else{
			res.send('0')	
		}
	})
})
//导出路由器
module.exports=router;