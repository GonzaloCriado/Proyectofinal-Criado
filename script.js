document.addEventListener("DOMContentLoaded", function() {
    const fotosPublicidad = document.querySelectorAll('.fotopublicidad');
    fotosPublicidad.forEach(function(foto) {
        foto.classList.add('mostrar');
    });
});
