javascript: (function () {
  let TARGET_DOMAIN = "streetvoice";
  let TARGET_FUNCTION = "songs";

  let url = "" + window.location;
  if (url.indexOf(TARGET_DOMAIN) != -1 && url.indexOf(TARGET_FUNCTION) != -1) {
    let regexSongId = /\/\d+\//;
    let regexNumber = /\d+/;
    let songId = regexNumber.exec(regexSongId.exec(url)[0]);

    fetch("/api/v3/songs/" + songId + "/file/", { method: "POST" }).then(res => {
      return res.json();
    }).then(data => {
      let a = document.createElement("a");
      a.href = data.file;
      document.body.appendChild(a);
      a.click();
    }).catch(err => {
      console.log(err);
    })
  }
})()