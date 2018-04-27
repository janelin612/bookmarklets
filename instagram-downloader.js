javascript: (function() {
    let url="";

    if(document.querySelector("div[role='dialog']")==null){
        url=document.querySelector("body main article>div img").getAttribute("src");
    }else{
        url=document.querySelector("body div[role='dialog'] article>div img").getAttribute("src");
    }

    window.open(url);
})()