const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentIndex = 0;
let interval;

// Função para mostrar slide atual
function showSlide(index) {
  const slideWidth = slides[0].clientWidth;
  document.querySelector(".slides").style.transform = `translateX(-${
    index * slideWidth
  }px)`;
}

// Próximo slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Slide anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Iniciar rotação automática
function startAutoSlide() {
  interval = setInterval(nextSlide, 6000); // troca a cada 6 segundos
}

// Parar rotação automática
function stopAutoSlide() {
  clearInterval(interval);
}

// Eventos das setas
nextBtn.addEventListener("click", () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide(); // reinicia a rotação
});

prevBtn.addEventListener("click", () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide(); // reinicia a rotação
});

// Iniciar
showSlide(currentIndex);
startAutoSlide();
