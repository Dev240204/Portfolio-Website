"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.modules.css'

const links = [
    {
        id:1,
        title:"Home",
        url:"/"
    },
    {
        id:2,
        title:"Portfolio",
        url:"/portfolio"
    },
    {
        id:3,
        title:"Blog",
        url:"/blog"
    },
    {
        id:4,
        title:"Contact",
        url:"/contact"
    },
    {
        id:5,
        title:"About",
        url:"/about"
    },
    {
        id:6,
        title:"Dashboard",
        url:"/dashboard"
    },
]
const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>lorem</Link>
        <div className={styles.links}>
            {links.map(link=>(
                <Link href={link.url} key={link.id} className={styles.link}>{link.title}</Link>
            ))}
            <button onClick={()=>{console.log("logged Out")}}>
                Logout
            </button>
        </div>
    </div>
  )
}

export default Navbar