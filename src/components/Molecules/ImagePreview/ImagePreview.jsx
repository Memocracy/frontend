import React, { useState, useEffect } from "react";
import { Loader } from "../../Atoms/Loader";
import * as imagePreviewStyles from "./ImagePreview.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const ImagePreview = ({ additionalClasses = [] }) => {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    window.togglePreview = (state, imageSrc) => {
      setVisible(state);
      setImageLoaded(false);
      setImage(imageSrc);
    };
  }, []);

  const classes = `
    ${imagePreviewStyles.base}
    ${additionalClasses.join(" ")}
    ${visible ? imagePreviewStyles.visible : "invisible"}
  `;

  const closeHandler = () => {
    setVisible(false);
    setImage(null);
    setImageLoaded(false);
  };

  return (
    <div
      className={classes}
      onClick={closeHandler}
      aria-hidden={visible}
    >
      <div>
        {image && (
          <img
            src={image}
            style={{ visibility: `${imageLoaded ? "visible" : "hidden"}` }}
            alt="preview"
            onLoad={() => setImageLoaded(true)}
          />
        )}
        {!imageLoaded && <Loader />}

        <Loader />
      </div>
    </div>
  );
};
