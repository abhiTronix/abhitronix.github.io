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

  $.getJSON('js/data/data_images.json', function (json) {
    var data_array = []
    for (var key in json) {
      if (json.hasOwnProperty(key)) {
        var item = json[key];
        data_array.push({
          href: item.Path,
          title: item.Title,
          type: 'image/jpeg'
        })         
      }
    }
    // Initialize the Gallery as image carousel:
    blueimp.Gallery(data_array, {
    container: '#blueimp-image-carousel',
    carousel: true
  })
  })
 
  $.getJSON('js/data/data_videos.json', function (json) {
    var datavid_array = []
    for (var key in json) {
      if (json.hasOwnProperty(key)) {
        var itemvid = json[key];
        datavid_array.push({
          title: itemvid.Title,
          type: 'text/html',
          youtube: itemvid.ID
        })         
      }
    }
    // Initialize the Gallery as video carousel:
    blueimp.Gallery(datavid_array, {
    container: '#blueimp-video-carousel',
    carousel: true
  })
  })
})
