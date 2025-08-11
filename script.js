// Your images array with metadata
const images = [
  {
    src: "birds1.jpg",
    category: "birds",
    tags: ["eagle", "flying", "nature"],
  },
  {
    src: "birds2.jpg",
    category: "birds",
    tags: ["parrot", "colorful", "forest"],
  },
  {
    src: "landscape1.jpg",
    category: "landscape",
    tags: ["mountains", "sunset", "nature"],
  },
  {
    src: "landscape2.jpg",
    category: "landscape",
    tags: ["river", "forest", "morning"],
  },
  {
    src: "wildlife1.jpg",
    category: "wildlife",
    tags: ["lion", "safari", "africa"],
  },
];

// Get references
const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-buttons button");

let currentFilter = "all";

// Render gallery based on filter and search
function renderGallery() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  gallery.innerHTML = "";

  const filtered = images.filter(({ src, category, tags }) => {
    if (currentFilter !== "all" && category !== currentFilter) return false;
    if (searchTerm === "") return true;
    if (src.toLowerCase().includes(searchTerm)) return true;
    return tags.some((tag) => tag.toLowerCase().includes(searchTerm));
  });

  filtered.forEach(({ src, category, tags }) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = `images/${src}`;
    img.loading = "lazy";
    img.alt = `${category} - ${tags.join(", ")}`;
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => openLightbox(`images/${src}`));
    figure.appendChild(img);
    gallery.appendChild(figure);
  });
}

// Filter buttons event
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderGallery();
  });
});

// Search input event
searchInput.addEventListener("input", renderGallery);

// Lightbox
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
  if (e.target === lightbox) lightbox.style.display = "none";
});

// Initial render
renderGallery();

