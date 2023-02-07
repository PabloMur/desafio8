import React, { useEffect, useRef } from "react";
import { initDropzone } from "lib/dropzone";
import css from "./styles.css";

const DropzoneComp = () => {
  const dropzoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const myDropzone = initDropzone(dropzoneRef.current);
    myDropzone.on("thumbnail", (file) => console.log(file.dataURL));
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
