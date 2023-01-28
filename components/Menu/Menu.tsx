import React, { useState } from 'react'
import cx from 'classnames'

import cm from './Menu.module.css'

export const Menu = () => {
  const [show, setShow] = useState(false)

  const handleClick = () => setShow(!show)
  return (
    <div className={cx(cm.menu, show && cm.menu_active)}>
      <div className={cm.menu__line}>
        <span>Slava senatorov</span>
        <a onClick={handleClick} className={cm.menu__btn}>
          <div className={cm.menu__icon} />
        </a>
      </div>
      <ul className={cx(cm.menu__list, show && cm.menu__list_active)}>
        <li>ОБО мне</li>
        <li>скилы</li>
        <li>проекты</li>
        <li>ценности</li>
        <li>контакты</li>
        <li>скачать CV</li>
      </ul>
    </div>
  )
}
