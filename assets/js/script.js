// agregar el desplazamiento suave a todos los enlaces con la clase .nav-link-smooth
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

//cambia la imagen cada 2 segundos
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
$(document).ready(function () {
  $(".red-social a i").hover(
    function () {
      $(this).css("color", "black");
    },
    function () {
      $(this).css("color", "white");
    }
  );
});

//el fondo del navbar se vuelve negro cuando llegas a la section quienes somos, y vuelve a transparente si subes de ahí
//en pantalla mobile se mantiene transparente
function updateNavbarClass() {
  var scrollPos = $(window).scrollTop();
  var quienesSomosPos = $("#quienes-somos").offset().top;
  var isMobile = !window.matchMedia("(min-width: 768px)").matches;

  if (scrollPos >= quienesSomosPos && !isMobile) {
    $(".navbar").addClass("bg-black");
  } else {
    $(".navbar").removeClass("bg-black");
  }
}
// ejecutar al cargar la página
updateNavbarClass();
// actualizar la clase del navbar por hacer scroll o vuelve a transparente si se cambia de tamaño
$(window).on("scroll", updateNavbarClass);
$(window)
  .on("resize", function () {
    updateNavbarClass();
    $(".navbar").removeClass("bg-black");
  })
  .trigger("resize");
