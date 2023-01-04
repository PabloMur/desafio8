import React, { useRef, useEffect } from "react";
import { createMap, initGeocoder, initGeolocate } from "lib/mapbox";
import mapboxgl from "mapbox-gl";
import css from "./styles.css";
import { userLocation } from "atoms";
import { useRecoilState } from "recoil";

const MapboxPetsAround = () => {
  let myRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useRecoilState(userLocation);

  const creteMapAndControls = async () => {
    let map = await createMap(myRef.current, value.lat, value.lng);
    let geolocate = await initGeolocate();
    let geocoder = await initGeocoder();

    map.addControl(geocoder);
    map.addControl(geolocate);
    map.addControl(new mapboxgl.NavigationControl());
  };
  useEffect(() => {
    creteMapAndControls();
  }, []);

  return <div className={css.root} ref={myRef}></div>;
};

export { MapboxPetsAround };
