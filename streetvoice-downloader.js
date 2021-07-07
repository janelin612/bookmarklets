javascript: (async () => {
  try {
    let regex = /songs\/(\d+)/;
    let id = regex.exec(window.location)[1];
    let data = await (await fetch(`/api/v3/songs/${id}/file/`, { method: "POST" })).json();
    let a = document.createElement("a");
    a.href = data.file;
    document.body.appendChild(a);
    a.click();
  } catch (e) {
    console.error(e);
  }
})()