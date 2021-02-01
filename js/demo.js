/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

// This can be used to set the Particles Effects. Check README for more details!
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#ae8bd6',
    lineColor: '#ae8bd6'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);



// jQuery plugin example:
$(document).ready(function() {
  $('#particles-error').particleground({
    dotColor: '#f54b42',
    lineColor: '#f54b42',
    density: 100000
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
