let faqAccordize = () => {
    let headings = document.querySelectorAll(".question"),
        buttons = document.querySelectorAll(".faq-button");

    let removeOpen = (index) => {
        headings[index].classList.remove("open");
        buttons[index].classList.remove("open");
    }
    
    let toggleOpen = (index) => {
        headings[index].classList.toggle("open");
        buttons[index].classList.toggle("open");
    }
    
    let listenTo = (target) => {
        target.forEach((item) => {
            item.addEventListener("click", function () {
                headings.forEach((item2, index) => {
                    if (item2 !== this) {
                        removeOpen(index);
                    } else {
                        toggleOpen(index);
                    }
                });
            });
        });
    }

    listenTo(buttons);
    listenTo(headings);
}
      
export { faqAccordize };