import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/Logo.svg'
import styles from './header.module.scss'
export default function Header() {
  return (
      <header className={styles.header}>
        <div className={styles.header_section}>
          <img src="" alt="menu" />
        </div>
        <div className={styles.header_section}>
          <Image
            src={logo}
            alt="extra-beef-burger"
            width={70}
            height={70}
            quality={60}
            placeholder="blur"
            blurDataURL="../../public/images/1x1-cdcdcdff.png"
          />
        </div>
        <div className={styles.header_section}>
          <button className={styles.sign_in}>Sign in</button>
          <img src="" alt="cart" />
          <img src="" alt="ns" />
        </div>
      </header>
  )
}

