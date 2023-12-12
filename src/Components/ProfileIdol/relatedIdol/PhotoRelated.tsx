import React from 'react';
import styles from './CSS/PhotoRelated.module.css';
type IPhotoItem = {
  url: string;
  logoUrl: string;
  alt: string;
  id: string;
  perfil: string;
};
const PhotoRelated = ({ url, logoUrl, alt, id, perfil }: IPhotoItem) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className={styles.containerPhoto}>
      <div
        className={`${styles.flipCardInner} ${isActive ? styles.active : ''}`}
      >
        <div className={styles.flipCardFront}>
          <a href={`/${perfil}/${id}`} target="_self">
            <img
              src={url}
              alt={alt}
              onMouseOver={() => setIsActive(true)}
              onMouseOut={() => setIsActive(false)}
            />
          </a>
        </div>

        <div className={styles.flipCardBack}>
          <a href={`/${perfil}/${id}`} target="_self">
            <img
              src={logoUrl}
              alt={alt}
              onMouseOver={() => setIsActive(true)}
              onMouseOut={() => setIsActive(false)}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotoRelated;
