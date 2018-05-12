javascript: (function() {
    var url=JSON.parse(document.querySelector("#js-initial-data").dataset.json).streamingUrlHls;

    if(url==null || url==""){
        alert("something wrong~");
    }else{
        prompt("m3u8",url);
    }
})()