import React, { useState } from "react";
import { ImagePropTypes } from "../../types";
import styles from "./image.module.scss"

export const Image: React.FC<ImagePropTypes> = ({ src, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={styles.Image}>
      {!imageLoaded && <div className={styles.SkeletonLoad} />}
      <img
        src={src}
        alt={alt}
        style={{ display: imageLoaded ? "block" : "none" }}
        onLoad={handleImageLoad}
      />
    </div>
  );
};
