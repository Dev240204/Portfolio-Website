import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/button'

export const metadata = {
  title: 'Contact Me',
  description: 'This is the Contact Page',
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
          className={styles.img}
          src='/contact.jpg'
          alt=''
          fill={true}
          >
          </Image>
        </div>
        <form action="" className={styles.form}>
          <input type="text" className={styles.text} placeholder='name' />
          <input type="email" className={styles.text} placeholder='email' />
          <textarea cols="30" rows="10" placeholder='message' className={styles.textarea}></textarea>
          <Button url='#'text='Submit'></Button>        
        </form>
      </div>
    </div>
  )
}

export default Contact