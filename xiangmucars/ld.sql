SET NAMES UTF8;
DROP DATABASE IF EXISTS ld;
CREATE DATABASE ld CHARSET=UTF8;
USE ld;


/*用户信息表*/
CREATE TABLE ld_user(
	uid		INT PRIMARY KEY AUTO_INCREMENT, #用户编号
	uname		VARCHAR(32),    # 用户登录名
	upwd		VARCHAR(32),    # 用户密码
	email		VARCHAR(64),    # 用户邮箱
	phone		VARCHAR(16),    # 用户电话
	avatar		VARCHAR(128),    # 用户头像 图片路径
	user_name	VARCHAR(32),    # 用户实名
	gender		SMALLINT,    # 用户性别 1-男 0-女 2-不详
	focusCount	INT,    # 用户关注数量
	fans		INT,    # 用户粉丝数量
	accountInfo	INT,    # 用户余额
	exValue		INT    # 用户经验值
);

/*小说信息表*/
CREATE TABLE ld_book(
	bid		INT PRIMARY KEY AUTO_INCREMENT,    # 小说编号
	bname		VARCHAR(64),    # 小说名称
	bgroup		VARCHAR(32),    # 小说分类
	bauthor		VARCHAR(32),    # 小说作者
	binfo		VARCHAR(128),    # 小说简介
	bIsWJ		BOOLEAN,    # 小说是否完结
	bUpdate		BIGINT    # 小说最近更新时间
);