document.addEventListener("DOMContentLoaded", function () {
    const section = document.getElementById("monitorizare-resurse");
    const images = section.querySelectorAll(".images-container img");
    let currentSlide = 0;
    let slideshowActive = false;
  
    // Asigură-te că imaginile sunt disponibile
    if (images.length === 0) {
      console.error("Nu există imagini pentru slideshow!");
      return;
    }
  
    section.addEventListener("dblclick", function () {
      if (slideshowActive) return; // Previne inițierea repetată
      slideshowActive = true;
  
      setInterval(() => {
        // Ascunde imaginea curentă
        images[currentSlide].style.opacity = 0;
  
        // Trecem la următoarea imagine
        currentSlide = (currentSlide + 1) % images.length;
  
        // Afișăm următoarea imagine
        images[currentSlide].style.opacity = 1;
      }, 3000); // Timp între slide-uri: 3 secunde
    });
  });
  