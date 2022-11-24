// Thay đổi màu nav-bar khi cuộn
// alert();
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
// window.addEvenListener("scroll", () => {
//   document
//     .querySelector("nav")
//     .classList.toggle("widows-scroll", window.scrollY > 0);
//   alert("Helloo");
// });

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("nav__container").style.top = "0";
//   } else {
//     document.getElementById("nav__container").style.top = "-50px";
//   }
// }
$(document).ready(function () {
  var scroll_start = 0;
  var startchange = $("#startchange");
  var offset = startchange.offset();
  if (startchange.length) {
    $(document).scroll(function () {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) {
        $("$nav").css("background-color", "#f0f0f0");
      } else {
        $("$nav").css("background-color", "transparent");
      }
    });
  }
});

// hiển thị hoặc ẩn faq answer
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // thay đổi icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className == "fa fa-plus") {
      icon.className = "fa fa-minus";
    } else {
      icon.className = "fa fa-plus";
    }
  });
});
