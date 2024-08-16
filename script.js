
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("#dot-nav li");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.getAttribute("data-target") === current) {
            li.classList.add("active");
        }
    });
});

navLi.forEach((li) => {
    li.addEventListener("click", () => {
        document.getElementById(li.getAttribute("data-target")).scrollIntoView({ behavior: "smooth" });
    });
});
