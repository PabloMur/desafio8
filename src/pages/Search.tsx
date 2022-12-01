import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Search() {
  const params = useParams();

  useEffect(() => {
    console.log("Aca harias el fetch", params.busqueda);
  }, [params]);

  return (
    <div>
      Hola
      <Link to="/">link a home</Link>
      <Link to="/search/termos">link a busqueda de termos</Link>
    </div>
  );
}
export { Search };
