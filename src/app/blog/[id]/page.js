import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { PageNotFoundError } from 'next/dist/shared/lib/utils'

async function getdata(id){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    // next : {revalidate:10},  // it will re validate data after every 10s
    cache : "no-store"   // it will dynamicaly changes data everytime
  })
  if(!res.ok){
    return PageNotFoundError
  }
  return res.json()
}

const BlogPost = async ({params}) => {
  const data = await getdata(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {/* Lorem, ipsum dolor sit amet consectetur */ data.title}
          </h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus voluptates debitis at ad? Neque eaque explicabo impedit temporibus expedita vitae. Magnam atque distinctio soluta.
          </p>
          <div className={styles.author}>
            <Image
            className={styles.avatar}
            src='/avatar.jpg'
            alt=''
            height={50}
            width={50}/>
            <span className={styles.username}>Christopher Colombus</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
          className={styles.img}
          src='/blogport1.jpg'
          alt=''
          height={250}
          width={500}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto amet quis voluptatibus rem ab error? Quo placeat tempora magnam voluptates dolorem hic veniam repudiandae odit quos rerum facere facilis pariatur, distinctio maxime neque, ab numquam. Aut modi dolorem quis tenetur corporis facere similique quod nobis ratione unde, vel ea dolor.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis labore voluptatum fuga fugit vel, adipisci optio ratione perspiciatis tempora, dolor cum saepe. Excepturi, ratione. Quaerat, ipsum iure fugiat sed ut veritatis dignissimos dolor commodi nesciunt.
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur rem quidem eos sit culpa temporibus quis eaque ab amet libero!
        </p>
      </div>
    </div>
  )
}

export default BlogPost