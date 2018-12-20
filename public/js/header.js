(function(){
    var reg=document.getElementById("reg");
    var login=document.getElementById("login");
    var mywk=document.getElementById("mywk");
    var help=document.getElementById("help");
    var welcome=document.getElementById("welcome");
    var signout=document.getElementById("signout");
    var shouye=document.querySelector("div.big-header ul.big-header-tab li:nth-child(1)")
    var zuchezijia=document.querySelector("div.big-header ul.big-header-tab li:nth-child(2)")
    reg.onclick=function(){
        location.href="reg.html"
    }
    login.onclick=function(){
        location.href="login.html"
    }
    help.onclick=function(){
        location.href="help.html"
    }
    shouye.onclick=function(){
        location.href="index.html"
    }
    zuchezijia.onclick=function(){
        location.href="search.html"
    }
    var uname=sessionStorage.getItem("uname")
    if(uname){
        reg.style="display:none";
        login.style="display:none";
        welcome.innerHTML=uname;
        signout.innerHTML="注销";
        signout.onclick=function(){
            location.href="signout.html"
        }
    }
    var phone=document.querySelector("div.little-header ul.nav-left li:first-child");
    var weixin=document.querySelector("div.little-header ul.nav-left li:nth-child(2)")
    var phone_img=document.querySelector(".little-header div:nth-child(1)")
    var weixin_img=document.querySelector(".little-header div:nth-child(2)")
    phone.onmouseenter=function(){
        phone_img.setAttribute("class","xianshi1")
    }
    phone.onmouseleave=function(){
        phone_img.setAttribute("class","xiaoshi")
    }
    weixin.onmouseenter=function(){
        weixin_img.setAttribute("class","xianshi2")
    }
    weixin.onmouseleave=function(){
        weixin_img.setAttribute("class","xiaoshi")
    }
})()