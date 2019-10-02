javascript: (function () {
  let regexSongId = /\/\d+\//;
  let regexNumber = /\d+/;
  let songId = regexNumber.exec(regexSongId.exec(window.location)[0]);

  fetch(`/api/v3/songs/${songId}/file/`, { method: "POST" })
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