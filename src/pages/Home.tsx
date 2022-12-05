import React, { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { Banner } from "components/banner";

function Home() {
  const params = useParams();
  return (
    <div>
      <Banner />
    </div>
  );
}

export { Home };
