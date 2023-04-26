// Agregar el desplazamiento suave a todos los enlaces con la clase .nav-link-smooth
$(document).ready(function () {
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

// cambia la imagen cada 2 segundos
$(document).ready(function () {
  $(".carousel").carousel({
    interval: 2000,
  });
});

//desaparece el p cuando das click en el titulo del card
$(document).ready(function () {
  $(".card-title").click(function () {
    $(".card-text").toggle();
  });
});

//aparece tooltip en btn
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

//los iconos cambian a color negro cuando el mouse pasa por arriba (hover)
$(document).ready(function() {
    $('.red-social a i').hover(function() {
      $(this).css('color', 'black');
    }, function() {
      $(this).css('color', 'white');
    });
  });