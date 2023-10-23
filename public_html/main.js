const menuDisplay = document.getElementById('menuMobile');
const mobileMenu = document.getElementById('mobile-menu');

const toggleFuncionamiento = document.getElementById('toggleFuncionamiento');
const videoFuncionamiento = document.getElementById('videoFuncionamiento');

const toggleVidaUtil = document.getElementById('toggleVidaUtil');
const videoVidaUtil = document.getElementById('videoVidaUtil');

const toggleSeguridadPacientes = document.getElementById('toggleSeguridadPacientes');
const videoSeguridadPacientes = document.getElementById('videoSeguridadPacientes');

const bottomLimpieza = document.getElementById('bottomLimpieza');
const ConseVideo1 = document.getElementById('ConseVideo1');

const bottomMantenimiento = document.getElementById('bottomMantenimiento');
const ConseVideo2 = document.getElementById('ConseVideo2');

const bottomAlmacenamiento = document.getElementById('bottomAlmacenamiento');
const ConseVideo3 = document.getElementById('ConseVideo3');

const bottomCapacitacion = document.getElementById('bottomCapacitacion');
const ConseVideo4 = document.getElementById('ConseVideo4');



menuDisplay.addEventListener('click', toggleMobileMenu);
toggleFuncionamiento.addEventListener('click', toggleVideoFuncionamiento);
toggleVidaUtil.addEventListener('click', toggleVideoVidaUtil);
toggleSeguridadPacientes.addEventListener('click', togglevideoSeguridadPacientes);
bottomLimpieza.addEventListener('click', consejoVideo1);
bottomMantenimiento.addEventListener('click', consejoVideo2);
bottomAlmacenamiento.addEventListener('click', consejoVideo3);
bottomCapacitacion.addEventListener('click', consejoVideo4);

function toggleMobileMenu () {
    mobileMenu.classList.toggle('hidden');
}
function toggleVideoFuncionamiento () {
    videoFuncionamiento.classList.toggle('hidden');
}
function toggleVideoVidaUtil () {
    videoVidaUtil.classList.toggle('hidden');
}
function togglevideoSeguridadPacientes () {
    videoSeguridadPacientes.classList.toggle('hidden');
}

function closeMobileMenu() {
    mobileMenu.classList.add("hidden");
}

function consejoVideo1() {
    ConseVideo1.classList.toggle("hidden");
    ConseVideo2.classList.add("hidden");
    ConseVideo3.classList.add("hidden");
    ConseVideo4.classList.add("hidden");
}

function consejoVideo2() {
    ConseVideo2.classList.toggle("hidden");
    ConseVideo1.classList.add("hidden");
    ConseVideo3.classList.add("hidden");
    ConseVideo4.classList.add("hidden");
}

function consejoVideo3() {
    ConseVideo3.classList.toggle("hidden");
    ConseVideo2.classList.add("hidden");
    ConseVideo1.classList.add("hidden");
    ConseVideo4.classList.add("hidden");
}

function consejoVideo4() {
    ConseVideo4.classList.toggle("hidden");
    ConseVideo3.classList.add("hidden");
    ConseVideo2.classList.add("hidden");
    ConseVideo1.classList.add("hidden");
}

$(document).ready(function() {
    $(".scroll-trigger").click(function(event) {
      event.preventDefault();
      var target = $(this).attr("href"); // Obtiene el valor del atributo href del enlace
      var offset = $(target).offset().top; // Obtiene la posición superior de la sección de destino
  
      $("html, body").animate(
        {
          scrollTop: offset
        },
        3000 // Duración del desplazamiento en milisegundos (1 segundo en este caso)
      );
    });
  });

