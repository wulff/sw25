// attach the cycle plugin to the slideshow div
$(function() {
  var hash = document.location.hash;
  var index = hash.replace(/\#(\d+)/, '$1');

  index = index > 0 ? index - 1 : 0;

  $('#fade').cycle({
    prev: '#prev',
    next: '#next',
    timeout: 0,
    startingSlide: index,
    after: onAfter
  });
});

// show and hide the prev/next links
function onAfter(curr, next, opts) {
  var index = opts.currSlide;
  $('#prev')[index == 0 ? 'fadeOut' : 'fadeIn']('fast');
  $('#next')[index == opts.slideCount - 1 ? 'fadeOut' : 'fadeIn']('fast');
  document.location.hash = '#'+ (index + 1);
}
