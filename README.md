# bookmarklet
整理一些自己寫來的書籤列小工具


# StreetVoice Downloader
快速在streetvoice取得mp3連結的工具

## 語法

 	javascript:(function(){var TARGET_DOMAIN='streetvoice';var TARGET_FUNCTION='songs';var url=""+window.location;if(url.indexOf(TARGET_DOMAIN)==-1||url.indexOf(TARGET_FUNCTION)==-1){alert("You should use it at StreetVoice Music Page!")}else{var regexSongId=/\/\d+\//;var regexNumber=/\d+/;var songId=regexNumber.exec(regexSongId.exec(url)[0]);$.ajax({url:"/api/v3/songs/"+songId+"/",method:'GET',success:function(data){var a=document.createElement("a");a.href=data.file;a.download=data.name;document.body.appendChild(a);a.click()},error:function(){alert('error~')}})}})()

## 使用方法  
 在歌曲畫面(https://www.streetvoice.com/xxxxx/songs/000000/)點書籤即可啟用

# Instagram Downloader
 下載IG圖片的小工具 

## 語法

	javascript:(function(){var jqu=document.createElement('script');jqu.src="https://code.jquery.com/jquery-latest.min.js";document.getElementsByTagName('head')[0].appendChild(jqu);setTimeout(function(){let appendTarget="body";let jq=jQuery.noConflict();let url="";if(jq("div[role='dialog']").length>0){appendTarget="div[role='dialog']";url=jq("body div[role='dialog'] article>div img").attr("src")}else{url=jq("body main article>div img").attr("src")}let fileName=url.split("/")[url.split("/").length-1];let a=jq("<a>").attr("href",url).attr("download",fileName).attr("target","_blank").appendTo(appendTarget);a[0].click();a.remove()},500)})()

## 注意事項
原則上是設計給單一照片的畫面使用的，用在動態上或者Grid畫面抓錯圖我可不管
