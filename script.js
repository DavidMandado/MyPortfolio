const SELECTORS = {
  nav: "[data-nav]",
  menuToggle: "[data-menu-toggle]",
  navLinks: ".nav-link",
  themeToggle: "[data-theme-toggle]",
  filterTabs: ".filter-tab",
  projectCards: ".project-card",
  reveal: "[data-reveal]",
  toast: "[data-toast]",
};

const EMAIL = "david.manda.loureiro@gmail.com";

const projectDetails = {
  crime: {
    kicker: "Data science dashboard",
    title: "Addressing Real-World Crime and Security Problems with Data Science",
    period: "Feb 2025 - May 2025",
    focus: "Forecasting, geospatial analytics, stakeholder dashboard",
    image: "assets/images/abciamge.jpg",
    imageAlt: "Crime and security data science project image",
    description:
      "A data science project that combines large-scale crime records, socio-economic data, and geographic boundaries into forecasting models and an interactive mapping dashboard.",
    stack: [
      "Python",
      "pandas",
      "NumPy",
      "scikit-learn",
      "LightGBM",
      "TensorFlow/Keras",
      "GeoPandas",
      "Flask/Dash",
      "SQL",
      "Git/GitHub",
    ],
    sections: [
      {
        title: "What the project does",
        body:
          "The project processes monthly crime records, socio-economic deciles, and GeoJSON boundaries to create spatial and temporal features for analysis. The output is designed for both modeling work and a dashboard/mapping interface that can communicate patterns clearly.",
        bullets: [
          "Processed and integrated 900K+ monthly crime records.",
          "Engineered temporal and spatial features from crime and geographic data.",
          "Built forecasting models and delivered an interactive dashboard and mapping tool.",
        ],
      },
      {
        title: "Content you can add here",
        body:
          "This expanded case-study modal is built to hold long explanations, methodology notes, screenshots, diagrams, links, and final GitHub references without feeling cramped.",
        bullets: [
          "Replace the image blocks below with dashboard screenshots or maps.",
          "Add model results, validation metrics, data-source notes, or architecture diagrams.",
          "Use the GitHub button for the repository once the project is public.",
        ],
      },
    ],
    gallery: [
      "assets/images/abciamge.jpg",
      "assets/images/work/portfolio-template.webp",
      "assets/images/work/contribute-dev.webp",
    ],
    link: "https://github.com/DavidMandado",
  },
  xray: {
    kicker: "Deep learning",
    title: "University Data Challenge - X-ray ML Model",
    period: "Feb 2025 - Apr 2025",
    focus: "Medical imaging, preprocessing, multi-class classification",
    image: "assets/images/work/agency-elevation.webp",
    imageAlt: "X-ray machine learning project image",
    description:
      "A deep learning diagnostic model for chest X-ray analysis with an integrated preprocessing and augmentation pipeline.",
    stack: [
      "Python",
      "PyTorch",
      "scikit-learn",
      "OpenCV",
      "pandas",
      "NumPy",
      "Docker",
      "Jupyter",
      "Git/GitHub",
    ],
    sections: [
      {
        title: "What the project does",
        body:
          "The project builds a medical image classification workflow around chest X-ray data, including preprocessing, augmentation, model training, and model evaluation.",
        bullets: [
          "Developed a deep learning diagnostic model for chest X-ray analysis.",
          "Integrated preprocessing and augmentation into the modeling pipeline.",
          "Evaluated performance while balancing efficiency, ethics, and multi-class disease prediction requirements.",
        ],
      },
      {
        title: "Content you can add here",
        body:
          "This view can support example scans, preprocessing comparisons, confusion matrices, training curves, ethical considerations, and deployment notes.",
        bullets: [
          "Add before/after preprocessing examples.",
          "Add metrics, model architecture, or training curves.",
          "Link to notebooks, Docker files, and the final GitHub repository.",
        ],
      },
    ],
    gallery: [
      "assets/images/work/agency-elevation.webp",
      "assets/images/work/portfolio-template.webp",
      "assets/images/work/contribute-dev.webp",
    ],
    link: "https://github.com/DavidMandado",
  },
  airline: {
    kicker: "NLP analytics",
    title: "University Airline Twitter Analysis",
    period: "Feb 2024 - Apr 2024",
    focus: "NLP, sentiment analysis, customer support insights",
    image: "assets/images/work/contribute-dev.webp",
    imageAlt: "Airline Twitter sentiment analysis project image",
    description:
      "An NLP analytics project that cleans multilingual airline tweets, stores processed data, and performs sentiment analysis to evaluate customer-support performance.",
    stack: [
      "Python",
      "pandas",
      "SQL",
      "SQLite",
      "NLTK",
      "spaCy",
      "VADER",
      "scikit-learn",
      "matplotlib",
      "Jupyter",
    ],
    sections: [
      {
        title: "What the project does",
        body:
          "The project analyzes Air France tweets from regional accounts, standardizes multilingual text, stores processed records, and extracts sentiment signals for service-performance analysis.",
        bullets: [
          "Analyzed millions of Air France tweets from regional accounts.",
          "Cleaned multilingual text and standardized data for downstream analysis.",
          "Stored processed data in SQLite and performed sentiment analysis to extract customer insights.",
        ],
      },
      {
        title: "Content you can add here",
        body:
          "The expanded layout can hold dataset notes, cleaning decisions, sentiment examples, plots, and comparisons across accounts or time periods.",
        bullets: [
          "Add charts for sentiment distribution and topic patterns.",
          "Add examples of preprocessing and tokenization choices.",
          "Link to the repository, notebook, or final report.",
        ],
      },
    ],
    gallery: [
      "assets/images/work/contribute-dev.webp",
      "assets/images/work/portfolio-template.webp",
      "assets/images/abciamge.jpg",
    ],
    link: "https://github.com/DavidMandado",
  },
};

