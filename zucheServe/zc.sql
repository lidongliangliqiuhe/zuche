SET NAMES UTF8;
DROP DATABASE IF EXISTS zc;
CREATE DATABASE zc CHARSET=UTF8;
USE medicines;
CREATE TABLE zc_user(
    uid						INT PRIMARY KEY AUTO_INCREMENT,
    uname         VARCHAR(16),
    upwd					VARCHAR(16),
    email					VARCHAR(32),
    phone					VARCHAR(16),
    avatar        VARCHAR(40),
    user_name			VARCHAR(10),
    gender				INT
);
INSERT INTO zc_user VALUES(1,"dingding","123456","15684851@qq.com","18235698547",null,"丁丁",1)
INSERT INTO zc_user VALUES(2,"dangdang","123456","18544851@qq.com","18235698547",null,"丁丁",1)
INSERT INTO zc_user VALUES(3,"huahua","123456","18564851@qq.com","18235698547",null,"丁丁",1)
INSERT INTO zc_user VALUES(4,"xiaoming","123456","16524851@qq.com","18235698547",null,"丁丁",1)
INSERT INTO zc_user VALUES(5,"xiaohong","123456","18544851@qq.com","18235698547",null,"丁丁",1)
INSERT INTO zc_user VALUES(6,"xiaolan","123456","89544851@qq.com","18235698547",null,"丁丁",1)
