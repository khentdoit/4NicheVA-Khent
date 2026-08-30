// Shared interactions for every page.
const menuButton = document.querySelector(".menu");
const navigation = document.querySelector(".navlinks");
const themeButton = document.querySelector("#theme-toggle");

menuButton?.addEventListener("click", () => {
  navigation?.classList.toggle("open");
});

document.querySelectorAll(".navlinks a").forEach((link) => {
  link.addEventListener("click", () => navigation?.classList.remove("open"));
});

// Keep the visitor's light/dark preference when they move between pages.
if (localStorage.getItem("khent-theme") === "dark") {
  document.body.classList.add("dark");
}

themeButton?.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("khent-theme", isDark ? "dark" : "light");
  themeButton.textContent = isDark ? "☀" : "◐";
});

// Reveal project cards as they enter the viewport.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

// Add a light, page-wide layer of floating dust/leaves for background motion.
const ambientSymbols = ["✦", "·", "◌", "❧"];
const ambientLayer = document.createElement("div");
ambientLayer.className = "ambient-layer";
ambientLayer.setAttribute("aria-hidden", "true");

for (let index = 0; index < 14; index += 1) {
  const particle = document.createElement("span");
  particle.className = "ambient-particle";
  particle.textContent = ambientSymbols[index % ambientSymbols.length];
  particle.style.setProperty("--x", `${8 + ((index * 37) % 88)}%`);
  particle.style.setProperty("--y", `${78 + ((index * 19) % 22)}%`);
  particle.style.setProperty("--drift", `${-35 + ((index * 17) % 80)}px`);
  particle.style.setProperty("--size", `${0.55 + (index % 4) * 0.18}rem`);
  particle.style.setProperty("--duration", `${8 + (index % 5) * 2}s`);
  particle.style.setProperty("--delay", `${(index % 7) * 0.8}s`);
  particle.style.setProperty("--blur", `${index % 3 === 0 ? 1 : 0}px`);
  particle.style.setProperty(
    "--particle-color",
    index % 3 === 0 ? "var(--cyan)" : "var(--orange)",
  );
  ambientLayer.appendChild(particle);
}

document.body.appendChild(ambientLayer);

const orbitWidget = document.createElement("div");
orbitWidget.className = "ambient-orbit";
orbitWidget.textContent = "✦";
orbitWidget.setAttribute("aria-hidden", "true");
document.body.appendChild(orbitWidget);

// The static contact form opens a prepared Gmail message.
const contactForm = document.querySelector("#contact-form");
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const message = document.querySelector("#message").value.trim();
  const note = document.querySelector("#form-note");
  const subject = encodeURIComponent("Portfolio enquiry for Khent");
  const body = encodeURIComponent(`Name: ${name}\n\n${message}`);

  note.textContent = `Thanks${name ? `, ${name}` : ""} — your email app will open with a prepared message.`;
  window.location.href = `mailto:khentdoit@gmail.com?subject=${subject}&body=${body}`;
});

// Generic sample-preview lightbox, shared by every project-sample page.
// Any element with [data-preview] opens it; data-preview-type is "image" | "table" | "text".
const lightbox = document.querySelector("#lightbox");
const lightboxBody = document.querySelector("#lightbox-body");
const lightboxCap = document.querySelector("#lightbox-cap");

document.querySelectorAll("[data-preview]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    if (event.target.closest("a, button.file-cta")) return; // let download/buy links behave normally
    if (!lightbox || !lightboxBody) return;
    const type = trigger.dataset.previewType;
    const caption = trigger.dataset.previewCap || "";

    if (type === "image") {
      lightboxBody.innerHTML = `<img src="${trigger.dataset.previewSrc}" alt="${caption}">`;
    } else if (type === "table") {
      const rows = JSON.parse(trigger.dataset.previewRows || "[]");
      const head = rows[0] ? `<tr>${rows[0].map((c) => `<th>${c}</th>`).join("")}</tr>` : "";
      const body = rows.slice(1).map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("");
      lightboxBody.innerHTML = `<table class="preview-table">${head}${body}</table>`;
    } else {
      lightboxBody.innerHTML = `<div class="preview-text">${(trigger.dataset.previewText || "").replace(/\n/g, "<br>")}</div>`;
    }
    lightboxCap.textContent = caption;
    lightbox.classList.add("open");
  });
});

document.querySelector("#lightbox-close")?.addEventListener("click", () => lightbox?.classList.remove("open"));
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.classList.remove("open");
});