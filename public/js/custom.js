/* global window, google MarkerClusterer document aeds window */

'use strict';

(function init() {
  function addAeds(map, aedData) {
    const markers = aedData.map(location =>
      new google.maps.Marker({
        position: { lat: location.latitude, lng: location.longitude },
      }));
    /* eslint no-new: 0 */
    new MarkerClusterer(map, markers, { imagePath: '/images/m' });
  }

  function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      minZoom: 5,
      center: new google.maps.LatLng(52.2232, -0.9837),
      mapTypeId: 'terrain',
    });
    addAeds(map, aeds);
  }

  window.initMap = initMap;
}());

