// ===== MOBILE NAVBAR =====

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector(".site-header");

// Mobile menu open / close
menuToggle.addEventListener("click", () => {
  const isOpen =
    menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isOpen));

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Open menu" : "Close menu"
  );

  navLinks.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

// Link click hone par menu band
function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");

  navLinks.classList.remove("open");
  document.body.classList.remove("menu-open");
}

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Desktop screen par resize hone par menu reset
window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    closeMenu();
  }
});


// ===== STICKY NAVBAR =====

function updateHeader() {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateHeader, {
  passive: true
});

updateHeader();


// ===== SCROLL REVEAL ANIMATION =====

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("is-visible");

          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    }
  );

  revealElements.forEach((element, index) => {

    element.style.transitionDelay =
      `${(index % 3) * 80}ms`;

    revealObserver.observe(element);

  });

} else {

  // Older browsers ke liye fallback
  revealElements.forEach((element) => {
    element.classList.add("is-visible");
  });

}


// ===== TESTIMONIAL SLIDER =====

const testimonials = [
  {
    quote:
      "Words cannot describe how wonderful the experience has been. The creative ideas and thoughtful details helped create a beautiful dream home.",

    credit: "A D FOR DESIGN CLIENT"
  },

  {
    quote:
      "With flair, passion and dedication, the space was transformed into a beautiful home that feels welcoming and timeless.",

    credit: "A D FOR DESIGN CLIENT"
  },

  {
    quote:
      "From the initial consultation, the experience felt professional, personal and full of creative ideas.",

    credit: "A D FOR DESIGN CLIENT"
  }
];

const testimonialText =
  document.querySelector("#testimonial-text");

const testimonialCredit =
  document.querySelector("#testimonial-credit");

const quoteDots =
  document.querySelectorAll(".quote-dot");


quoteDots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    // Purana text fade out
    testimonialText.style.opacity = "0";
    testimonialCredit.style.opacity = "0";

    window.setTimeout(() => {

      testimonialText.textContent =
        testimonials[index].quote;

      testimonialCredit.textContent =
        testimonials[index].credit;

      // Naya text fade in
      testimonialText.style.opacity = "1";
      testimonialCredit.style.opacity = "1";

    }, 180);

    // Active dot update
    quoteDots.forEach((item) => {
      item.classList.remove("active");
    });

    dot.classList.add("active");

  });

});


// ===== NEWSLETTER FORM =====

const newsletterForm =
  document.querySelector("#newsletter-form");

const emailInput =
  document.querySelector("#email");

const formMessage =
  document.querySelector("#form-message");


newsletterForm.addEventListener("submit", (event) => {

  // Page reload hone se rokna
  event.preventDefault();

  // Email validation
  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }

  // Demo confirmation
  formMessage.textContent =
    "Thank you! Your email is ready for newsletter integration.";

  newsletterForm.reset();

});


// ===== FOOTER CURRENT YEAR =====

document.querySelector("#year").textContent =
  new Date().getFullYear();













const projectGrid = document.getElementById("projectGrid");
const favouriteGrid = document.getElementById("favouriteGrid");
const favouriteCount = document.getElementById("favouriteCount");

const favouriteKey = "dfd-favourite-projects";

const projects = [
  {
    id: "1",
    title: "Luxury Bedroom Retreat",
    category: "BEDROOM DESIGN",

    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6xGsJdrvnzVZGietrqPSUwsP7ojoB4INPgS15SpiVzG-6O9ixR_gX1Jk&s=10",
  },
  {
    id: "2",
     title: "Modern Minimalist Bedroom",
  category: "INTERIOR STYLING",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS79mBykJaxhvdTjMJucZRLetJXGnORAa_4liZfMIZIXe4whVx4rlAt9Zg&s=10",
  },
  {
    id: "3",
      title: "Elegant Bedroom Makeover",
  category: "BEDROOM DESIGN",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLdyR8nno4LlAX_jl3oAf4hqfI8TAWt1GDhoQVQeUIfjdybcoRhD9rJNx1&s=10",
  },
];

let favourites = JSON.parse(
  localStorage.getItem(favouriteKey) || "[]"
);

function saveFavourites() {
  localStorage.setItem(
    favouriteKey,
    JSON.stringify(favourites)
  );
}

function showFavouriteMessage(card, message) {
  const messageBox = card.querySelector(".project-message");

  if (!messageBox) return;

  messageBox.textContent = message;
  messageBox.classList.add("show");

  setTimeout(() => {
    messageBox.classList.remove("show");
  }, 1600);
}

function renderFavourites() {
  favouriteCount.textContent = favourites.length;

  if (favourites.length === 0) {
    favouriteGrid.innerHTML = `
      <div class="empty-favourites">
        <span class="empty-heart">♡</span>
        <h3>No favourites yet</h3>
        <p>Tap the heart on any project to save it here.</p>
        <a href="#projects">Explore Projects ↗</a>
      </div>
    `;
    return;
  }

  favouriteGrid.innerHTML = favourites
    .map(
      (project) => `
        <article class="favourite-card" data-id="${project.id}">
          <div class="project-image">
            <img src="${project.image}" alt="${project.title}">

            <button
              class="heart-btn is-favourite"
              aria-label="Remove ${project.title} from favourites"
              aria-pressed="true"
            >
              <span class="heart-icon">♥</span>
            </button>
          </div>

          <div class="project-info">
            <div>
              <span class="project-category">${project.category}</span>
              <h3>${project.title}</h3>
            </div>
            <span class="project-number">♥</span>
          </div>
        </article>
      `
    )
    .join("");
}

function syncProjectHearts() {
  document.querySelectorAll("#projectGrid .project-card").forEach((card) => {
    const isSaved = favourites.some(
      (project) => project.id === card.dataset.id
    );

    const button = card.querySelector(".heart-btn");

    button.classList.toggle("is-favourite", isSaved);
    button.setAttribute("aria-pressed", String(isSaved));
    button.querySelector(".heart-icon").textContent = isSaved ? "♥" : "♡";
  });
}

function toggleFavourite(id, card) {
  const alreadySaved = favourites.some(
    (project) => project.id === id
  );

  if (alreadySaved) {
    favourites = favourites.filter(
      (project) => project.id !== id
    );

    showFavouriteMessage(card, "Removed from Favourites");
  } else {
    const project = projects.find(
      (item) => item.id === id
    );

    if (!project) return;

    favourites.push(project);

    showFavouriteMessage(card, "♥ Added to Favourites! Done");
  }

  saveFavourites();
  syncProjectHearts();
  renderFavourites();
}

// Click on a heart in either section
document.addEventListener("click", (event) => {
  const button = event.target.closest(".heart-btn");

  if (!button) return;

  const card = button.closest("[data-id]");
  if (!card) return;

  toggleFavourite(card.dataset.id, card);
});

// Initial display
syncProjectHearts();
renderFavourites();
