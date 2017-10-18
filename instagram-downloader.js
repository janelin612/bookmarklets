javascript: (function() {
    //inject jQuery
    var jqu = document.createElement('script');
    jqu.src = "https://code.jquery.com/jquery-latest.min.js";
    document.getElementsByTagName('head')[0].appendChild(jqu);

    //wait 500ms for.... jquery loading?
    setTimeout(function() {
        let jq = jQuery.noConflict();

        //select the img element
        let url = jq("body main article>div img").attr("src");
        let fileName = url.split("/")[url.split("/").length - 1];
        console.log(url);

        //build <a/> and click it
        let a = jq("<a>").attr("href", url).attr("download", fileName).attr("target", "_blank").appendTo("body");
        a[0].click();
        a.remove();
    }, 500);
})()