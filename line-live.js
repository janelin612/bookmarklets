javascript: (function () {
  let contentId = JSON.parse(document.querySelector("#data").getAttribute("data-broadcast")).lsaPath;
  fetch(`https://lssapi.line-apps.com/v1/live/playInfo?contentId=${contentId}`)
    .then(resp => resp.json())
    .then(json => {
      prompt("m3u8",json.playUrls["720"]);
    })
    .catch(err => {
      console.log(err);
    })
})()