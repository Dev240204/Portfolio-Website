import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'

async function getdata(){
  // https://devport244241.netlify.app
  // http://localhost:3000/api/posts
  const res = await axios.get(`http://localhost:3000/api/posts`)
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const Blog = async () => {
  const data = await getdata()
  return (
    <div className={styles.mainContainer}>
      {data.map((item)=>(
        <Link href={`/blog/${item._id}`} className={styles.container} key={item._id}>
          <div className={styles.imgContainer}>
            <Image
            className={styles.img}
            src={item.img}
            alt=''
            width={300}
            height={250}
            ></Image>
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog