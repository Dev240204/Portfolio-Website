import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>@2023 Lorem. All rights reserved</div>
        <div className={styles.socialmedia}>
          <Image src='/1.png' width={25} height={20} className={styles.icon}></Image>
          <Image src='/2.png' width={17} height={17} className={styles.icon}></Image>
          <Image src='/3.png' width={17} height={17} className={styles.icon}></Image>
          <Image src='/4.png' width={17} height={17} className={styles.icon}></Image>
        </div>
    </div>
  )
}

export default Footer