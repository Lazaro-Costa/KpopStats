import React from 'react';
import styles from './CSS/PhotoItem.module.css';
import { Link } from 'react-router-dom';
type IPhotoItem = {
  url: string;
  logoUrl: string;
  alt: string;
  profile: string;
};
const PhotoItem = ({ url, logoUrl, alt, profile }: IPhotoItem) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className={styles.containerPhoto}>
      <div
        className={`${styles.flipCardInner} ${isActive ? styles.active : ''}`}
      >
        <div className={styles.flipCardFront}>
          <Link to={`/perfil/${profile}`}>
            <img
              src={url}
              alt={alt}
              onMouseOver={() => setIsActive(true)}
              onMouseOut={() => setIsActive(false)}
            />
          </Link>
        </div>

        <div className={styles.flipCardBack}>
          <Link to={`/perfil/${profile}`}>
            <img
              src={logoUrl}
              alt={alt}
              onMouseOver={() => setIsActive(true)}
              onMouseOut={() => setIsActive(false)}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhotoItem;
