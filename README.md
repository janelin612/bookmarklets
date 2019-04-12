# bookmarklet
整理一些自己寫來的書籤列小工具


# StreetVoice Downloader
快速在streetvoice取得mp3連結的工具

## 語法

```javascript
javascript:(function(){let TARGET_DOMAIN="streetvoice";let TARGET_FUNCTION="songs";let url=""+window.location;if(url.indexOf(TARGET_DOMAIN)!=-1&&url.indexOf(TARGET_FUNCTION)!=-1){let regexSongId=/\/\d+\//;let regexNumber=/\d+/;let songId=regexNumber.exec(regexSongId.exec(url)[0]);fetch("/api/v3/songs/"+songId+"/file/",{method:"POST"}).then(res=>{return res.json()}).then(data=>{let a=document.createElement("a");a.href=data.file;document.body.appendChild(a);a.click()}).catch(err=>{console.log(err)})}})()
```

## 使用方法  
 在歌曲畫面`https://www.streetvoice.com/xxxxx/songs/000000/`點書籤即可啟用

# Instagram Downloader
 下載IG圖片的小工具 

## 語法

```javascript
javascript:(function(){let url="";if(document.querySelector("div[role='dialog']")==null){url=document.querySelector("body main article>div img").getAttribute("src")}else{url=document.querySelector("body div[role='dialog'] article>div img").getAttribute("src")}	window.open(url)})()
```

## 注意事項
原則上是設計給單一照片的畫面使用的，用在動態上或者Grid畫面抓錯圖我可不管

# Showroom 獲取直播連結
從[Showroom](http://showroom-live.com/)取得直播的m3u8檔案，可另外至PotPlayer之類的地方播放

## 語法

```javascript
javascript:(function(){var url=JSON.parse(document.querySelector("#js-initial-data").dataset.json).streamingUrlHls;if(url==null||url==""){alert("something wrong~")}else{prompt("m3u8",url)}})()
```