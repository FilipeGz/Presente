const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Isso aqui é um vale pra sair cmg e tu ainda vai gahar vários beijos e chocolate 😘";
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "Aperta em sim logo vai sua besta 🙄";
});
