'use client'
import React, { useContext } from 'react'
import styles from './DarkModeToggle.module.css'
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';


const DarkModeToggle = () => {
  const {toggle,mode} = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}><FaMoon/></div>
        <div className={styles.icon}><FaSun/></div>
        <div 
        className={styles.ball}
        style={mode === 'light' ? {left:'2px'} : {right:'2px'}}
        />
    </div>
  )
}

export default DarkModeToggle