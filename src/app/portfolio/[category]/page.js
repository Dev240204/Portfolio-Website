import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/button'

const Category = ({params}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <div className={styles.title}>Test</div>
          <div className={styles.desc}>Desc</div>
          <Button url='#' text='See More'></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image
          className={styles.img}
          src={'/illustrationport1.1.jpg'}
          alt=''
          fill={true}
          ></Image>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <div className={styles.title}>Test</div>
          <div className={styles.desc}>Desc</div>
          <Button url='#' text='See More'></Button>
        </div>
        <div className={styles.imgContainer}>
          <Image
          className={styles.img}
          src={'/illustrationport1.1.jpg'}
          alt=''
          fill={true}
          ></Image>
        </div>
      </div>
    </div>
  )
}

export default Category