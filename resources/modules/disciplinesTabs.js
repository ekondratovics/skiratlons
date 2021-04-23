let disciplinesSwitchTabs = () => {
    let disciplineTab = document.getElementsByClassName("tabs-button"),
        disciplineContent = document.getElementsByClassName("disciplines");
    
    let disciplineTabAddEventListener = (active, inactive) => {
        disciplineTab[active].addEventListener("click", () => {
            if (!disciplineTab[active].classList.contains("active")) {
                let toggleActive = (target) => {
                    target[active].classList.add("active");
                    target[inactive].classList.remove("active");
                };
                toggleActive(disciplineTab);
                toggleActive(disciplineContent);
            }
        });
    }

    disciplineTabAddEventListener(0, 1);
    disciplineTabAddEventListener(1, 0);
}

export { disciplinesSwitchTabs };