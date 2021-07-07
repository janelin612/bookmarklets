javascript: (async () => {
  try {
    let contentId = JSON.parse(document.querySelector("#data").getAttribute("data-broadcast")).lsaPath;
    let json = await (await fetch(`https://lssapi.line-apps.com/v1/live/playInfo?contentId=${contentId}`)).json();
    prompt("m3u8", json.playUrls["720"]);
  } catch (e) {
    console.error(e);
  }
})()