// attach the cycle plugin to the slideshow div
$(function() {
  $('#fade').cycle({
    prev: '#prev',
    next: '#next',
    timeout: 0,
    before: onBefore
  });

  $('#prev').hide();
});

// show and hide the prev/next links
function onBefore() {
  switch ($(this).attr('id')) {
    case 'slide-1':
      $('#prev').hide();
      $('#next').show();
      break;
    case 'slide-2':
      $('#prev').show();
      $('#next').show();
      break;
    case 'slide-3':
      $('#prev').show();
      $('#next').hide();
      break;
  }
}
