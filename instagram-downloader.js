javascript: (function() {
    //inject jQuery
    var jqu = document.createElement('script');
    jqu.src = "https://code.jquery.com/jquery-latest.min.js";
    document.getElementsByTagName('head')[0].appendChild(jqu);

    //wait 500ms for.... jquery loading?
    setTimeout(function() {
        let appendTarget="body";
        let jq = jQuery.noConflict();

        //Start to get target image url
        let url="";
        //Check are we in the dialog mode?
        if(jq("div[role='dialog']").length>0){
            appendTarget="div[role='dialog']";
            url = jq("body div[role='dialog'] article>div img").attr("src");
        }else{
            url = jq("body main article>div img").attr("src");
        }
        let fileName = url.split("/")[url.split("/").length - 1];

        //build <a/> and click it
        let a = jq("<a>").attr("href", url).attr("download", fileName).attr("target", "_blank").appendTo(appendTarget);
        a[0].click();
        a.remove();
    }, 500);
})()