const nav = document.querySelector(SELECTORS.nav);
const menuToggle = document.querySelector(SELECTORS.menuToggle);
const navLinks = [...document.querySelectorAll(SELECTORS.navLinks)];
const themeToggle = document.querySelector(SELECTORS.themeToggle);
const toast = document.querySelector(SELECTORS.toast);

const showToast = (message) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
};

const closeMenu = () => {
  nav?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
};

menuToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  document.body.classList.toggle("menu-open", Boolean(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const updateThemeButton = () => {
  const theme = document.documentElement.dataset.theme || "light";
  themeToggle?.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light theme" : "Switch to blue dark theme"
  );
};

themeToggle?.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme || "light";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("portfolio-theme", next);
  updateThemeButton();
});

updateThemeButton();

const filterTabs = [...document.querySelectorAll(SELECTORS.filterTabs)];
const projectCards = [...document.querySelectorAll(SELECTORS.projectCards)];

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter || "all";

    filterTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    projectCards.forEach((card) => {
      const categories = card.dataset.category || "";
      const shouldShow = filter === "all" || categories.includes(filter);
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

const openDialog = (dialog) => {
  if (!dialog) return;
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
  document.body.classList.add("modal-open");
};

const closeDialog = (dialog) => {
  if (!dialog) return;
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
  document.body.classList.remove("modal-open");
};

document.querySelectorAll(".modal").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog(dialog);
  });

  dialog.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
  });

  dialog.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", () => closeDialog(dialog));
  });
});

const projectModal = document.querySelector("#project-modal");
const projectKicker = document.querySelector("#project-modal-kicker");
const projectTitle = document.querySelector("#project-modal-title");
const projectDescription = document.querySelector("#project-modal-description");
const projectImage = document.querySelector("#project-modal-image");
const projectPeriod = document.querySelector("#project-modal-period");
const projectFocus = document.querySelector("#project-modal-focus");
const projectStack = document.querySelector("#project-modal-stack");
const projectSections = document.querySelector("#project-modal-sections");
const projectGallery = document.querySelector("#project-modal-gallery");
const projectLink = document.querySelector("#project-modal-link");

document.querySelectorAll("[data-project-open]").forEach((button) => {
  button.addEventListener("click", () => {
    const details = projectDetails[button.dataset.projectOpen];
    if (!details) return;

    projectKicker.textContent = details.kicker;
    projectTitle.textContent = details.title;
    projectDescription.textContent = details.description;
    projectImage.src = details.image;
    projectImage.alt = details.imageAlt;
    projectPeriod.textContent = details.period;
    projectFocus.textContent = details.focus;
    projectLink.href = details.link;

    projectStack.replaceChildren(
      ...details.stack.map((text) => {
        const item = document.createElement("li");
        item.textContent = text;
        return item;
      })
    );

    projectSections.replaceChildren(
      ...details.sections.map((section) => {
        const article = document.createElement("article");
        const heading = document.createElement("h3");
        const body = document.createElement("p");
        const list = document.createElement("ul");

        heading.textContent = section.title;
        body.textContent = section.body;
        list.replaceChildren(
          ...section.bullets.map((text) => {
            const item = document.createElement("li");
            item.textContent = text;
            return item;
          })
        );

        article.append(heading, body, list);
        return article;
      })
    );

    projectGallery.replaceChildren(
      ...details.gallery.map((src, index) => {
        const image = document.createElement("img");
        image.src = src;
        image.alt = `${details.title} supporting image ${index + 1}`;
        return image;
      })
    );

    openDialog(projectModal);
  });
});

const resumeModal = document.querySelector("#resume-modal");
const contactModal = document.querySelector("#contact-modal");

document.querySelectorAll("[data-open-resume]").forEach((button) => {
  button.addEventListener("click", () => {
    closeMenu();
    openDialog(resumeModal);
  });
});

document.querySelectorAll("[data-open-contact]").forEach((button) => {
  button.addEventListener("click", () => {
    closeMenu();
    openDialog(contactModal);
  });
});

document.querySelector("[data-print-resume]")?.addEventListener("click", () => {
  openDialog(resumeModal);
  window.setTimeout(() => window.print(), 120);
});

document.querySelector("[data-copy-email]")?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    showToast("Email copied to clipboard.");
  } catch {
    showToast(EMAIL);
  }
});

document.querySelector("#contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = data.get("name")?.toString().trim() || "Portfolio visitor";
  const replyTo = data.get("email")?.toString().trim() || "";
  const message = data.get("message")?.toString().trim() || "";
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${replyTo}`);

  showToast("Opening your email client.");
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  form.reset();
});

const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    )
  : null;

document.querySelectorAll(SELECTORS.reveal).forEach((element) => {
  if (revealObserver) {
    revealObserver.observe(element);
  } else {
    element.classList.add("is-visible");
  }
});

const sectionObserver = "IntersectionObserver" in window
  ? new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        });
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0.01 }
    )
  : null;

document.querySelectorAll("#about, #projects, #experience, #stack, #interests").forEach((section) => {
  sectionObserver?.observe(section);
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
