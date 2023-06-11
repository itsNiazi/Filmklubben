let bttt = document.getElementById("btn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    bttt.style.display = "block";
  } else {
    bttt.style.display = "none";
  }
}
