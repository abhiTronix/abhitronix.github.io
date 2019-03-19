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
blueimp.Gallery(
  [
  {
    title: '1',
    href: 'pics/1.jpg',
    type: 'image/jpeg',
    thumbnail: 'pics/1.jpg'
  },
  {
    title: '2',
    href: 'pics/2.jpg',
    type: 'image/jpeg',
    thumbnail: 'pics/2.jpg'
  },
  {
    title: '3',
    href: 'pics/3.jpg',
    type: 'image/jpeg',
    thumbnail: 'pics/3.jpg'
  },
  {
    title: '4',
    href: 'pics/4.jpg',
    type: 'image/jpeg',
    thumbnail: 'pics/4.jpg'
  }
  ], {
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
