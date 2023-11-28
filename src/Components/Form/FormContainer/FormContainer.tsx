import React from 'react'
import styles from './CSS/formcontainer.module.css'

const FormContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        {children}
      </form>
    </div>
  )
}

export default FormContainer
