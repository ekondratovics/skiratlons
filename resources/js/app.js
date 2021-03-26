//////////////////////
// header - menu
//////////////////////

let menuIcon = document.querySelector(".menu-icon"),
  shortLines = document.querySelector(".short-lines"),
  menuBody = document.querySelector("body"),
  navContainer = document.querySelector(".nav-container"),
  viewportBoundary = window.matchMedia("(min-width: 1025px)"),
  navElements = document.querySelectorAll(".nav-element"),
  navCircles = document.querySelectorAll(".nav-circle");

menuIcon.addEventListener("click", function() {
  menuIcon.classList.toggle("menu-open");
  shortLines.classList.toggle("menu-open");
  menuBody.classList.toggle("menu-open");
  navContainer.classList.toggle("menu-open");
});

function menuSetInitialClasses() {
  if(menuBody.className === "menu-open") {
    menuIcon.className = "menu-icon";
    shortLines.className = "short-lines";
    menuBody.className = "";
    navContainer.className = "nav-container";
  }
}

navElements.forEach(function(item) {
  item.addEventListener("click", menuSetInitialClasses);
});

navCircles.forEach(function(item) {
  item.addEventListener("click", menuSetInitialClasses);
});

function handleWidthChangeMenu(e) {
  if(e.matches) {
    menuSetInitialClasses();
  }
}

viewportBoundary.addListener(handleWidthChangeMenu);
//////////////////////
// watch - carousel
//////////////////////
let mediaQueryCarousel = window.matchMedia("(min-width: 1025px)");

let carouselItemsLeft = document.querySelectorAll(".left-bottom-item.desktop"),
  carouselItemsRight = document.querySelectorAll(".right-bottom-item"),
  totalItemsDesktop = carouselItemsLeft.length,
  carouselDotsDesktop = document.querySelectorAll(".dot-button.desktop"),
  currentSlide = 0;

let carouselItemsMobile = document.querySelectorAll(".left-bottom-item.mobile"),
  totalItemsMobile = carouselItemsMobile.length,
  carouselDotsMobile = document.querySelectorAll(".dot-button.mobile");

function setInitialClassesDesktop() {
  for(let i=0; i<totalItemsDesktop; i++) {
    carouselItemsLeft[i].className = "left-bottom-item desktop";
    carouselItemsRight[i].className = "right-bottom-item";
    carouselDotsDesktop[i].className = "dot-button desktop";
  }
}

function setInitialClassesMobile() {
  for(let i=0; i<totalItemsMobile; i++) {
    carouselItemsMobile[i].className = "left-bottom-item mobile";
    carouselDotsMobile[i].className = "dot-button mobile";
  }
}

function setInitialClasses() {
  currentSlide = 0;
  setInitialClassesDesktop();
  setInitialClassesMobile();
  carouselDotsDesktop[0].classList.add("active");
  carouselDotsMobile[0].classList.add("active");

  if (mediaQueryCarousel.matches) {
    carouselItemsLeft[0].classList.add("active");
    carouselItemsRight[0].classList.add("active");
  } else {
    carouselItemsMobile[0].classList.add("active");
  }
}

mediaQueryCarousel.addListener(setInitialClasses);

function setCarouselEventListenersDesktop() {
  let prev = document.getElementsByClassName("button-prev")[0],
    next = document.getElementsByClassName("button-next")[0];

  prev.addEventListener("click", prevSlide);
  next.addEventListener("click", nextSlide);

  carouselDotsDesktop[0].addEventListener("click", firstSlide);
  carouselDotsDesktop[1].addEventListener("click", secondSlide);
  carouselDotsDesktop[2].addEventListener("click", thirdSlide);

  carouselDotsMobile[0].addEventListener("click", firstSlide);
  carouselDotsMobile[1].addEventListener("click", secondSlide);
  carouselDotsMobile[2].addEventListener("click", thirdSlide);
  carouselDotsMobile[3].addEventListener("click", fourthSlide);
  carouselDotsMobile[4].addEventListener("click", fifthSlide);
  carouselDotsMobile[5].addEventListener("click", sixthSlide);
}

function changeSlides(slideIndex) {
  if (mediaQueryCarousel.matches) {
    setInitialClassesDesktop();
    carouselItemsLeft[slideIndex].classList.add("active");
    carouselItemsRight[slideIndex].classList.add("active");
    carouselDotsDesktop[slideIndex].classList.add("active");
  } else {
    setInitialClassesMobile();
    carouselItemsMobile[slideIndex].classList.add("active");
    carouselDotsMobile[slideIndex].classList.add("active");
  }
  
}

function nextSlide() {
  if (mediaQueryCarousel.matches) {
    if (currentSlide === (totalItemsDesktop - 1)) {
      currentSlide = 0;
    } else {
      currentSlide += 1;
    }
    changeSlides(currentSlide);
  } else {
    if (currentSlide === (totalItemsMobile - 1)) {
      currentSlide = 0;
    } else {
      currentSlide += 1;
    }
    changeSlides(currentSlide);
  }
  
}

function prevSlide() {
  if (mediaQueryCarousel.matches) {
    if (currentSlide === 0) {
      currentSlide = (totalItemsDesktop - 1)
    } else {
      currentSlide -= 1;
    }
    changeSlides(currentSlide);
  } else {
    if (currentSlide === 0) {
      currentSlide = (totalItemsMobile - 1)
    } else {
      currentSlide -= 1;
    }
    changeSlides(currentSlide);
  }
}

function dotSlide(num) {
  changeSlides(num);
}

function firstSlide() {
  dotSlide(0);
  currentSlide = 0;
}

function secondSlide() {
  dotSlide(1);
  currentSlide = 1;
}

