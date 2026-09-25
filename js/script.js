const sidebar = document.querySelector("[data-sidebar]");
const sidebarButton = document.querySelector("[data-sidebar-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectFilter = document.querySelector("#project-filter");
const projectCards = document.querySelectorAll(".project-card");
const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

function showPage(pageName) {
  pages.forEach((page) => {
    page.classList.toggle("active", page.dataset.page === pageName);
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.navLink === pageName);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => showPage(link.dataset.navLink));
});

if (sidebarButton) {
  sidebarButton.addEventListener("click", () => {
    const expanded = sidebar.dataset.expanded === "true";
    sidebar.dataset.expanded = String(!expanded);
    sidebarButton.setAttribute("aria-expanded", String(!expanded));
    sidebarButton.querySelector("span:first-child").textContent = expanded
      ? "Show Contacts"
      : "Hide Contacts";
  });
}

function setProjectFilter(filter) {
  filterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });

  projectCards.forEach((card) => {
    const shouldShow = filter === "all" || card.dataset.category === filter;
    card.classList.toggle("hidden", !shouldShow);
  });

  if (projectFilter.value !== filter) {
    projectFilter.value = filter;
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () =>
    setProjectFilter(button.dataset.filter),
  );
});

if (projectFilter) {
  projectFilter.addEventListener("change", (event) =>
    setProjectFilter(event.target.value),
  );
}

if (contactForm) {
  const emailFallback = document.querySelector("#form-email-fallback");
  const submitButton = contactForm.querySelector('button[type="submit"]');

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    submitButton.disabled = true;
    emailFallback.hidden = true;
    formNote.textContent = "Sending your message…";

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/sadikbaba360@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _replyto: email,
            _subject: `Portfolio message from ${name}`,
          }),
        },
      );
      const result = await response.json();

      if (
        !response.ok ||
        result.success === false ||
        result.success === "false"
      ) {
        throw new Error("Form submission failed");
      }

      formNote.textContent =
        "Your message was sent successfully. Thanks for reaching out.";
      contactForm.reset();
    } catch {
      formNote.textContent =
        "We couldn’t send your message. Please try again or email me directly.";
      emailFallback.hidden = false;
    } finally {
      submitButton.disabled = false;
    }
  });
}
