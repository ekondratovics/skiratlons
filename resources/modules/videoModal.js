let videoModal = () => {
    let mediaQueryCarousel = window.matchMedia("(min-width: 1025px)");
    
    let playButtonsLeft = document.querySelectorAll(".watch-video-button.left"),
        playButtonsRight = document.querySelectorAll(".watch-video-button.right"),
        playButtonsMobile = document.querySelectorAll(".watch-video-button.mobile"),
        hideWatch = document.querySelector(".watch-modal-close"),
        watchModal = document.querySelector(".watch-modal"),
        watchBody = document.querySelector("body"),
        youTubeIframe = document.querySelector(".watch-video iframe");

    let openWatchModalLeft = (videoIndex) => {
        let youTubeLinksLeft = [
            "https://www.youtube.com/embed/s3vjgaN2Tb0",
            "https://www.youtube.com/embed/quBIbafdSRQ",
            "https://www.youtube.com/embed/cMoeVdXv93k"
        ];

        youTubeIframe.setAttribute("src", youTubeLinksLeft[videoIndex]);
        watchModal.classList.add("open");
        watchBody.classList.add("open");
    }

    let openWatchModalRight = (videoIndex) => {
        let youTubeLinksRight = [
            "https://www.youtube.com/embed/Usllgw9G2tU",
            "https://www.youtube.com/embed/Epvj_qma2VM",
            "https://www.youtube.com/embed/zN23rMWLirs"
        ];

        youTubeIframe.setAttribute("src", youTubeLinksRight[videoIndex]);
        watchModal.classList.add("open");
        watchBody.classList.add("open");
    }

    let openWatchModalMobile = (videoIndex) => {
        let youTubeLinksMobile = [
            "https://www.youtube.com/embed/s3vjgaN2Tb0",
            "https://www.youtube.com/embed/Usllgw9G2tU",
            "https://www.youtube.com/embed/quBIbafdSRQ",
            "https://www.youtube.com/embed/Epvj_qma2VM",
            "https://www.youtube.com/embed/cMoeVdXv93k",
            "https://www.youtube.com/embed/zN23rMWLirs"
        ];

        youTubeIframe.setAttribute("src", youTubeLinksMobile[videoIndex]);
        watchModal.classList.add("open");
        watchBody.classList.add("open");
    }

    let closeWatchModal = () => {
        watchModal.classList.remove("open");
        watchBody.classList.remove("open");
        youTubeIframe.setAttribute("src", "");
    }

    let addEventListenersWatch = () => {
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
}

export { videoModal };