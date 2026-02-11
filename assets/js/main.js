// Pre loader
window.addEventListener("load", function () {
  const preloader = document.getElementById("pre-load");

  setTimeout(() => {
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }, 1500);
});

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".mobile-close");

menuToggle.addEventListener("click", () => {
  mobileMenu.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  document.body.style.overflow = "";
});

mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.style.display = "none";
    document.body.style.overflow = "";
  }
});


// OLS Service Toggle 
const buttons = document.querySelectorAll(".ols-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    const content = btn.nextElementSibling;

    document.querySelectorAll(".ols-item").forEach((other) => {
      if (other !== item) {
        other.classList.remove("active");
        other.querySelector(".ols-content").style.maxHeight = null;
      }
    });

    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});

// Horizontal Scroller 
function scrollImages(button, direction) {
  const scroller = button.parentElement.querySelector('.amc-scroller');
  const scrollAmount = 350;
  scroller.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}

// Bar animation - DPR Section
const bars = document.querySelectorAll(".bar-fill");

const animateBars = () => {
  bars.forEach(bar => {
    bar.style.width = bar.dataset.value + "%";
  });
};

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    animateBars();
    observer.disconnect();
  }
}, { threshold: 0.4 });

observer.observe(document.querySelector(".dpr-metrics"));

// Switch Tabs - Project Section
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});
