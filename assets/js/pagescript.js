const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

$(document).ready(function () {
  setTimeout(function () {
    $("#preloadcontainer").addClass("loaded");
    // Once the container has finished, the scroll appears
    if ($("#preloadcontainer").hasClass("loaded")) {
      // It is so that once the container is gone, the entire preloader section is deleted
      $("#preloader")
        .delay(1000)
        .queue(function () {
          $(this).remove();
        });
    }
  }, 3000);
});
