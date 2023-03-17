console.log('mostrar o document', document);

console.log(document.querySelector(".botao-trailer"));

const botaoTrailer = document.querySelector(".botao-trailer");
const linkdovideo = "https://www.youtube.com/embed/Cb4WV4aXBpk"
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector("fechar-modal");


botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto")
    
});


botaoFecharModal.addEventListener("click", () => {

    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});



