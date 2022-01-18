javascript: (() => {
  let a = document.createElement("a");
  a.href = document
    .querySelector('meta[property="og:image"]')
    .getAttribute("content");
  document.querySelector("body").appendChild(a);
  a.click();
})();
