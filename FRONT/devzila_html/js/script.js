
// DIMINUIR O MENU QUANDO O USUÁRIO SCROLLA

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    
    if(scrollY>150){
        if (prevScrollpos > currentScrollPos) {
            document.querySelector("header").style.top = "0";
            document.querySelector("header").style.paddingBottom = "3em";
        } else {
            document.querySelector("header").style.top = "-20vh";
            document.querySelector("header").style.paddingBottom = "1em";
        }
        prevScrollpos = currentScrollPos;
    }
}

//MODAL
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});