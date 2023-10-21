import React from 'react'
import styles from './CSS/LabelRoot.module.css'
type ILabelRoot = {
  children: React.ReactNode;
}
const LabelRoot = ({children}: ILabelRoot ) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default LabelRoot
