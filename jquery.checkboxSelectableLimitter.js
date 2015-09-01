(function($) {
  $.fn.checkboxSelectableLimitter = function (options) {
    var $checkBoxes = $(this);
    var $settings = $.extend({
      limit : 0,
      callback : null
    }, options);

    $checkBoxes.click(function (e) {
      if ($settings.limit > 0) {
        $checkBoxes.not(':checked').attr('disabled', ($checkBoxes.filter(':checked').length >= $settings.limit));
      }
      if ($settings.callback) {
        $settings.callback();
      }
    });
    return(this);
  };
})(jQuery)
