
import styles from './CSS/PhotoItem.module.css';
type IPhotoItem = {
  url: string;
  alt: string;
}
const PhotoItem = ({url, alt}: IPhotoItem) => {
  return (
    <div className={styles.containerPhoto}>
      <img src={url} alt={alt} />
    </div>
  );
};

export default PhotoItem;
