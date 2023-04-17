if ($(window).width() < 1024) {
  $(".header__menu__ul").hide();
} else {
  $(".header__menu__ul").show();
}

$(window).on("resize", function () {
  if ($(window).width() < 1024) {
    $(".header__menu__ul").hide();
  } else {
    $(".header__menu__ul").show();
  }
});

$(".header__menu__icon").on("click", function () {
  $(".header__menu__ul").toggle();
});


if ($(window).width() < 1024) {
  $(".footer__something__content").hide();
} else {
  $(".footer__something__content").show();
}

$(window).on("resize", function () {
  if ($(window).width() < 1024) {
    $(".footer__something__content").hide();
  } else {
    $(".footer__something__content").show();
  }
});

$(".footer__something__title").on("click", function () {
  if ($(window).width() < 1024) {
    var selectedItem = $(this).closest(".footer__something");
    selectedItem.find(".footer__something__content").toggle();
  }
});


$(".slider__container").slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3.1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.1,
        slidesToScroll: 1,
      },
    },
  ],
});
