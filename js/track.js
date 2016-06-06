(function($) {
  var event = 'click.chaoran.track.data-api';
  var toggle = '[data-toggle="track"]';

  $(document).on(event, toggle, function(e) {
    var $this = $(this);
    var category = $this.attr('data-category');
    var target = e.target.href || e.target.parentElement.href;

    ga('send', 'event', {
      eventCategory: category,
      eventAction: 'view',
      eventLabel: target,
      transport: 'beacon'
    });
  });
})(jQuery);
