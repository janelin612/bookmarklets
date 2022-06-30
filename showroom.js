javascript: (async () => {
  try {
    let id = window.__NUXT__.state.roomId;
    let json = await (await fetch(`/api/live/streaming_url?room_id=${id}&ignore_low_stream=1`)).json();
    let url = json.streaming_url_list.find(el => el.type == "hls").url;
    prompt("m3u8", url);
  } catch (e) {
    console.error(e);
  }
})()
