let disciplinesSwitchTabs = () => {
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

export { disciplinesSwitchTabs };