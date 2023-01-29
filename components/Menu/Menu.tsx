import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'
import { useAppContext, THEMES } from '../../pages/_app'
import { MAIN_SECTION_IDS } from '../../constants/MAIN_SECTION'

import cm from './Menu.module.css'

export const Menu = () => {
  const { theme } = useAppContext()
  const [show, setShow] = useState(false)

  const router = useRouter()

  const handleClickRoute = (path: string) => {
    router.push(path)
    setShow(false)
  }

  const handleClickSection = (id: string) => {
    const element = document.getElementById(id)

    try {
      element && element.scrollIntoView({ behavior: 'smooth' })
    } catch (_err) {}

    setShow(false)
  }

  const handleClick = () => setShow(!show)
  return (
    <div className={cx(cm.menu, show && cm.menu_active, cm[theme])}>
      <div className={cm.menu__line}>
        <span>Slava senatorov</span>
        <a onClick={handleClick} className={cm.menu__btn}>
          <div className={cm.menu__icon} />
        </a>
      </div>
      <ul className={cx(cm.menu__list, show && cm.menu__list_active)}>
        <li onClick={() => handleClickRoute('/')}>ОБО мне</li>
        <li onClick={() => handleClickSection(MAIN_SECTION_IDS.SKILLS)}>скилы</li>
        <li onClick={() => handleClickSection(MAIN_SECTION_IDS.PROJECTS)}>проекты</li>
        <li onClick={() => handleClickSection(MAIN_SECTION_IDS.VALUES)}>ценности</li>
        <li onClick={() => handleClickSection(MAIN_SECTION_IDS.CV)}>контакты</li>
        <li>скачать CV</li>
      </ul>
    </div>
  )
}
