import React, { useCallback, useEffect, useRef } from 'react';
import leaflet from 'leaflet';
import { BASE_URL } from 'src/constants';
import { useSelector } from 'src/hooks';
import { TOffer } from 'src/ducks/hotels/hotelsModels';

const icon = leaflet.icon({
  iconUrl: `${BASE_URL}/img/pin.svg`,
  iconSize: [30, 30],
});

const activeIcon = leaflet.icon({
  iconUrl: `${BASE_URL}/img/pin-active.svg`,
  iconSize: [30, 30],
});

const Map: React.FC<{ offers: TOffer[] }> = ({ offers }) => {
  const currentCity = useSelector((state) => state.hotels.currentCity);
  const activeOfferId = useSelector((state) => state.hotels.activeOffer?.id);

  const mapRef = useRef<HTMLDivElement>();
  const markersRef = useRef<any>();

  const coords = [currentCity.location.latitude, currentCity.location.longitude];
  const { zoom } = currentCity.location;

  const highlightCurrentOfferMarker = useCallback(() => {
    markersRef.current
      .find((marker) => marker.options.offerId === activeOfferId)
      .setIcon(activeIcon);
  }, [activeOfferId, markersRef]);

  const paintOverMarkers = useCallback(() => {
    markersRef.current.forEach((m) => m.setIcon(icon));
  }, []);

  useEffect(() => {
    const map = leaflet.map(mapRef.current, {
      center: coords,
      zoom,
      zoomControl: false,
      scrollWheelZoom: false,
      marker: true,
    });

    map.setView(coords, zoom);

    leaflet
      .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      })
      .addTo(map);

    const markers = offers.map((offer) =>
      leaflet.marker([offer.location.latitude, offer.location.longitude], {
        icon,
        offerId: offer.id,
      })
    );

    leaflet.layerGroup(markers).addTo(map);
    markersRef.current = markers;

    if (activeOfferId) {
      highlightCurrentOfferMarker();
    }

    return () => {
      map.off();
      map.remove();
    };
  }, [currentCity, offers]);

  useEffect(() => {
    paintOverMarkers();

    if (activeOfferId) {
      highlightCurrentOfferMarker();
    }
  }, [activeOfferId]);

  return <div id="map" style={{ height: '100%' }} ref={mapRef} />;
};

export default Map;
