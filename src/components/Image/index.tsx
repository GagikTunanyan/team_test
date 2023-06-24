import React, { useState } from "react";
import { ImagePropTypes } from "../../types";
import styles from "./image.module.scss";

export const Image: React.FC<ImagePropTypes> = ({
  src,
  alt,
  desc,
  onClickDesc,
  onClickImg,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={styles.Image} onClick={(e) => onClickImg?.(src, alt, e)}>
      {!imageLoaded && <div className={styles.SkeletonLoad} />}
      <img
        src={src}
        alt={alt}
        style={{ display: imageLoaded ? "block" : "none" }}
        onLoad={handleImageLoad}
      />
      {!!desc && (
        <div className={styles.Desc}>
          <p
            className="p-bold p-l"
            onClick={(e) => {
              e.stopPropagation();
              onClickDesc?.(e, desc);
            }}
          >
            {desc}
          </p>
        </div>
      )}
    </div>
  );
};
