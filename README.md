# sv-downloader
快速在streetvoice取得mp3連結的工具

## 用法
 1. 在瀏覽器的書籤列新增書籤
 2. 把以下內容貼到書籤的網址內:
   
 	`javascript:(function(){var TARGET_DOMAIN='streetvoice';var TARGET_FUNCTION='songs';var url=""+window.location;if(url.indexOf(TARGET_DOMAIN)==-1||url.indexOf(TARGET_FUNCTION)==-1){alert("You should use it at StreetVoice Music Page!")}else{var regexSongId=(/\d+/);var songId=regexSongId.exec(url);$.ajax({url:"https://www.streetvoice.com/api/v3/songs/"+songId+"/",method:'GET',success:function(data){var a=document.createElement("a");a.href=data.file;a.download=data.name;document.body.appendChild(a);a.click();},error:function(){alert('error~');}});}})()`

 3. 存檔
 4. 在歌曲畫面(https://**www.streetvoice.com**/xxxxx/**songs**/000000/)點書籤即可啟用
