/* ==========================================
   RANCH WEBSITE - JAVASCRIPT
========================================== */


/* ==========================================
   1. SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


/* ==========================================
   2. HEADER SCROLL EFFECT
========================================== */

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        nav.style.background = "rgba(0,0,0,.95)";
        nav.style.boxShadow = "0 5px 25px rgba(0,0,0,.5)";

    } else {

        nav.style.background = "rgba(0,0,0,.85)";
        nav.style.boxShadow = "none";

    }

});


/* ==========================================
   3. REVEAL ANIMATION
========================================== */

const cards = document.querySelectorAll(
    ".menu-card, .contact-card, .full-menu"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);

});


/* ==========================================
   4. CURRENT YEAR
========================================== */

const footerText = document.querySelector("footer p");

if (footerText) {

    const year = new Date().getFullYear();

    footerText.innerHTML =
        `© ${year} RANCH Burger - Fresh & Tasty`;

}


/* ==========================================
   5. ORDER BUTTON
========================================== */

const orderButtons = document.querySelectorAll(
    ".btn"
);

orderButtons.forEach(button => {

    button.addEventListener("click", function () {

        const text = this.textContent.trim();

        if (
            text.includes("اطلب") ||
            text.includes("طلب")
        ) {

            const phone = "201505941807";

            const message =
                "السلام عليكم، أريد الطلب من RANCH 🍔";

            const whatsappURL =
                `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

            window.open(
                whatsappURL,
                "_blank"
            );

        }

    });

});


/* ==========================================
   6. MENU CARD CLICK
========================================== */

document.querySelectorAll(".menu-card").forEach(card => {

    card.addEventListener("click", () => {

        const name =
            card.querySelector("h3")?.textContent || "";

        const price =
            card.querySelector(".price")?.textContent || "";

        console.log(
            `تم اختيار: ${name} - ${price}`
        );

    });

});


/* ==========================================
   7. BACK TO TOP BUTTON
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.setAttribute(
    "aria-label",
    "العودة إلى أعلى الصفحة"
);

topButton.style.cssText = `
    position: fixed;
    bottom: 25px;
    left: 25px;

    width: 50px;
    height: 50px;

    border: none;
    border-radius: 50%;

    background: #ffc400;
    color: #111;

    font-size: 25px;
    font-weight: bold;

    cursor: pointer;

    display: none;

    z-index: 9999;

    box-shadow:
        0 5px 20px rgba(0,0,0,.4);

    transition: .3s;
`;

document.body.appendChild(topButton);


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================================
   8. WHATSAPP ORDER
========================================== */

function orderViaWhatsApp(productName) {

    const phone = "201505941807";

    const message =
        `السلام عليكم 👋
أريد طلب:
${productName}

من مطعم RANCH 🍔`;

    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}


/* ==========================================
   9. ADD ORDER BUTTONS
========================================== */

document.querySelectorAll(".menu-card").forEach(card => {

    const productName =
        card.querySelector("h3")?.textContent;

    if (!productName) return;


    const button = document.createElement("button");

    button.textContent = "اطلب الآن 🍔";

    button.style.cssText = `
        margin-top: 10px;

        padding: 8px 15px;

        border: none;

        border-radius: 20px;

        background: #ffc400;

        color: #111;

        font-weight: bold;

        cursor: pointer;

        transition: .3s;
    `;


    button.addEventListener("mouseenter", () => {

        button.style.background = "#111";
        button.style.color = "#ffc400";

    });


    button.addEventListener("mouseleave", () => {

        button.style.background = "#ffc400";
        button.style.color = "#111";

    });


    button.addEventListener("click", (e) => {

        e.stopPropagation();

        orderViaWhatsApp(productName);

    });


    const info =
        card.querySelector(".menu-info");

    if (info) {
        info.appendChild(button);
    }

});


/* ==========================================
   10. LOADING EFFECT
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "RANCH Website Loaded Successfully 🍔"
    );

});
