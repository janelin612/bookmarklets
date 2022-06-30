javascript: (() => {
  let list = Array.from(document.querySelectorAll('.pg-photo__body img')).map(img => {
    let u = new URL(img.src);
    return u.origin + u.pathname;
  })
  document.body.innerHTML = "";
  list.forEach(x => {
    let img = document.createElement("img");
    img.src = x;
    img.style.cssText = "height:300px";
    document.body.appendChild(img);
  });
})()