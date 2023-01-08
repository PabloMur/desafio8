import React, { useRef, useEffect } from "react";
import { createMap, initGeocoder, initGeolocate } from "lib/mapbox";
import mapboxgl from "mapbox-gl";
import css from "./styles.css";
import { userLocation } from "atoms/userAtoms";
import { useRecoilState } from "recoil";

const MapboxPetsAround = ({ variant }) => {
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

  return variant == "finder" ? (
    <div className={css.root} ref={myRef}></div>
  ) : (
    <div className={css.reportMap} ref={myRef}></div>
  );
};

export { MapboxPetsAround };

//componente creado con react

// import React, { useState } from 'react';

// function Menu() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         Abrir menú
//       </button>
//       {isOpen && (
//         <ul>
//           <li>Opción 1</li>
//           <li>Opción 2</li>
//           <li>Opción 3</li>
//         </ul>
//       )}
//     </div>
//   );
// }
