document.getElementById("formContato").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Obrigado por entrar em contato.");
    this.reset();
  });
  
  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
  
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementBottom = el.getBoundingClientRect().bottom;
      const isVisible = elementTop < windowHeight && elementBottom > 0;
  
      if (isVisible) {
        el.classList.add("active");
      } else {
        el.classList.remove("active"); // Oculta novamente se sair da tela
      }
    });
  }
  
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
  