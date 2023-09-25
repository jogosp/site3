// Função para mostrar mensagem quando o botão é clicado
let contadorMensagens = 0;

document.getElementById("mostrarMensagem").addEventListener("click", function () {
    contadorMensagens++;
    document.getElementById("mensagem").textContent = "Esta mensagem estava escondida";
    document.getElementById("contadorMensagens").textContent = `O botão foi clicado ${contadorMensagens} vezes.`;
});

// Carrossel de imagens
let currentIndex = 0;
const imageNames = ["imagem1.png", "imagem2.png", "imagem3.png"];
const maxIndex = imageNames.length - 1;

function updateCarousel() {
    const images = document.querySelectorAll(".carousel img");
    images.forEach((img, index) => {
        img.src = imageNames[(currentIndex + index) % imageNames.length];
    });
}

function nextImage() {
    currentIndex = (currentIndex === maxIndex) ? 0 : currentIndex + 1;
    updateCarousel();
}

function previousImage() {
    currentIndex = (currentIndex === 0) ? maxIndex : currentIndex - 1;
    updateCarousel();
}

setInterval(nextImage, 3000); // Trocar a imagem a cada 3 segundos

// Função para esconder/mostrar o carrossel
const carrossel = document.querySelector(".carousel");
const esconderMostrarBtn = document.getElementById("esconderMostrar");
let carrosselVisivel = true;

esconderMostrarBtn.addEventListener("click", function () {
    carrossel.style.display = carrosselVisivel ? "none" : "block";
    carrosselVisivel = !carrosselVisivel;
});

// Função para alternar entre temas (estilos de página)
const header = document.querySelector("header");
let temaClaro = true;

document.getElementById("alterarTema").addEventListener("click", function () {
    if (temaClaro) {
        header.style.backgroundColor = "#111";
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "#fff";
    } else {
        header.style.backgroundColor = "#333";
        document.body.style.backgroundColor = "#f0f0f0";
        document.body.style.color = "#000";
    }
    temaClaro = !temaClaro;
});

// Função para mostrar a caixa de diálogo modal
const modal = document.getElementById("myModal");
const mostrarModalBtn = document.getElementById("mostrarModal");
const fecharModalSpan = document.getElementsByClassName("fecharModal")[0];

mostrarModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

fecharModalSpan.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
