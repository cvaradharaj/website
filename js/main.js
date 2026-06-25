const SELECTORS = {
  menuButton: ".menu-btn",
  navLinks: ".nav-links",
  navAnchors: ".nav-links a",
  reveal: ".reveal",
  counters: ".count-up",
  cursorGlow: ".cursor-glow",
  sections: "main section[id], section#contact"
};

function setupMenu() {
  const button = document.querySelector(SELECTORS.menuButton);
  const navLinks = document.querySelector(SELECTORS.navLinks);

  if (!button || !navLinks) {
    return;
  }

  button.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(SELECTORS.navAnchors).forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    });
  });
}

function setupSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") {
        return;
      }

      const target = document.querySelector(href);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setupReveal() {
  const revealElements = document.querySelectorAll(SELECTORS.reveal);
  if (!revealElements.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, revealObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function animateCount(counter) {
  const target = Number(counter.dataset.target);
  if (!Number.isFinite(target)) {
    return;
  }

  const duration = 1300;
  const decimals = Number.isInteger(target) ? 0 : 2;
  const start = performance.now();

  function frame(time) {
    const progress = Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    counter.textContent = (target * eased).toFixed(decimals);

    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
}

function setupCounters() {
  const counters = document.querySelectorAll(SELECTORS.counters);
  if (!counters.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, countObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.45 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function setupActiveNavTracking() {
  const navAnchors = [...document.querySelectorAll(SELECTORS.navAnchors)];
  const sections = [...document.querySelectorAll(SELECTORS.sections)];

  if (!navAnchors.length || !sections.length) {
    return;
  }

  const navById = new Map();
  navAnchors.forEach((anchor) => {
    const href = anchor.getAttribute("href") || "";
    if (href.startsWith("#")) {
      navById.set(href.slice(1), anchor);
    }
  });

  function setActive(id) {
    navAnchors.forEach((anchor) => anchor.removeAttribute("data-active"));
    const active = navById.get(id);
    if (active) {
      active.setAttribute("data-active", "true");
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible[0]?.target?.id) {
        setActive(visible[0].target.id);
      }
    },
    {
      threshold: [0.25, 0.45, 0.65],
      rootMargin: "-20% 0px -45% 0px"
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupCursorGlow() {
  const glow = document.querySelector(SELECTORS.cursorGlow);
  if (!glow || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let raf = 0;
  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;

  function render() {
    glow.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    raf = 0;
  }

  window.addEventListener("pointermove", (event) => {
    currentX = event.clientX;
    currentY = event.clientY;
    if (!raf) {
      raf = requestAnimationFrame(render);
    }
  });
}

function init() {
  setupMenu();
  setupSmoothAnchors();
  setupReveal();
  setupCounters();
  setupActiveNavTracking();
  setupCursorGlow();
}

document.addEventListener("DOMContentLoaded", init);
