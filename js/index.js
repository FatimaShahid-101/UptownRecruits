document.addEventListener("DOMContentLoaded", function () {
  /// sticky Navbar ///
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar").classList.add("sticky");
      navbar_height = document.querySelector(".navbar").offsetHeight;
    } else {
      document.getElementById("navbar").classList.remove("sticky");
      document.body.style.paddingTop = "0";
    }
  });

  /// scroll to sections ///
  $(".js--scroll-to-services").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-services").offset().top },
      1000
    );
  });
  $(".js--scroll-to-process").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-process").offset().top },
      1000
    );
  });
  $(".js--scroll-to-about").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-about").offset().top },
      1000
    );
  });
  $(".js--scroll-to-features").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });
  $(".js--scroll-to-teams").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-teams").offset().top },
      1000
    );
  });
  $(".js--scroll-to-contact").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-contact").offset().top },
      1000
    );
  });
});

/// animation on scroll ///
$(".js--wp-0a").waypoint(
  function (direction) {
    $(".js--wp-0a").addClass("animated animate__fadeInDown");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-0b").waypoint(
  function (direction) {
    $(".js--wp-0b").addClass("animated animate__fadeIn");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-0c").waypoint(
  function (direction) {
    $(".js--wp-0c").addClass("animated animate__fadeInUp");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-1").waypoint(
  function (direction) {
    $(".js--wp-1").addClass("animated animate__fadeInDown");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-2").waypoint(
  function (direction) {
    $(".js--wp-2").addClass("animated animate__fadeInDown");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-3").waypoint(
  function (direction) {
    $(".js--wp-3").addClass("animated animate__fadeInDown");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-4").waypoint(
  function (direction) {
    $(".js--wp-4").addClass("animated animate__fadeInLeft");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-5").waypoint(
  function (direction) {
    $(".js--wp-5").addClass("animated animate__fadeInRight");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-7").waypoint(
  function (direction) {
    $(".js--wp-7").addClass("animated animate__slideInUp");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-8a").waypoint(
  function (direction) {
    $(".js--wp-8a").addClass("animated animate__slideInRight");
  },
  {
    offset: "50%",
  }
);
$(".js--wp-8b").waypoint(
  function (direction) {
    $(".js--wp-8b").addClass("animated animate__slideInRight");
  },
  {
    offset: "50%",
  }
);
$(".js--wp-8c").waypoint(
  function (direction) {
    $(".js--wp-8c").addClass("animated animate__slideInRight");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-9").waypoint(
  function (direction) {
    $(".js--wp-9").addClass("animated animate__fadeIn");
  },
  {
    offset: "50%",
  }
);

$(".js--wp-10").waypoint(
  function (direction) {
    $(".js--wp-10").addClass("animated animate__pulse");
  },
  {
    offset: "50%",
  }
);

/// Stats counter ///
$(".stats").waypoint(
  function (direction) {
    const counters = document.querySelectorAll(".stats__div-number");
    const speed = 250;

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const inc = Math.round(target / speed);

        if (count < target) {
          counter.innerText = count + inc;
          setTimeout(updateCount, 1);
        } else {
          count.innerText = target;
        }
      };

      updateCount();
    });
  },
  {
    offset: "80%",
  }
);

const contactForm = document.querySelector(".contact__form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
