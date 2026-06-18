function scrollToSection() {
  document.getElementById("participar").scrollIntoView({
    behavior: "smooth"
  });
}

function enviarFormulario() {
  document.getElementById("resposta").innerHTML =
    "Obrigado! A tua inscrição de teste foi registada.";
}