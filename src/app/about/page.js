import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} 
        src='/about2.avif' 
        fill={true}
        alt=''>
        </Image>
        <div className={styles.imgText}>
          <h2>Digital Storyteller</h2>
          <h3>Bringing ideas to life through clean and efficient code.</h3>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
            <div className={styles.title}>
              <h2>Who Are We?</h2>
            </div> 
            <div className={styles.desc}>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, esse. Necessitatibus sit repellendus reiciendis impedit sunt. Maxime sint doloremque temporibus.</p>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ratione aperiam corrupti excepturi! Recusandae sint consectetur commodi incidunt eos. Nemo.</p>
            </div>
        </div>
        <div className={styles.item}>
            <div className={styles.title}>
              <h2>What We Do?</h2>
            </div> 
            <div className={styles.desc}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur est aspernatur doloribus expedita distinctio soluta. Sit, impedit suscipit hic accusamus, obcaecati, culpa laboriosam perspiciatis officia esse qui libero facere!
                  <br /><br />
                  - Dynamic Websites
                  <br /><br />
                  - Fast and Handy
                  <br /><br />
                  <Button url='/contact' text='Contact Us'></Button>
                </p>
            </div> 
        </div>
      </div>
    </div>
  )
}

export default About