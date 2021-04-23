let videoCarousel = () => {
    let mediaQueryCarousel = window.matchMedia("(min-width: 1025px)");

    let carouselItemsLeft = document.querySelectorAll(".left-bottom-item.desktop"),
        carouselItemsRight = document.querySelectorAll(".right-bottom-item"),
        totalItemsDesktop = carouselItemsLeft.length,
        carouselDotsDesktop = document.querySelectorAll(".dot-button.desktop"),
        currentSlide = 0;

    let carouselItemsMobile = document.querySelectorAll(".left-bottom-item.mobile"),
        totalItemsMobile = carouselItemsMobile.length,
        carouselDotsMobile = document.querySelectorAll(".dot-button.mobile");

    let setInitialClassesDesktop = () => {
        for(let i=0; i<totalItemsDesktop; i++) {
            carouselItemsLeft[i].className = "left-bottom-item desktop";
            carouselItemsRight[i].className = "right-bottom-item";
            carouselDotsDesktop[i].className = "dot-button desktop";
        }
    }

    let setInitialClassesMobile = () => {
        for(let i=0; i<totalItemsMobile; i++) {
            carouselItemsMobile[i].className = "left-bottom-item mobile";
            carouselDotsMobile[i].className = "dot-button mobile";
        }
    }

    let setInitialClasses = () => {
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

    let setCarouselEventListenersDesktop = () => {
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

    let changeSlides = (slideIndex) => {
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

    let nextSlide = () => {
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

    let prevSlide = () => {
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

    let dotSlide = (num) => {
        changeSlides(num);
    }

    let firstSlide = () => {
        dotSlide(0);
        currentSlide = 0;
    }

    let secondSlide = () => {
        dotSlide(1);
        currentSlide = 1;
    }

    let thirdSlide = () => {
        dotSlide(2);
        currentSlide = 2;
    }

    let fourthSlide = () => {
        dotSlide(3);
        currentSlide = 3;
    }

    let fifthSlide = () => {
        dotSlide(4);
        currentSlide = 4;
    }

    let sixthSlide = () => {
        dotSlide(5);
        currentSlide = 5;
    }

    let launchCarousel = () => {
        setInitialClasses();
        setCarouselEventListenersDesktop();
    }

    launchCarousel();
}

export { videoCarousel };