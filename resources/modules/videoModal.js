let videoModal = () => {
    let mediaQuery = window.matchMedia("(min-width: 1025px)");
    
    let playButtonsLeft = document.querySelectorAll(".watch-video-button.left"),
        playButtonsRight = document.querySelectorAll(".watch-video-button.right"),
        playButtonsMobile = document.querySelectorAll(".watch-video-button.mobile"),
        hideModal = document.querySelector(".watch-modal-close"),
        modal = document.querySelector(".watch-modal"),
        body = document.querySelector("body"),
        youTubeIframe = document.querySelector(".watch-video iframe");

    let addOpenToClassList = (...args) => {
        args.forEach( (item) => {
            item.classList.add("open");
        })
    }

    let openModalLeft = (videoIndex) => {
        youTubeIframe.setAttribute("src", videoIndex);
        addOpenToClassList(modal, body);
    }

    let openModalRight = (videoIndex) => {
        youTubeIframe.setAttribute("src", videoIndex);
        addOpenToClassList(modal, body);
    }

    let openModalMobile = (videoIndex) => {
        youTubeIframe.setAttribute("src", videoIndex);
        addOpenToClassList(modal, body);
    }

    let closeModal = () => {
        modal.classList.remove("open");
        body.classList.remove("open");
        youTubeIframe.setAttribute("src", "");
    }

    let addEventListenersWatch = () => {
        if(mediaQuery.matches) {
            playButtonsLeft.forEach( (button) => {
                button.addEventListener("click", function() {
                    openModalLeft(this.dataset.url);
                });
            });
            playButtonsRight.forEach( (button) => {
                button.addEventListener("click", function() {
                    openModalRight(this.dataset.url);
                });
            });
        } else {
            playButtonsMobile.forEach( (button) => {
                button.addEventListener("click", function() {
                    openModalMobile(this.dataset.url);
                });
            });
        }
    }

    addEventListenersWatch();

    mediaQuery.addListener(addEventListenersWatch);

    hideModal.addEventListener("click", closeModal);
    modal.addEventListener("click", closeModal);
}

export { videoModal };