let menuVisible = false;

function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("responsive");
    menuVisible = nav.classList.contains("responsive");
}
function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("reactjs");
        habilidades[4].classList.add("mongoDB");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajoEquipo");
        habilidades[7].classList.add("liderazgo");
        habilidades[8].classList.add("aprendizaje");
        habilidades[9].classList.add("capacidad");
    }
}
window.onscroll = function () {
    efectoHabilidades();
}
function mostrarMensaje(event) {
    event.preventDefault(); 

    const mensaje = document.getElementById("mensaje-enviado");
    mensaje.style.display = "block";

    document.getElementById("form-contacto").reset();

    setTimeout(() => {
        mensaje.style.display = "none";
    }, 3000);
}