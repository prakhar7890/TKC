const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector(".site-header");
const themeToggle = document.querySelector(".theme-toggle");

const applyTheme = (mode) => {
    const isDark = mode === "dark";
    document.body.classList.toggle("dark-mode", isDark);

    if (themeToggle) {
        themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
        themeToggle.setAttribute("aria-pressed", String(isDark));
    }
};

const savedTheme = window.localStorage.getItem("tkc-theme");
applyTheme(savedTheme === "light" ? "light" : "dark");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
        applyTheme(nextTheme);
        window.localStorage.setItem("tkc-theme", nextTheme);
    });
}

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
        document.body.classList.toggle("nav-open", isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
            document.body.classList.remove("nav-open");
        });
    });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}

window.addEventListener("scroll", () => {
    if (!header) {
        return;
    }

    header.style.transform = window.scrollY > 16 ? "translateY(0)" : "";
});
