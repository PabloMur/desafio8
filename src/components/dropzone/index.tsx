import React, { useEffect, useRef } from "react";
import { initDropzone } from "lib/dropzone";
import css from "./styles.css";

const DropzoneComp = () => {
  const dropzoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initDropzone(dropzoneRef.current);
  }, []);

  return (
    <div className={css.root}>
      <div className={css.dragZone} ref={dropzoneRef}>
        Arrastra una imagen de tu mascota o haz click aqui!
      </div>
    </div>
  );
};

export { DropzoneComp };
