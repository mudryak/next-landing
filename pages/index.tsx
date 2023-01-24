import Head from 'next/head'
import Image from 'next/image'
import { AboutMe } from '../sections/AboutMe/AboutMe'
import { Projects } from '../sections/Projects/Projects'
import { Skills } from '../sections/Skills/Skills'
import { Values } from '../sections/Values/Values'
import { CallMe } from '../sections/CallMe/CallMe'
import { Img } from '../components/Img/Img'

import cm from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Slava Senatorov</title>
        <meta name='description' content='Slava Senatorov - Resume' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={cm.container}>
        <div className={cm.main}>
          <menu className={cm.menu}>
            <span className={cm.menu__logo}>slava senatorov</span>
            <a className={cm.menu__burger}>
              <Image
                src='menu/burger.svg'
                alt='Menu'
                width={46}
                height={32}
                priority
              />
            </a>
          </menu>
          <div className={cm.main_title__block}>
            <Img
              src='main_title.svg'
              alt='Main Title Logo'
              className={cm.main_title__img}
              fill
            />
          </div>
          <AboutMe />
          <Skills />
          <Projects />
          <Values />
          <CallMe />
        </div>
      </main>
    </>
  )
}
