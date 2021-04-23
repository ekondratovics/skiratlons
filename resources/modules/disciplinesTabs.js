let disciplinesSwitchTabs = () => {
    let tabs = document.querySelectorAll(".tabs-button"),
        content = document.getElementsByClassName("disciplines");
    
    let tabsAddEventListener = (active, inactive) => {
        tabs[active].addEventListener("click", () => {
            if (!tabs[active].classList.contains("active")) {
                let toggleActive = (target) => {
                    target[active].classList.add("active");
                    target[inactive].classList.remove("active");
                };
                toggleActive(tabs);
                toggleActive(content);
            }
        });
    }

    tabsAddEventListener(0, 1);
    tabsAddEventListener(1, 0);
}

export { disciplinesSwitchTabs };