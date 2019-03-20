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

$(function () {
  'use strict'

  $.getJSON('js/demo/test.json', function (json) {
    var array = []
    for (var key in json) {
      if (json.hasOwnProperty(key)) {
        var item = json[key];
        array.push({
          href: item.Path,
          title: item.Title,
          type: 'image/jpeg'
        })         
      }
    }
    // Initialize the Gallery as image carousel:
    blueimp.Gallery(array, {
    container: '#blueimp-image-carousel',
    carousel: true
  })
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
})
