window.onscroll = function () {
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset) {
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};
