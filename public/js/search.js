(function(){
    var pHtmlStr = '';
    for(var name in pc){
        pHtmlStr = pHtmlStr + '<option>'+name+'</option>';
    }
    $("#province").html(pHtmlStr);
    $("#province").change(function(){
        var pname = $("#province option:selected").text();
        var pHtmlStr = '';
        var cityList = pc[pname];
        for(var index in cityList){
            pHtmlStr = pHtmlStr + '<option>'+cityList[index]+'</option>';
        }
        $("#city").html(pHtmlStr);
    });
    $("#province").change();
    var select=document.querySelector(".zc-select")
    window.onscroll=function(){
        var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop>=120 && scrollTop<=728){
            select.setAttribute("style","position:fixed;top:-55px;left:244px;z-index:10;")
        }else{
            select.setAttribute("style","")
        }
    }
})();