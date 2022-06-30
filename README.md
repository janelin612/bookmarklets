# Bookmarklets

## How to use

1. Add a new bookmark, and make the script as url field of bookmarks.
2. Open the target website, then click the bookmark.

## StreetVoice m3u8

```js
javascript:(async()=>{try{let a=await (await fetch(`/api/v5/song/${/songs\/(\d+)/.exec(window.location)[1]}/hls/file/`,{method:"POST"})).json();prompt("m3u8",a.file)}catch(b){console.error(b)}})();
```

---

## SHOWROOM（ショールーム）m3u8
Get the m3u8 file of streaming from [SHOWROOM](https://www.showroom-live.com/). You can use other media player (such as VLC, PotPlayer) to watch the live.

```js
javascript:(async()=>{try{let a=(await (await fetch(`/api/live/streaming_url?room_id=${window.__NUXT__.state.roomId}&ignore_low_stream=1`)).json()).streaming_url_list.find(a=>"hls"==a.type).url;prompt("m3u8",a)}catch(b){console.error(b)}})();
```

---

## MDPR(モデルプレス) photos
List all images with full size on [modelpress](https://mdpr.jp/).

```js
javascript:(()=>{let e=Array.from(document.querySelectorAll(".pg-photo__body img")).map(e=>{let t=new URL(e.src);return t.origin+t.pathname});document.body.innerHTML="",e.forEach(e=>{let t=document.createElement("img");t.src=e,t.style.cssText="height:300px",document.body.appendChild(t)})})();
```
### Note
Only suit for the url which start with `https://mdpr.jp/photo/detail/*`. Usually, you can click the button "すべての画像をみる" to open the page.

---

## LINE LIVE（ラインライブ） m3u8
Same as SHOWROOM m3u8 finder, but suit for [LINE LIVE](https://live.line.me/).

```js
javascript:(async()=>{try{let t=JSON.parse(document.querySelector("#data").getAttribute("data-broadcast")).item,a=await(await fetch(`https://live-api.line-apps.com/web/v4.0/channel/${t.channelId}/broadcast/${t.id}`)).json();prompt("m3u8",a.liveHLSURLs[720])}catch(t){console.error(t)}})();
```

---

## Open Graph Image (og:image) 
Get the social media preview image from website.

```js
javascript:(()=>{let a=document.createElement("a");a.href=document.querySelector('meta[property="og:image"]').getAttribute("content");document.querySelector("body").appendChild(a);a.click()})();
```