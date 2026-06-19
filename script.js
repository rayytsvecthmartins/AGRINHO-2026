// ==========================
// AGRINHO 2026 - script.js
// ==========================

// Mensagem de boas-vindas
window.addEventListener("load", () => {
alert("Bem-vindo ao site Agrinho 2026! 🌱");
});

// Animação dos cards ao passar o mouse
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
card.addEventListener("mouseenter", () => {
card.style.transform = "scale(1.05)";
card.style.transition = "0.3s";
});

card.addEventListener("mouseleave", () => {
card.style.transform = "scale(1)";
});
});

// Botão para voltar ao topo
const botaoTopo = document.getElementById("voltarTopo");

if (botaoTopo) {
botaoTopo.addEventListener("click", () => {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});
}

// Validação simples de formulário
const formulario = document.querySelector("form");

if (formulario) {
formulario.addEventListener("submit", (event) => {

const nome = document.getElementById("nome");
const email = document.getElementById("email");

if (!nome.value.trim() || !email.value.trim()) {
event.preventDefault();
alert("Preencha todos os campos antes de enviar.");
return;
}

alert("Mensagem enviada com sucesso! Obrigado por contribuir com um futuro mais sustentável.");
});
}

// Mostrar elementos conforme aparecem na tela
const elementos = document.querySelectorAll(".revelar");

const aparecerNaTela = () => {
elementos.forEach(elemento => {

const topo = elemento.getBoundingClientRect().top;
const alturaTela = window.innerHeight * 0.85;

if (topo < alturaTela) {
elemento.classList.add("ativo");
}
});
};

window.addEventListener("scroll", aparecerNaTela);
aparecerNaTela();

// Botão para mudar o tema do site
const tema = document.getElementById("tema");

if (tema) {
tema.addEventListener("click", () => {
document.body.classList.toggle("modo-escuro");
});
}

// Contador de visitas da sessão
let visitas = sessionStorage.getItem("visitas");

if (!visitas) {
visitas = 1;
} else {
visitas = Number(visitas) + 1;
}

sessionStorage.setItem("visitas", visitas);

const contador = document.getElementById("contadorVisitas");

if (contador) {
contador.textContent = `Visitas nesta sessão: ${visitas}`;
}
