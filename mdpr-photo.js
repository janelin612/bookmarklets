javascript: (function () {
  let list = [];
  document.querySelectorAll("div.list-photo figure.square img").forEach(x => {
    let url = x.src;
    if (url.indexOf("?") != -1) {
      url = url.split("?")[0];
    }
    list.push(url);
  });
  document.body.innerHTML = "";
  list.forEach(x => {
    let img = document.createElement("img");
    img.src = x;
    img.style.cssText = "height:250px";
    document.body.appendChild(img);
  });
})()