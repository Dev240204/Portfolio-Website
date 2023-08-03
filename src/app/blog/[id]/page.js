import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { PageNotFoundError } from 'next/dist/shared/lib/utils'
import axios from 'axios'

async function getdata(id){
  // https://devport244241.netlify.app
  // https://devport244241.netlify.app/api/posts/${id}
  const res = await axios.get(`http://localhost:3000/api/posts/${id}`,{
    next : {revalidate:3600},  // it will re validate data after every 10s
    // cache : "no-store"   // it will dynamicaly changes data everytime
  })
  if(!res.ok){
    return PageNotFoundError
  }
  return res.json()
}

export async function generateMetadata ({params}){
  const post = await getdata(params.id)
  return {
    title: post.title,
    description: post.desc
  }
}

const BlogPost = async ({params}) => {
  const data = await getdata(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <Image
            className={styles.avatar}
            src={data.img}
            alt=''
            height={50}
            width={50}/>
            <span className={styles.username}>Christopher Colombus</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
          className={styles.img}
          src={data.img}
          alt=''
          height={250}
          width={500}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {data.content}
        </p>
      </div>
    </div>
  )
}

export default BlogPost