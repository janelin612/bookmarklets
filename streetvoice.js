javascript: (async () => {
  try {
    let id = /songs\/(\d+)/.exec(window.location)[1];
    let resp = await (
      await fetch(`/api/v5/song/${id}/hls/file/`, { method: "POST" })
    ).json();
    prompt("m3u8", resp.file);
  } catch (e) {
    console.error(e);
  }
})();
