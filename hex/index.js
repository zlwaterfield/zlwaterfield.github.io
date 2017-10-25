// Generate hexa's
var el = $('.hexa-container');
el.append('<div class="hexa"></div>');
el.append('<div class="hexa"></div>');
el.append('<div class="hexa"></div>');

// Set client size
var client_width = $(window).width();
var client_height = $(window).height();

// Add listener for mouseover
window.addEventListener('mousemove', function (e) {
  var hexas = $('.hexa');
  for(i = 0; i < hexas.length; i++) {
    var hexa = $(hexas[i])
    var percent_x = Math.round(e.clientX/client_width*100);
    var percent_y = Math.round(e.clientY/client_height*100);
    var left = hexa.position().left
    var top = hexa.position().top
    var new_left = percent_x*(i+1)/6
    var new_top = percent_y*(i+1)/6
    hexa.css({
      'transform': 'translate3d(' + new_left + 'px, ' + new_top + 'px, ' + new_top + 'px)'
    });
  }
});
