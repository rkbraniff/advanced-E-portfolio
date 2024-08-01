// template_ow6rruy   TEMPLATE
// service_iheih5q    SERVICE
// tejXqIKfgdiD6eGV1  PUBLIC KEY
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20

function moveBackground(event) {
    const shapes = document.querySelectorAll(`.shape`);
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += ` dark-theme`
    }
    else {
        document.body.classList.remove(`dark-theme`)
    }
}


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(`.modal__overlay--loading`)
    const success = document.querySelector(`.modal__overlay--success`)

    emailjs
        .sendForm(
            `service_iheih5q`,
            `template_ow6rruy`,
            event.target,
            `tejXqIKfgdiD6eGV1`
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += ` modal__overlay--visible`;
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                `This Email service is temporarily unavailable. Please contact me directly @ rfpaustianbusiness@gmail.com.`
            );
        })
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove(`modal--open`);
    }
    isModalOpen = true;
    document.body.classList += ` modal--open`;
}
