import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/button'
import { items } from './data'
import { PageNotFoundError } from 'next/dist/shared/lib/utils'

const getData = (cat)=>{
  const data = items[cat]

  if(data){
    return data
  }
  return PageNotFoundError
}

const Category = ({params}) => {
  const data = getData(params.category)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item)=>(
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.desc}>{item.desc}</div>
            <Button url='#' text='See More'></Button>
          </div>
          <div className={styles.imgContainer}>
            <Image
            className={styles.img}
            src={item.image}
            alt=''
            fill={true}
            ></Image>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category