
import React from 'react';
import styles from './CSS/PhotoItem.module.css';
type IPhotoItem = {
  url: string;
  logoUrl: string;
  alt: string;
}
const PhotoItem = ({url, logoUrl, alt}: IPhotoItem) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className={styles.containerPhoto}>
      <div className={`${styles.flipCardInner} ${isActive ? styles.active : ''}`}>
        <div className={styles.flipCardFront}>
          <img src={url} alt={alt} onMouseOver={() => setIsActive(true)} onMouseOut={() => setIsActive(false)}/>
        </div>

        <div className={styles.flipCardBack}>
          <img src={logoUrl} alt={alt} onMouseOver={() => setIsActive(true)} onMouseOut={() => setIsActive(false)}/>
        </div>
      </div>
    </div>
  );
};

export default PhotoItem;
