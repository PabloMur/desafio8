import React, { useRef, useEffect } from "react";
import css from "./styles.css";
import Map, { GeolocateControl } from "react-map-gl";

const MapboxSearchComp = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  // const crearMapa = () => {
  //   mapboxgl.accessToken =
  //     "pk.eyJ1IjoicG9sbXVyIiwiYSI6ImNsYWc0ejh0eTFhYTEzcXBlNGh4N3p6eGgifQ.J7CA9nlTGPzjWhdDW1QFvA";
  //   const map = new Map({
  //     container: mapContainer.current, // container ID
  //     style: "mapbox://styles/polmur/cl8w32dh4001514oxqd9l8aop", // style URL
  //     center: [-74.5, 40], // starting position [lng, lat]
  //     zoom: 9, // starting zoom
  //   });
  // };

  useEffect(() => {
    //crearMapa();
  }, []);

  return <div className={css.root} ref={mapContainer}></div>;
};

function MyMap() {
  return (
    <div>
      <Map
        mapboxAccessToken="pk.eyJ1IjoicG9sbXVyIiwiYSI6ImNsYWc0ejh0eTFhYTEzcXBlNGh4N3p6eGgifQ.J7CA9nlTGPzjWhdDW1QFvA"
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </Map>
    </div>
  );
}

export { MapboxSearchComp, MyMap };