function thirdSlide() {
  dotSlide(2);
  currentSlide = 2;
}

function fourthSlide() {
  dotSlide(3);
  currentSlide = 3;
}

function fifthSlide() {
  dotSlide(4);
  currentSlide = 4;
}

function sixthSlide() {
  dotSlide(5);
  currentSlide = 5;
}

function launchCarousel() {
  setInitialClasses();
  setCarouselEventListenersDesktop();
}

launchCarousel();

//////////////////////
// watch - modal
//////////////////////

let playButtonsLeft = document.querySelectorAll(".watch-video-button.left"),
  playButtonsRight = document.querySelectorAll(".watch-video-button.right"),
  playButtonsMobile = document.querySelectorAll(".watch-video-button.mobile"),
  hideWatch = document.querySelector(".watch-modal-close"),
  watchModal = document.querySelector(".watch-modal"),
  watchBody = document.querySelector("body"),
  videosLeft = document.querySelectorAll(".watch-video-left"),
  videosRight = document.querySelectorAll(".watch-video-right"),
  videosMobile = document.querySelectorAll(".watch-video iframe");

function openWatchModalLeft(videoIndex) {
  videosLeft[videoIndex].classList.add("active");
  watchModal.classList.add("open");
  watchBody.classList.add("open");
}

function openWatchModalRight(videoIndex) {
  videosRight[videoIndex].classList.add("active");
  watchModal.classList.add("open");
  watchBody.classList.add("open");
}

function openWatchModalMobile(videoIndex) {
  videosMobile[videoIndex].classList.add("active");
  watchModal.classList.add("open");
  watchBody.classList.add("open");
}

function closeWatchModal() {
  watchModal.classList.remove("open");
  watchBody.classList.remove("open");
  for (let i=0; i<playButtonsLeft.length; i++) {
    videosLeft[i].className = "watch-video-left";
    videosRight[i].className = "watch-video-right";
  };
}

function addEventListenersWatch() {
  if(mediaQueryCarousel.matches) {
    playButtonsLeft.forEach(function (button, index){
      button.addEventListener("click", function() {
        openWatchModalLeft(index);
      });
    });
  
    playButtonsRight.forEach(function (button, index){
      button.addEventListener("click", function() {
        openWatchModalRight(index);
      });
    });
  } else {
    playButtonsMobile.forEach(function (button, index) {
      button.addEventListener("click", function() {
        openWatchModalMobile(index);
      });
    });
  }
}

addEventListenersWatch();

mediaQueryCarousel.addListener(addEventListenersWatch);

hideWatch.addEventListener("click", closeWatchModal);
watchModal.addEventListener("click", closeWatchModal);

//////////////////////
// stats - modal
//////////////////////

let showStats = document.querySelector(".show-stats"),
  hideStats = document.querySelector(".stats-modal-close"),
  statsModal = document.querySelector(".stats-modal"),
  statsBody = document.querySelector("body");

function openStatsModal() {
  statsModal.classList.add("open");
  statsBody.classList.add("open");
}

function closeStatsModal() {
  statsModal.classList.remove("open");
  statsBody.classList.remove("open");
}

showStats.addEventListener("click", openStatsModal);

hideStats.addEventListener("click", closeStatsModal);
statsModal.addEventListener("click", closeStatsModal);

//////////////////////
// disciplines - tabs
//////////////////////

function switchTabs() {
  let disciplineTab = document.getElementsByClassName("tabs-button"),
	  disciplineContent = document.getElementsByClassName("disciplines");

  disciplineTab[0].addEventListener("click", function () {
    if (!disciplineTab[0].classList.contains("active")) {
      disciplineTab[0].classList.add("active");
      disciplineTab[1].classList.remove("active");
			disciplineContent[0].classList.add("active");
			disciplineContent[1].classList.remove("active");
    }
  });

  disciplineTab[1].addEventListener("click", function () {
    if (!disciplineTab[1].classList.contains("active")) {
      disciplineTab[1].classList.add("active");
      disciplineTab[0].classList.remove("active");
			disciplineContent[1].classList.add("active");
			disciplineContent[0].classList.remove("active");
    }
  });
}

switchTabs();

//////////////////////
// disciplines - forbidden
//////////////////////

function toggleForbidden() {
	let forbiddenHeading = document.getElementsByClassName("forbidden"),
	  forbiddenList = document.getElementsByClassName("minus");

	for (let i=0; i<forbiddenHeading.length; i++) {
		forbiddenHeading[i].addEventListener("click", function() {
			forbiddenList[i].classList.toggle("open");
		});
	}
}

toggleForbidden();

//////////////////////
// faq accordion
//////////////////////

function accordize() {
  let accordionHeading = document.getElementsByClassName("question"),
    accordionButton = document.getElementsByClassName("faq-button");

  function removeOpen(index) {
    accordionHeading[index].classList.remove("open");
    accordionButton[index].classList.remove("open");
  }

  function toggleOpen(index) {
    accordionHeading[index].classList.toggle("open");
    accordionButton[index].classList.toggle("open");
  }

  for (let i = 0; i < accordionHeading.length; i++) {
    accordionHeading[i].addEventListener("click", function () {
      for (let i2 = 0; i2 < accordionHeading.length; i2++) {
        if (accordionHeading[i2] !== this) {
          removeOpen(i2);
        } else {
          toggleOpen(i2);
        }
      }
    });
  }

  for (let i = 0; i < accordionButton.length; i++) {
    accordionButton[i].addEventListener("click", function () {
      for (let i2 = 0; i2 < accordionButton.length; i2++) {
        if (accordionButton[i2] !== this) {
          removeOpen(i2);
        } else {
          toggleOpen(i2);
        }
      }
    });
  }
}

accordize();