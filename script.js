const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const cadastroLink = document.querySelector(".cadastro-link");
const recuperacaoLink = document.querySelector(".recupera-link");
const termoseServicos = document.querySelector(".termos-servico-link");
const criarConta = document.querySelector(".criar-conta");
const btnPopup = document.querySelector(".login-popup");
const iconClose = document.querySelector(".icon-close");
const backLogin = document.querySelector(".back-login");
const backLoginCadastro = document.querySelector(".back-login-cadastro");
const desfoqueHome = document.querySelector(".home");
const btnDarkMode = document.querySelector("#darkmode-btn");
const bodyhtml = document.querySelector(".home");
const divLogin = document.querySelector("#loginPopUp");
let darkModeOnFalse = false;

cadastroLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});
loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active-popup-recup");
});
recuperacaoLink.addEventListener("click", () => {
  wrapper.classList.add("active-popup-recup");
});
termoseServicos.addEventListener("click", () => {
  wrapper.classList.add("active-termos-servicos");
});
termoseServicos.addEventListener("click", () => {
  wrapper.classList.remove("active-popup-recup");
});
termoseServicos.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
  desfoqueHome.style.backdropFilter = "none";
});
iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active");
  desfoqueHome.style.backdropFilter = "none";
});
iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup-recup");
  desfoqueHome.style.backdropFilter = "none";
});
iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-termos-servicos");
  desfoqueHome.style.backdropFilter = "none";
});

backLogin.addEventListener("click", () => {
  wrapper.classList.remove("active-popup-recup");
});
backLogin.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

backLoginCadastro.addEventListener("click", () => {
  wrapper.classList.remove("active-termos-servicos");
});
backLoginCadastro.addEventListener("click", () => {
  wrapper.classList.add("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
  desfoqueHome.style.backdropFilter = "brightness(60%)";
});

criarConta.addEventListener("click", () => {
  wrapper.classList.add("active");
  desfoqueHome.style.backdropFilter = "brightness(60%)";
});

btnDarkMode.addEventListener("click",()=>{
  if(darkModeOnFalse === false){
    divLogin.classList.add("dark-mode")
    btnDarkMode.classList.remove("dark-mode-off");
    btnDarkMode.classList.add("dark-mode-on");
    bodyhtml.classList.add("dark-mode");
    darkModeOnFalse = true;
  }else{
    bodyhtml.classList.remove("dark-mode");
    divLogin.classList.remove("dark-mode")
    btnDarkMode.classList.remove("dark-mode-on");
    btnDarkMode.classList.add("dark-mode-off");
    darkModeOnFalse = false;
  }
})