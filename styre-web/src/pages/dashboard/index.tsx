import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { useEffect } from 'react'
import NavBar from '../../components/navbar'
import { ApiService as api } from '../../services/api'
import CardContainer from '../cardContainer'
import styles from './styles.module.scss'

export default function Home() {
  useEffect(() => {
    const { 'nextauth-token': cookie } = parseCookies()
    if (cookie) {
      api.setToken(cookie)
    }
    api.get('/hello/super').then(res => {})
  }, [])

  return (
    <div className={styles.main}>
      <NavBar />
      <CardContainer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { ['nextauth-token']: token } = parseCookies(context)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
