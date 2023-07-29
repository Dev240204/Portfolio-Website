import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Best Design for Your Digital Products</h1>
        <p className={styles.desc}>Crafting code that brings ideas to life and sparks digital innovation.</p>
        <Button url='/portfolio' text='See our Works'></Button>
      </div>
      <div className={styles.item}>
        <Image src='/hero.avif' width={500} height={500} className={styles.img} alt='home-img'></Image>
      </div>
    </div>
  )
}
