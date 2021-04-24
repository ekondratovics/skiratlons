let videoCarousel = () => {
    let mediaQuery = window.matchMedia("(min-width: 1025px)");

    let itemsLeft = document.querySelectorAll(".left-bottom-item.desktop"),
        itemsRight = document.querySelectorAll(".right-bottom-item"),
        totalItemsDesktop = itemsLeft.length,
        dots = document.querySelector(".dots"),
        currentSlide = 0;

    let itemsMobile = document.querySelectorAll(".left-bottom-item.mobile"),
        totalItemsMobile = itemsMobile.length;

    let setInitialClasses = () => {
        itemsLeft.forEach( (item) => {
            item.className = "left-bottom-item desktop";
        });
        itemsRight.forEach( (item) => {
            item.className = "right-bottom-item";
        });
        itemsMobile.forEach( (item) => {
            item.className = "left-bottom-item mobile";
        });
        document.querySelectorAll(".dot-button").forEach( (item) => {
            item.className = "dot-button";
        });
    }

    let addActiveToClassList = (...args) => {
        args.forEach( (item) => {
            item.classList.add("active");
        });
    }

    let setInitialState = () => {
        dots.innerHTML = "";
        let createDots = (howMany) => {
            for(let i=0; i<howMany; i++) {
                let dot = document.createElement("div");
                dot.classList.add("dot-button");
                dots.appendChild(dot);
            }
        }

        currentSlide = 0;

        setInitialClasses();

        if (mediaQuery.matches) {
            createDots(totalItemsDesktop);
            addActiveToClassList(itemsLeft[0], itemsRight[0], document.querySelector(".dot-button"));
        } else {
            createDots(totalItemsMobile);
            addActiveToClassList(itemsMobile[0], document.querySelector(".dot-button"));
        }

        let setCarouselEventListeners = () => {
            let prev = document.querySelector(".button-prev"),
                next = document.querySelector(".button-next");
    
            prev.addEventListener("click", prevSlide);
            next.addEventListener("click", nextSlide);
    
            let dotSlide = (num) => {
                changeSlides(num);
            }
    
            document.querySelectorAll(".dot-button").forEach( (dot, index) => {
                dot.addEventListener("click", function () {
                    dotSlide(index);
                    currentSlide = index;
                });
            });
        }
        setCarouselEventListeners();
    }

    mediaQuery.addListener(setInitialState);

    let changeSlides = (slideIndex) => {
        setInitialClasses();
        
        if (mediaQuery.matches) {
            addActiveToClassList(itemsLeft[slideIndex], itemsRight[slideIndex], document.querySelectorAll(".dot-button")[slideIndex]);
        } else {
            addActiveToClassList(itemsMobile[slideIndex], document.querySelectorAll(".dot-button")[slideIndex]);
        }
    }

    let nextSlide = () => {
        if (mediaQuery.matches) {
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
        if (mediaQuery.matches) {
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

    setInitialState();
}

export { videoCarousel };