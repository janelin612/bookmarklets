javascript: (function () {
  let contentId = JSON.parse(document.querySelector("#data").getAttribute("data-broadcast")).lsaPath;
  fetch(`https://lssapi.line-apps.com/v1/live/playInfo?contentId=${contentId}`)
    .then(resp => resp.json())
    .then(json => {
      let a = document.createElement("a");
      a.href = json.playUrls.abr;
      document.body.appendChild(a);
      a.click();
    })
    .catch(err => {
      console.log(err);
    })
})()