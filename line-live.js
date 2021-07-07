javascript: (async () => {
  try {
    let data = JSON.parse(document.querySelector("#data").getAttribute("data-broadcast")).item;
    let json = await (await fetch(`https://live-api.line-apps.com/web/v4.0/channel/${data.channelId}/broadcast/${data.id}`)).json();
    prompt("m3u8", json.liveHLSURLs["720"]);
  } catch (e) {
    console.error(e);
  }
})()
