import { useRouter } from 'next/router'
import useSWR from 'swr'
import Image from 'next/image'
import Layout from '../../components/Layout/layout'
import styles from './details.module.scss'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Category() {
  const { query } = useRouter()
  const { data, error2 } = useSWR(
    () => query.id && `/api/categories/${query.id}`,
    fetcher
  )

  if (error2) return <div>{error2.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <div className={styles.details_wrapper}>
        <h1>Category</h1>
        <div className={styles.details_image}>
          <div>
            <Image
              src={data.image}
              alt="extra-beef-burger"
              width={300}
              height={270}
            />
          </div>
        </div>
      </div>
    </>
  )
}


Category.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}