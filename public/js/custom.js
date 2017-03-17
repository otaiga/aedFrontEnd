/* global window, google MarkerClusterer document aeds window Handlebars */

'use strict';

(function init() {
  function createInfoContent(location) {
    const template = document.getElementById('aedTemplate').innerHTML;
    const compiledTemplate = Handlebars.compile(template);
    return compiledTemplate(location);
  }

  function addAeds(map, aedData) {
    const markers = aedData.map((location) => {
      const infowindow = new google.maps.InfoWindow({
        content: createInfoContent(location),
      });
      const marker = new google.maps.Marker({
        position: { lat: location.latitude, lng: location.longitude },
      });
      marker.addListener('click', () => {
        infowindow.open(map, marker);
      });
      return marker;
    });
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

