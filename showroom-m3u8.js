javascript: (async () => {
  try {
    let id = document.querySelector("#this-room-profile").href.match(/\d+/)[0];
    let json = await (await fetch(`/api/live/streaming_url?room_id=${id}&ignore_low_stream=1`)).json();
    let url = json.streaming_url_list.find(el => el.type == "hls").url;
    prompt("m3u8", url);
  } catch (e) {
    console.error(e);
  }
})()
