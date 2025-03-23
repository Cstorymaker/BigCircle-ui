$(function () {
  $(window).on("load scroll resize", function () {
    var st = $(window).scrollTop();
    var headerHeight = $(".js-header").outerHeight();
    var offsetBeforeHeader = 100;

    $(".js-sec-scroll-point").each(function () {
      var tg = $(this).offset().top;
      var id = $(this).attr("id");
      if (st >= tg - headerHeight - offsetBeforeHeader) {
        $(".page-index__link").removeClass("is-active");
        $(".page-index__link[href='#" + id + "']").addClass("is-active");
      }
    });
  });

  // 目次のリンクをクリックしたらスムーズスクロールで移動
  $(".page-index__link").on("click", function (e) {
    e.preventDefault();
    var targetId = $(this).attr("href");
    var targetPosition = $(targetId).offset().top;
    var headerHeight = $(".js-header").outerHeight();
    var offsetBeforeHeader = 10; // スクロール時の余白

    $("html, body").animate(
      {
        scrollTop: targetPosition - headerHeight - offsetBeforeHeader,
      },
      600
    );
  });
});


const reasonsSwiper = new Swiper('.js-reasons-slider ', {
  loop: false,
  effect:'fade',
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.reasons__pagination',
    clickable: true,
    bulletClass: 'reasons__bullet',
    bulletActiveClass: 'reasons__bullet--active',
  },
  wrapperClass: 'reasons__slider-wrapper',
  slideClass: 'reasons__slide',
});


var service_swiper = new Swiper(".js-vehicle-swiper", {
  loop: true,
  speed: 2000,
  slidesPerView: 1.2,
  spaceBetween: 0,
  centeredSlides: false,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: "auto",
    },
    1080: {
      slidesPerView: "auto",
    },
    1280: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      loopAdditionalSlides: 2,
    },
    1920: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      loopAdditionalSlides: 2,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(".vehicle-slide").on("click", function () {
  let modalId = $(this).data("modal");
  $("#" + modalId)
    .fadeIn(300)
    .addClass("active");
  $("body").addClass("no-scroll");
});

// モーダルを閉じる（✖ボタン or モーダルの背景）
$(".closeModal, .modalBg").on("click", function (e) {
  if ($(e.target).is(".closeModal, .modalBg")) {
    // クリックした要素が✖ボタン or 背景なら閉じる
    $(this).closest(".bus__modal").fadeOut(300).removeClass("active");
    $("body").removeClass("no-scroll");
  }
});

const swiper = new Swiper(".js-partner-swiper", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 1500,
  },
  centeredSlides: false,
  slidesPerView: 1.2,
  spaceBetween: 20,

  breakpoints: {
    500: {
      slidesPerView: 3.5,
      spaceBetween: 10,
      centeredSlides: true,
    },

    1200: {
      slidesPerView: 4.25,
      spaceBetween: 10,
      centeredSlides: true,
    },
  },

  // 前後の矢印
  navigation: {
    nextEl: ".partner-slider__custom-next",
    prevEl: ".partner-slider__custom-prev",
  },
});

//FAQアコーディオン
$(".faq-list__faq-ttl").click(function () {
  $(this).next(".faq-list__faq-content").slideToggle();
  $(this).toggleClass("is-active");
});
