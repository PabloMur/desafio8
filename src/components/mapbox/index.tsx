import React, { useRef, useEffect } from "react";
import { createMap, initGeocoder, initGeolocate } from "lib/mapbox";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import css from "./styles.css";

const MapboxPetsAround = () => {
  let myRef = useRef<HTMLDivElement>(null);

  mapboxgl.accessToken =
    "pk.eyJ1IjoicG9sbXVyIiwiYSI6ImNsYWc0ejh0eTFhYTEzcXBlNGh4N3p6eGgifQ.J7CA9nlTGPzjWhdDW1QFvA";

  const creteMapAndControls = async () => {
    let map = await createMap(myRef.current, -38.0106565, -57.5556473);
    let geolocate = await initGeolocate();
    let geocoder = await initGeocoder();

    map.addControl(geocoder);
    map.addControl(geolocate);
    map.addControl(new mapboxgl.NavigationControl());
  };
  useEffect(() => {
    // const map = new mapboxgl.Map({
    //   container: myRef.current, // container ID
    //   style: "mapbox://styles/polmur/cl8w32dh4001514oxqd9l8aop", // style URL
    //   center: [-57.5527202, -37.999473], // starting position [lng, lat]-,,
    //   zoom: 13, // starting zoom
    // });
    creteMapAndControls();
  }, []);

  return <div className={css.root} ref={myRef}></div>;
};

export { MapboxPetsAround };
