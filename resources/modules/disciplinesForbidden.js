let disciplinesToggleForbidden = () => {
    let heading = document.querySelectorAll(".forbidden"),
        list = document.querySelectorAll(".minus");

    for (let i=0; i<heading.length; i++) {
        heading[i].addEventListener("click", () => {
            list[i].classList.toggle("open");
        });
    }
}

export { disciplinesToggleForbidden };