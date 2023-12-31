import React from 'react'
import styles from './page.module.css'

const layout = ({children}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.mainTitle}>My Work</h1>
        {children}
    </div>
  )
}

export default layout