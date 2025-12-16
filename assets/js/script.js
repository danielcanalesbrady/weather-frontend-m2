$(function () {
  $("#tituloMain").hover(
    function () {
      $(this).css({
        transform: "scale(1.05)",
        transition: "transform 0.3s ease",
      });
    },
    function () {
      $(this).css({
        transform: "scale(1)",
        transition: "transform 0.3s ease",
      });
    }
  );
});
