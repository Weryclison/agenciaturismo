export default function perguntas() {
  const perguntaLista = document.querySelectorAll("dl dt");

  function esconder() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  perguntaLista.forEach((item) => {
    item.addEventListener("click", esconder);
  });
}
