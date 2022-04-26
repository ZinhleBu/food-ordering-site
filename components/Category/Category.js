import Link from 'next/link'
import Image from 'next/image'
import styles from './category.module.scss'

export default function Category({ category }) {
  return (
    <li className={styles.card}>
      <Link href="/category/[id]" as={`/category/${category.id}`} passHref>
        <a className={styles.card}>
          <div>
            <Image
              src={category.image}
              width={300}
              height={200}
            />
          </div>
        </a>
      </Link>
    </li>
  )
}
