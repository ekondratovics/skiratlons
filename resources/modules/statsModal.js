let statsModal = () => {
    let showStats = document.querySelector(".show-stats"),
        hideStats = document.querySelector(".stats-modal-close"),
        statsModal = document.querySelector(".stats-modal"),
        statsBody = document.querySelector("body");

    let openStatsModal = () => {
        statsModal.classList.add("open");
        statsBody.classList.add("open");
    }

    let closeStatsModal = () => {
        statsModal.classList.remove("open");
        statsBody.classList.remove("open");
    }

    showStats.addEventListener("click", openStatsModal);

    hideStats.addEventListener("click", closeStatsModal);
    statsModal.addEventListener("click", closeStatsModal);
}

export { statsModal };