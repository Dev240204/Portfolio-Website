import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={styles.content}>
      <h2 className={styles.headTitle}>Choose a gallery</h2>
      <div className={styles.items}>
          <Link href='/portfolio/illustrations'className={styles.item}>
            <span className={styles.title}>Illustrations</span>
          </Link>
          <Link href='/portfolio/websites'className={styles.item}>
            <span className={styles.title}>Websites</span>
          </Link>
          <Link href='/portfolio/application'className={styles.item}>
            <span className={styles.title}>Application</span>
          </Link>
      </div>
    </div>
  )
}

export default Portfolio