const menuDisplay = document.getElementById('menuMobile');
const mobileMenu = document.getElementById('mobile-menu');

const toggleFuncionamiento = document.getElementById('toggleFuncionamiento');
const videoFuncionamiento = document.getElementById('videoFuncionamiento');

const toggleVidaUtil = document.getElementById('toggleVidaUtil');
const videoVidaUtil = document.getElementById('videoVidaUtil');

const toggleSeguridadPacientes = document.getElementById('toggleSeguridadPacientes');
const videoSeguridadPacientes = document.getElementById('videoSeguridadPacientes');

menuDisplay.addEventListener('click', toggleMobileMenu);
toggleFuncionamiento.addEventListener('click', toggleVideoFuncionamiento);
toggleVidaUtil.addEventListener('click', toggleVideoVidaUtil);
toggleSeguridadPacientes.addEventListener('click', togglevideoSeguridadPacientes);

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