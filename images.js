// Your image filenames here (in /images folder)
const images = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg"
];

const gallery = document.getElementById("gallery");

// Inject images into the gallery
images.forEach(src => {
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = `images/${src}`;
  img.loading = "lazy"; // Lazy load
  img.alt = "Photography image";
  img.addEventListener("click", () => openLightbox(`images/${src}`));
  figure.appendChild(img);
  gallery.appendChild(figure);
});

// Lightbox logic
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

function openLightbox(src) {
  lightbox.style.display = "flex";
  lightboxImg.src = src;
}

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});
