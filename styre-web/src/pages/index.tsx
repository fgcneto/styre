import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { ldscn } from '../styles/lds/ldsTsExport'
import arrowIconAgile from '../assets/arrow-icon-agile.png'
import arrowIconPiggy from '../assets/arrow-icon-piggy.png'
import arrowIconBusiness from '../assets/arrow-icon-business.png'
import InputLogin from '../components/inputs/Inputlogin'
import Logo from '../components/logo'
import ButtonFilled from '../components/buttons/ButtonFilled'

import { useAuth } from '../contexts/Auth'
import { useState } from 'react'

const Home: NextPage = () => {
  const { signIn } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassowrd] = useState('')

  return (
    <div className={styles.container}>
      <Head>
        <title>Styre</title>
        <meta name="description" content="Styre" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.arrowIconAgile}>
          <Image src={arrowIconAgile} alt="Logo Config" />
        </div>
        <div className={styles.arrowIconPiggy}>
          <Image src={arrowIconPiggy} alt="Logo Piggy" />
        </div>
        <div className={styles.arrowIconBusiness}>
          <Image src={arrowIconBusiness} alt="Logo Business" />
        </div>

        <div className={styles.loginContainer}>
          <div className={styles.loginContainerWrapper}>
            <Logo />
            <div className={styles.heading}>Log in</div>
            <div>
              <InputLogin
                className={styles.inputLogin}
                value={username}
                onChange={e => setUsername(e.target.value)}
                label="Nome de Usuário"
              />
            </div>
            <div>
              <InputLogin
                className={styles.inputLogin}
                value={password}
                onChange={e => setPassowrd(e.target.value)}
                label="Senha"
              />
            </div>
            <ButtonFilled
              onClick={() => signIn({ username, password })}
              className={
                ldscn.colorBg.ldsPrimary700 +
                ldscn.colorText.ldsShade0 +
                ldscn.texts.bodyMedium +
                styles.buttonsFilled
              }
            >
              Entrar
            </ButtonFilled>
            <div className={styles.buttonTertiaryWrapper}>
              <div className={styles.buttonForgotPassword}>
                <p className={styles.textForgotPassword}>Esqueci minha senha</p>
              </div>
              <div className={styles.buttonRequestAccess}>
                <p className={styles.textRequestAccess}>Solicitar acesso</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
