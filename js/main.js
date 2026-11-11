// Date et heure du départ (heure de Paris, UTC+1 en février)
const RACE_START = new Date("2027-02-06T09:00:00+01:00");

function updateCountdown() {
  const el = document.getElementById("countdown");
  if (!el) return;
  const diff = RACE_START - new Date();
  if (diff <= 0) {
    el.innerHTML = "<div><strong>GO</strong><span>C'est parti !</span></div>";
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  el.querySelector("[data-d]").textContent = d;
  el.querySelector("[data-h]").textContent = String(h).padStart(2, "0");
  el.querySelector("[data-m]").textContent = String(m).padStart(2, "0");
  el.querySelector("[data-s]").textContent = String(s).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Menu mobile
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav ul");
toggle?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
menu?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => menu.classList.remove("open"))
);
