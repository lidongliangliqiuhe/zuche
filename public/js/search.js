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
})();