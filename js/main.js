window.onload = () => {
  $("#spinner").fadeOut("slow", function () {});
};

window.onscroll = function () {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    $("#header").addClass("fixed-top");
  } else {
    $("#header").removeClass("fixed-top");
  }
};

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player("video", {
    events: {
      // call this function when player is ready to use
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  // bind events

  $(".play-button").click(function () {
    $(".make-black").slideDown(300);
    player.playVideo();
  });

  $(".make-black").click(function () {
    $(".make-black").slideUp(300);
    player.pauseVideo();
  });
}

// Inject YouTube API script
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var services = [
  {
    id: "construction",
    image: "./img/bg-construction.jpg",
    icon: "./img/ic-construction.svg",
    serviceName: "Construction",
  },

  {
    id: "projectDevelopment",
    image: "./img/bg-project.jpg",
    icon: "./img/ic-project.svg",
    serviceName: "Project Development",
  },
  {
    id: "interiorDesign",
    image: "./img/bg-interior.jpg",
    icon: "./img/ic-pantone.svg",
    serviceName: "Interior Design",
  },
  {
    id: "repairs",
    image: "./img/bg-repairs.jpg",
    icon: "./img/ic-repair.svg",
    serviceName: "Repairs",
  },
];

services.map((service) => {
  document.getElementById(
    "addServices"
  ).innerHTML += `<div class="services col-sm-6 col-lg-3 mb-4 ">

<a href="#">
  <div id="${service.id}" class="inner text-center">
    <div class="inner-content">
      <img src="${service.icon}" alt="">
      <h5>${service.serviceName}</h5>
    </div>
  </div>
</a>
</div>`;

  setTimeout(() => {
    if (service.id) {
      $("#" + service.id).on({
        mouseover: function () {
          this.style.backgroundImage = `url(${service.image})`;
          this.style.animation = `show 0.6s `;
        },

        mouseout: function () {
          this.style.backgroundImage = `none`;
          this.style.animation = `hide 1s `;
        },
      });
    }
  }, 200);
});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//SWIPER

function portfolioElements() {
  $.ajax({
    dataType: "json",
    url: "js/portfolioList.json",
    async: true,
    success: function (data) {
      data.portfolios.forEach(function (portfolio) {
        document.getElementById(
          "addPortfolio"
        ).innerHTML += `<div  class="swiper-slide">
          <div class="portfolio shadow">
            <div class="portfolio-bg-img " style="background: url('${portfolio.bgImage}')"></div>
            <div class="portfolio-title text-center ">
              <h3>${portfolio.name}</h3>
              <div class="text-muted">${portfolio.type}</div>
              <div class="btn btn-outline-primary text-uppercase">VIEW PROJECT</div>
            </div>
          </div>
        </div>`;
        var swiper1 = new Swiper(".s1", {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".slider-button-next",
            prevEl: ".slider-button-prev",
          },

          // Responsive breakpoints
          breakpoints: {
            // when window width is >= 320px
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // when window width is >= 320px
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 992px
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
        });
      });
    },
  });
}
portfolioElements();

//partner slider
var swiper2 = new Swiper(".s2", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    delay: 1000,
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});

var swiper3 = new Swiper(".s3", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,

  navigation: {
    nextEl: ".s3-button-next",
    prevEl: ".s3-button-prev",
  },
});

//Progressive circle bar

var swiper4 = new Swiper(".s4", {
  slidesPerView: 1,
  spaceBetween: 10,

  autoplay: {
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    delay: 1000,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

let clientValue = 0;

let clientCounter = setInterval(() => {
  clientValue++;

  $("#clientValue").html(`${clientValue}%`);

  if (clientValue == 98) {
    clearInterval(clientCounter);
  }
}, 18);

let yearsValue = 0;
let yearsCounter = setInterval(() => {
  yearsValue++;

  $("#yearsValue").html(yearsValue);

  if (yearsValue == 20) {
    clearInterval(yearsCounter);
  }
}, 90);

let hoursValue = 0;
let hoursCounter = setInterval(() => {
  hoursValue += 94;

  $("#hoursValue").html(hoursValue);

  if (hoursValue == 9588) {
    clearInterval(hoursCounter);
  }
}, 18);

let projectsValue = 0;
let projectCounter = setInterval(() => {
  projectsValue++;

  $("#projectsValue").html(`${projectsValue}%`);

  if (projectsValue == 100) {
    clearInterval(projectCounter);
  }
}, 17);

const jarallaxEls = document.querySelectorAll(".jarallax");

jarallaxEls.forEach((el, index) => {
  if (index % 2) return false;

  el.style.justifySelf = "end";
});

jarallax(jarallaxEls, {
  speed: 0.8,
});
