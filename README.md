# bookmarklet
整理一些自己寫來的書籤列小工具


# StreetVoice Downloader
快速在streetvoice取得mp3連結的工具

## 語法

 	javascript:(function(){var TARGET_DOMAIN='streetvoice';var TARGET_FUNCTION='songs';var url=""+window.location;if(url.indexOf(TARGET_DOMAIN)==-1||url.indexOf(TARGET_FUNCTION)==-1){alert("You should use it at StreetVoice Music Page!")}else{var regexSongId=/\/\d+\//;var regexNumber=/\d+/;var songId=regexNumber.exec(regexSongId.exec(url)[0]);$.ajax({url:"/api/v3/songs/"+songId+"/",method:'GET',success:function(data){var a=document.createElement("a");a.href=data.file;a.download=data.name;document.body.appendChild(a);a.click()},error:function(){alert('error~')}})}})()

## 使用方法  
 在歌曲畫面`https://www.streetvoice.com/xxxxx/songs/000000/`點書籤即可啟用

# Instagram Downloader
 下載IG圖片的小工具 

## 語法

	javascript:(function(){let url="";if(document.querySelector("div[role='dialog']")==null){url=document.querySelector("body main article>div img").getAttribute("src")}else{url=document.querySelector("body div[role='dialog'] article>div img").getAttribute("src")}	window.open(url)})()

## 注意事項
原則上是設計給單一照片的畫面使用的，用在動態上或者Grid畫面抓錯圖我可不管
