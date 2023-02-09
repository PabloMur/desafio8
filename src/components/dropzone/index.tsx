import React, { useEffect, useRef } from "react";
import { initDropzone } from "lib/dropzone";
import css from "./styles.css";
import { useSetImageDataUrl } from "hooks";

const DropzoneComp = () => {
  const dropzoneRef = useRef<HTMLDivElement>(null);
  const setterImageDataURL = useSetImageDataUrl();

  useEffect(() => {
    const myDropzone = initDropzone(dropzoneRef.current);
    myDropzone.on("thumbnail", (file) => {
      setterImageDataURL(file.dataURL);
    });
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
