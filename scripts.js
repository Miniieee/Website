(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("nav-open", isOpen);
    });

    navLinks.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
      }
    });
  }

  class Slideshow {
    constructor(root) {
      this.root = root;
      this.slides = Array.from(root.querySelectorAll(".slide"));
      this.prevButton = root.querySelector("[data-slide-prev]");
      this.nextButton = root.querySelector("[data-slide-next]");
      this.dotsContainer = root.querySelector("[data-slide-dots]");
      this.emptyMessage = root.querySelector(".empty-slideshow");
      this.index = 0;
      this.timer = null;
      this.interval = Number(root.dataset.interval) || 5000;
      this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      this.init();
    }

    init() {
      if (this.slides.length === 0) {
        this.setEmptyState();
        return;
      }

      this.buildDots();
      this.bindEvents();
      this.show(0);

      if (!this.reducedMotion && this.slides.length > 1) {
        this.start();
      }
    }

    setEmptyState() {
      if (this.prevButton) this.prevButton.hidden = true;
      if (this.nextButton) this.nextButton.hidden = true;
      if (this.dotsContainer) this.dotsContainer.hidden = true;
      if (this.emptyMessage) this.emptyMessage.hidden = false;
    }

    buildDots() {
      if (!this.dotsContainer) return;

      this.dotsContainer.innerHTML = "";
      this.dots = this.slides.map((slide, slideIndex) => {
        const button = document.createElement("button");
        const image = slide.querySelector("img");
        button.type = "button";
        button.className = "slide-dot";
        button.setAttribute("aria-label", `Show ${image ? image.alt : "Immersify image"} ${slideIndex + 1}`);
        button.addEventListener("click", () => {
          this.show(slideIndex);
          this.restart();
        });
        this.dotsContainer.appendChild(button);
        return button;
      });
    }

    bindEvents() {
      if (this.prevButton) {
        this.prevButton.addEventListener("click", () => {
          this.previous();
          this.restart();
        });
      }

      if (this.nextButton) {
        this.nextButton.addEventListener("click", () => {
          this.next();
          this.restart();
        });
      }

      this.root.addEventListener("mouseenter", () => this.stop());
      this.root.addEventListener("mouseleave", () => this.start());
      this.root.addEventListener("focusin", () => this.stop());
      this.root.addEventListener("focusout", () => this.start());

      this.root.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          this.previous();
          this.restart();
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();
          this.next();
          this.restart();
        }
      });
    }

    show(nextIndex) {
      this.index = (nextIndex + this.slides.length) % this.slides.length;

      this.slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === this.index;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
      });

      if (this.dots) {
        this.dots.forEach((dot, dotIndex) => {
          dot.setAttribute("aria-current", String(dotIndex === this.index));
        });
      }
    }

    next() {
      this.show(this.index + 1);
    }

    previous() {
      this.show(this.index - 1);
    }

    start() {
      if (this.reducedMotion || this.slides.length <= 1 || this.timer) return;
      this.timer = window.setInterval(() => this.next(), this.interval);
    }

    stop() {
      window.clearInterval(this.timer);
      this.timer = null;
    }

    restart() {
      this.stop();
      this.start();
    }
  }

  document.querySelectorAll("[data-slideshow]").forEach((root) => new Slideshow(root));
})();
