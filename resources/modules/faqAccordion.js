let faqAccordize = () => {
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

export { faqAccordize };