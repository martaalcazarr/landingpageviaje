$(document).ready(function () {
    // Agregar el desplazamiento suave a todos los enlaces con la clase .nav-link-smooth
    $(".nav-link-smooth").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                400,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });
});

$(document).ready(function(){
    $('.carousel').carousel({
      interval: 2000 // cambia la imagen cada 2 segundos
    })
});