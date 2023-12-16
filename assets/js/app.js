// nav-bar//
const a = document.getElementById("nav");
const b = document.getElementById("change");
// const c = document.classList.add("overflow_visible")
function navresponsive() {
  a.classList.toggle("show1");
  document.body.classList.toggle("overflow_hidden");
  b.classList.toggle("change");
}

// back-to-top//
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// preloader//
setTimeout(() => {
  const box = document.getElementById("box");

  box.style.display = "none";

  document.body.classList.remove("overflow-hidden");
}, 1500);
