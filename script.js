
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("#nav-dots li");

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


/*--------------------------------------------- connect js ----------------------------------------------------------*/

let con_current_form = 0;
let con_form_grp = document.querySelector('.form_container');
let con_form_length = document.querySelectorAll('.con_forms').length;

function con_moveslide(index_add){
    con_current_form += index_add;
    if(con_current_form >= con_form_length){
        con_current_form = 0;
    }
    else if(con_current_form < 0){
        con_current_form = con_current_form - 1;
    }

    con_form_grp.style.transform = `translateX(-${con_current_form*100}%)`;
}

