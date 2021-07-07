javascript: (() => {
  let selector = document.querySelector("div[role=\"dialog\"]") == null ? "body main article>div img" : "body div[role=\"dialog\"] article>div img";
  let url = document.querySelector(selector).getAttribute("src");
  window.open(url);
})()