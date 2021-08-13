import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import hospitalMarker from "@iconify-icons/mdi/hospital-marker";
import silverwareVariant from "@iconify-icons/mdi/silverware-variant";
import medalOutline from "@iconify-icons/mdi/medal-outline";
import { useState } from "react";
import LocationInfoBox from "./LocationInfoBox";

const optionsArray = [
  {
    text: "Hotel NN Jazz",
    coords: [2.1657768, 41.3860573],
    icon: hospitalMarker,
    cat: "accommodation",
  },
  {
    text: "HCC Montblanc",
    coords: [2.1733479, 41.3876803],
    icon: hospitalMarker,
    cat: "accommodation",
  },
  {
    text: "Hotel Catalonia La Pedrera",
    coords: [2.16225004196167, 41.398624420166016],
    icon: hospitalMarker,
    cat: "accommodation",
  },
  {
    text: "El Arenal",
    coords: [2.1958216, 41.3848301],
    icon: silverwareVariant,
    cat: "restaurant",
  },
  {
    text: "Art Nouveau Walking Tour",
    coords: [2.1585248, 41.3971034],
    icon: medalOutline,
    cat: "activity",
  },
];

export default function OverviewMap({ center, zoom }) {
  const [locationInfo, setLocationInfo] = useState(null);

  const handleAPILoaded = (map, maps) => {
    const MontblancDir = new maps.LatLng(41.3876803, 2.1733479);
    const ElArenal = new maps.LatLng(41.3848301, 2.1958216);
    const DirectionsRequest = {
      origin: MontblancDir,
      destination: ElArenal,
      provideRouteAlternatives: false,
      travelMode: "DRIVING",
      drivingOptions: {
        departureTime: new Date(/* now, or future date */),
        trafficModel: "pessimistic",
      },
      unitSystem: maps.UnitSystem.METRIC,
    };
    const directionsService = new maps.DirectionsService();
    const directionsRenderer = new maps.DirectionsRenderer();
    directionsService.route(DirectionsRequest, (response, status) => {
      if (status == "OK") {
        directionsRenderer.setDirections(response);
      }
    });
    directionsRenderer.setMap(map);
  };

  return (
    <div style={{ width: "100%", height: "800px", position: "relative" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCfSR8KYZbIyX5FwhTRN6sc6sMsBBfzHGA" }}
        yesIWantToUseGoogleMapApiInternals
        defaultCenter={center}
        defaultZoom={zoom}
        onGoogleApiLoaded={({ map, maps }) => handleAPILoaded(map, maps)}
      >
        {optionsArray.map((marker, i) => (
          <LocationMarker
            key={i}
            lat={marker.coords[1]}
            lng={marker.coords[0]}
            icon={marker.icon}
            onClick={() =>
              setLocationInfo({ title: marker.text, category: marker.cat })
            }
          />
        ))}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
}

OverviewMap.defaultProps = {
  center: {
    lat: 41.387,
    lng: 2.17,
  },
  zoom: 14,
};
