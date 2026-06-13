// =============================
// TYPING ANIMATION
// =============================

document.addEventListener("DOMContentLoaded", () => {

    if (typeof Typed !== "undefined") {
        new Typed("#typed-role", {

            strings: [

                "Java Backend Engineer",

                "Spring Boot Developer",

                "Enterprise Software Engineer",

                "Problem Solver"

            ],

            typeSpeed: 80,

            backSpeed: 50,

            backDelay: 1500,

            loop: true

        });
    }

    if (window.AOS) {
        AOS.init({
            duration: 800,
            once: true
        });
    }

});


// =============================
// STICKY NAVBAR
// =============================

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".custom-navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(15,23,42,0.95)";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.3)";

    } else {

        navbar.style.background =
            "rgba(15,23,42,.85)";

        navbar.style.boxShadow =
            "none";
    }

});


// =============================
// ACTIVE NAV LINK
// =============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");

const isHomePage =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname === "";

window.addEventListener("scroll", () => {

    if (!isHomePage) return;

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");
        }
    });

});


// =============================
// COUNTER ANIMATION
// =============================

const counters =
    document.querySelectorAll(".counter");

const speed = 200;

const startCounter = () => {

    counters.forEach(counter => {

        const updateCount = () => {

            const target =
                +counter.getAttribute("data-target");

            const count =
                +counter.innerText;

            const increment =
                target / speed;

            if (count < target) {

                counter.innerText =
                    Math.ceil(count + increment);

                setTimeout(updateCount, 10);

            } else {

                counter.innerText =
                    target;
            }

        };

        updateCount();

    });

};


// =============================
// INTERSECTION OBSERVER
// =============================

let counterStarted = false;

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                    if (
                        entry.target.classList.contains(
                            "counter-section"
                        ) && !counterStarted
                    ) {

                        startCounter();
                        counterStarted = true;
                    }
                }

            });

        },

        {
            threshold: 0.2
        }
    );

document
    .querySelectorAll(
        ".hidden,.counter-section"
    )
    .forEach(el =>
        observer.observe(el)
    );


// =============================
// SMOOTH SCROLL
// =============================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                const target = document.querySelector(
                    this.getAttribute("href")
                );

                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        );

    });


// =============================
// SCROLL TO TOP BUTTON
// =============================

const scrollBtn =
    document.createElement("button");

scrollBtn.innerHTML =
    '<i class="fas fa-arrow-up"></i>';

scrollBtn.classList.add(
    "scroll-top-btn"
);

document.body.appendChild(
    scrollBtn
);

window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 400
        ) {

            scrollBtn.classList.add(
                "active"
            );

        } else {

            scrollBtn.classList.remove(
                "active"
            );
        }

    }
);

scrollBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"
        });

    }
);