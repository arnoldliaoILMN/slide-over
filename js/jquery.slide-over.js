(function($) {
  $.fn.slideOver = function() {
    // Append the needed HTML elements to the DOM
    $('body').append(
        "<div class='slide-over'>"
      + "<a href='#' data-slideover='close' class='close-x'>x</a>"
      + "</div>"
      + "<div class='overlay' data-slideover='close'>"
      + "</div>"
    );

    var panel = $(".slide-over");
    var panelWidth = panel.width();

    // Trigger the slideout on click
    this.each(function() {
      $(this).click(function(event) {
        var contentId = $(this).attr('href')
        event.preventDefault();
        // Append content inside the panel
        $(contentId).clone().appendTo('.slide-over');
        // Toggle open class
        panel.addClass("open");
        // Slide functionality
        panel.show().animate({
          right: "0px"
        }, 200);
        $(".overlay").fadeIn(200);
        $("body").css("overflow", "hidden");
      });
    });

    // Close the slideout when clicking X or outside panel
    $('*[data-slideover="close"]').click(function() {
      var currentContent = $('.slide-over div.slideover-content');
      closeSlider(currentContent);
    });

    function closeSlider(currentContent) {
      $('.overlay').fadeOut(200);
      // Remove the content inside the panel
      currentContent.remove();
      panel.animate({
        right: -panelWidth
      }, 200, function() {
        $("body").css("overflow","auto");
      });
    }
  }
}(jQuery));

$('*[data-slideover="open"]').slideOver();
