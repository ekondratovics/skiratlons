let disciplinesToggleForbidden = () => {
    let forbiddenHeading = document.getElementsByClassName("forbidden"),
        forbiddenList = document.getElementsByClassName("minus");

    for (let i=0; i<forbiddenHeading.length; i++) {
        forbiddenHeading[i].addEventListener("click", function() {
            forbiddenList[i].classList.toggle("open");
        });
    }
}

export { disciplinesToggleForbidden };