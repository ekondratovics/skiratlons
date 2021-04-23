let hamburgerMenu = () => {
    let menuIcon = document.querySelector(".menu-icon"),
        shortLines = document.querySelector(".short-lines"),
        menuBody = document.querySelector("body"),
        navContainer = document.querySelector(".nav-container"),
        viewportBoundary = window.matchMedia("(min-width: 1025px)"),
        navElements = document.querySelectorAll(".nav-element"),
        navCircles = document.querySelectorAll(".nav-circle");

        menuIcon.addEventListener("click", function() {
            [menuIcon, shortLines, menuBody, navContainer].forEach((item) => {
                item.classList.toggle("menu-open");
            });
        });

    let menuSetInitialClasses = () => {
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

    let handleWidthChangeMenu = (e) => {
        if(e.matches) {
            menuSetInitialClasses();
        }
    }

    viewportBoundary.addListener(handleWidthChangeMenu);
}

export { hamburgerMenu };