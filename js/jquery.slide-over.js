(function($) {
  $.fn.slideOver = function() {
    // Append the needed HTML elements to the DOM
    $('body').append(
        "<div class='slide-over'>"
      + "<a href='#' data-slideover='toggle'>x</a>"
      + "</div>"
      + "<div class='overlay' data-slideover='toggle'>"
      + "</div>"
    );
    // Trigger the slideout on click
    this.each(function() {
      $(this).click(function(event) {
        event.preventDefault();
        var panel = $(".slide-over");
        var panelWidth = panel.width();
        // Toggle open class
        panel.toggleClass("open");
      });
    });
  }
}(jQuery));
