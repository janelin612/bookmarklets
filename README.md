# Bookmarklet
整理一些自己寫來的書籤列小工具

## 用法
自行新增一筆書籤，然後將下方附上的程式碼貼在書籤的網址列即可新增

# StreetVoice Downloader
快速在[Streetvoice](https://streetvoice.com/)取得mp3連結的工具

## 語法
```javascript
javascript:(async()=>{try{let regex=/songs\/(\d+)/;let id=regex.exec(window.location)[1];let data=await(await fetch(`/api/v3/songs/${id}/file/`,{method:"POST"})).json();let a=document.createElement("a");a.href=data.file;document.body.appendChild(a);a.click()}catch(e){console.error(e)}})()
```

## 使用方法  
 在歌曲畫面`https://www.streetvoice.com/xxxxx/songs/000000/`點書籤即可啟用

# Instagram Downloader
 下載IG圖片的小工具 

## 語法
```javascript
javascript:(()=>{let selector=document.querySelector("div[role=\"dialog\"]")==null?"body main article>div img":"body div[role=\"dialog\"] article>div img";let url=document.querySelector(selector).getAttribute("src");window.open(url)})()
```
## 注意事項
原則上是設計給單一照片的畫面使用的，用在動態上或者Grid畫面抓錯圖我可不管


# Showroom 獲取直播連結
從[Showroom](http://showroom-live.com/)取得直播的m3u8檔案，可另外至PotPlayer之類的地方播放

## 語法
```javascript
javascript:(async()=>{try{let id=document.querySelector("#this-room-profile").href.match(/\d+/)[0];let json=await(await fetch(`/api/live/streaming_url?room_id=${id}&ignore_low_stream=1`)).json();let url=json.streaming_url_list.find(el=>el.type=="hls").url;prompt("m3u8",url)}catch(e){console.error(e)}})()
```


# MDPR Photo Downloader
[mdpr.jp](https://mdpr.jp/)為日本一個雜誌網站，本工具可以列出畫面上全部圖片的原始尺寸檔案

## 語法
```javascript
javascript:(()=>{let e=Array.from(document.querySelectorAll(".pg-photo__body img")).map(e=>{let t=new URL(e.src);return t.origin+t.pathname});document.body.innerHTML="",e.forEach(e=>{let t=document.createElement("img");t.src=e,t.style.cssText="height:300px",document.body.appendChild(t)})})();
```
## 注意事項
僅適用網址開頭為`https://mdpr.jp/photo/detail/`的頁面內容


# LINE LIVE（ラインライブ）
類似 Showroom 的工具，用來抽取 [LINE LIVE](https://live.line.me/) 直播的m3u8連結

## 語法
```javascript
javascript:(async()=>{try{let data=JSON.parse(document.querySelector("#data").getAttribute("data-broadcast")).item;let json=await(await fetch(`https://live-api.line-apps.com/web/v4.0/channel/${data.channelId}/broadcast/${data.id}`)).json();prompt("m3u8",json.liveHLSURLs["720"])}catch(e){console.error(e)}})()
```