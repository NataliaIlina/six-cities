import React, { useEffect, useRef } from "react";
import leaflet from "leaflet";
import { connect } from "react-redux";
import { getCurrentCity, getActiveOffer } from "reducer/data/selectors";
import { BASE_URL } from "src/constants";
import { MapProps, ComponentProps } from "./types";
import { RootStateType } from "src/reducer";

const Map: React.FC<MapProps> = ({ currentCity, offers, activeOffer }) => {
  const mapRef = useRef<HTMLDivElement>();
  const markersRef = useRef<any>();

  const coords = [
    currentCity.location.latitude,
    currentCity.location.longitude
  ];
  const zoom = currentCity.location.zoom;
  const icon = leaflet.icon({
    iconUrl: `${BASE_URL}/img/pin.svg`,
    iconSize: [30, 30]
  });
  const activeIcon = leaflet.icon({
    iconUrl: `${BASE_URL}/img/pin-active.svg`,
    iconSize: [30, 30]
  });

  const highlightCurrentOfferMarker = () => {
    markersRef.current
      .find(marker => marker.options.offerId === activeOffer)
      .setIcon(activeIcon);
  };

  const paintOverMarkers = () => {
    markersRef.current.forEach(m => m.setIcon(icon));
  };

  useEffect(() => {
    const map = leaflet.map(mapRef.current, {
      center: coords,
      zoom,
      zoomControl: false,
      scrollWheelZoom: false,
      marker: true
    });

    map.setView(coords, zoom);

    leaflet
      .tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        }
      )
      .addTo(map);

    const markers = offers.map(offer => {
      return leaflet.marker(
        [offer.location.latitude, offer.location.longitude],
        {
          icon,
          offerId: offer.id
        }
      );
    });

    leaflet.layerGroup(markers).addTo(map);
    markersRef.current = markers;

    if (activeOffer) {
      highlightCurrentOfferMarker();
    }

    return () => {
      map.off();
      map.remove();
    };
  }, [currentCity, offers]);

  useEffect(() => {
    if (activeOffer) {
      paintOverMarkers();
      highlightCurrentOfferMarker();
    } else {
      paintOverMarkers();
    }
  }, [activeOffer]);

  return <div id="map" style={{ height: `100%` }} ref={mapRef} />;
};

const mapStateToProps = (state: RootStateType, ownProps: ComponentProps) =>
  Object.assign({}, ownProps, {
    currentCity: getCurrentCity(state),
    activeOffer: getActiveOffer(state)
  });

export { Map };

export default connect(mapStateToProps)(Map);