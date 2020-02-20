javascript: (function () {
  let regex = /songs\/(\d+)/;
  let id = regex.exec(window.location)[1];

  fetch(`/api/v3/songs/${id}/file/`, { method: "POST" })
    .then(resp => resp.json())
    .then(data => {
      let a = document.createElement("a");
      a.href = data.file;
      document.body.appendChild(a);
      a.click();
    }).catch(err => {
      console.log(err);
    })
})()