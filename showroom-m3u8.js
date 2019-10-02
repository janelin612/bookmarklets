javascript: (function () {
  var id = document.querySelector("#this-room-profile").href.match(/\d+/)[0];

  fetch(`/api/live/streaming_url?room_id=${id}&ignore_low_stream=1`)
    .then(r => {
      return r.json();
    }).then(j => {
      let url = j.streaming_url_list.find(el => {
        return el.type == "hls";
      }).url;
      prompt("m3u8", url);
    }).catch(er => {
      alert("something wrong~");
    })
})()
