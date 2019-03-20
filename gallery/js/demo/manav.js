/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

 /* global blueimp, $ */

// Initialize the Gallery as image carousel:
var folder = "pics/";
var carouselLinks = []

$.ajax({
  url : folder,
  success: function (data) {
    $(data).find("a").attr("href", function (i, val) {
      if( val.match(/\.(jpg|png|jpeg)$/) ) { 
        carouselLinks.append( folder + val );
      } 
    });
  }
});

// Initialize the Gallery as image carousel:
blueimp.Gallery(carouselLinks, {
  container: '#blueimp-image-carousel',
  carousel: true
})

  // Initialize the Gallery as video carousel:
  blueimp.Gallery([
  {
    title: 'Manav Humanoid Active Ball Tracking [Testing Phase-1]',
    type: 'text/html',
    youtube: 'UWUayEP_caQ'
  },
  {
    title: 'Amplitude Manipulated Articulate Jaw Mechanism(AMAJM) [Test-2]',
    type: 'text/html',
    youtube: 'W0aUmqkF22c'
  }
  ], {
    container: '#blueimp-video-carousel',
    carousel: true
  })
