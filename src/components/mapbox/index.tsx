import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import css from "./styles.css";
import { Map } from "mapbox-gl";

const MapboxSearchComp = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  const crearMapa = () => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoicG9sbXVyIiwiYSI6ImNsYWc0ejh0eTFhYTEzcXBlNGh4N3p6eGgifQ.J7CA9nlTGPzjWhdDW1QFvA";
    const map = new Map({
      container: mapContainer.current, // container ID
      style: "mapbox://styles/polmur/cl8w32dh4001514oxqd9l8aop", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  };

  useEffect(() => {
    crearMapa();
  }, []);

  return <div className={css.root} ref={mapContainer}></div>;
};

export { MapboxSearchComp };
