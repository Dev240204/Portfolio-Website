'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'


const Dashboard = () => {

  // *** using useEffect***

  // const [data,setData] = useState([])
  // const [err,setErr] = useState(false)
  // const [isloading,setIsloading] = useState(false)
  
  // useEffect(()=>{
  //   async function getdata(){
  //     setIsloading(true)
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
  //       // next : {revalidate:10},  // it will re validate data after every 10s
  //       cache : "no-store"   // it will dynamicaly changes data everytime
  //     })
  //     if(!res.ok){                                               
  //       setErr(true)
  //     }
  //     const data = await res.json()
  //     setData(data)
  //     setIsloading(false)
  //   }
  //   getdata()
  // },[])
  


  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard