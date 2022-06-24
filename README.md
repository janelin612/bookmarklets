# Bookmarklet
整理一些自己寫來的書籤列小工具

## 用法
自行新增一筆書籤，然後將下方附上的程式碼貼在書籤的網址列即可新增

## StreetVoice MP3 Downloader
快速在 [Streetvoice](https://streetvoice.com/) 取得 mp3 連結的工具

### 語法

```js
/** 網站改版過，舊語法目前已無法使用，待日後補上 */
```

### 使用方法  
在歌曲畫面 `https://www.streetvoice.com/AAAA/songs/0000/` 點書籤即可啟用

---

## SHOWROOM（ショールーム） m3u8
從 [Showroom](http://showroom-live.com/) 取得直播的 m3u8 檔案，可另外至 PotPlayer 之類的地方播放

### 語法
```js
javascript:(async()=>{try{let a=(await (await fetch(`/api/live/streaming_url?room_id=${window.__NUXT__.state.roomId}&ignore_low_stream=1`)).json()).streaming_url_list.find(a=>"hls"==a.type).url;prompt("m3u8",a)}catch(b){console.error(b)}})();
```
### 使用方法
在直播畫面上使用 (尚未開始串流的直播台不適用)

---

## MDPR Photo Viewer
[mdpr.jp](https://mdpr.jp/)為日本一個雜誌網站，本工具可以列出畫面上全部圖片的原始尺寸檔案

### 語法
```js
javascript:(()=>{let e=Array.from(document.querySelectorAll(".pg-photo__body img")).map(e=>{let t=new URL(e.src);return t.origin+t.pathname});document.body.innerHTML="",e.forEach(e=>{let t=document.createElement("img");t.src=e,t.style.cssText="height:300px",document.body.appendChild(t)})})();
```
### 注意事項
僅適用網址開頭為 `https://mdpr.jp/photo/detail/` 的頁面內容 (通常是在文章內點擊`すべての画像をみる`按鈕進入)

---

## LINE LIVE（ラインライブ） m3u8
類似 Showroom 的工具，用來抽取 [LINE LIVE](https://live.line.me/) 直播的 m3u8 連結

### 語法
```js
javascript:(async()=>{try{let t=JSON.parse(document.querySelector("#data").getAttribute("data-broadcast")).item,a=await(await fetch(`https://live-api.line-apps.com/web/v4.0/channel/${t.channelId}/broadcast/${t.id}`)).json();prompt("m3u8",a.liveHLSURLs[720])}catch(t){console.error(t)}})();
```

---

## Open Graph Image (og:image) 
快速抓取網站的社群媒體預覽圖片的網址 (有設定的才有，沒設定的不會自動找備案)

### 語法
```js
javascript:(()=>{let a=document.createElement("a");a.href=document.querySelector('meta[property="og:image"]').getAttribute("content");document.querySelector("body").appendChild(a);a.click()})();
```