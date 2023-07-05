let txt = document.getElementById("text");
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  text.style.marginRight = value * 3 + "px";
  text.style.marginTop = value * 1 + "px";
  header.style.top = value * 0.5 + "px";
});
