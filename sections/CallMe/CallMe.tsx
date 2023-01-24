import React from 'react'
import cx from 'classnames'
import {} from 'next/server'
import { Img } from '../../components/Img/Img'

import cm from './CallMe.module.css'

export const CallMe = () => {
  return (
    <div className={cx('white_block', cm.call)}>
      <h2 className='black_title text-center'>КОЛЛ МИ МЕЙБИ?</h2>
      <div className={cm.call__items}>
        <div className={cm.call__item}>
          <h3>Телеграм</h3>
          <p>@ssenatorov</p>
          <button>Написать</button>
        </div>
        <div className={cm.call__item}>
          <h3>Резюмешка</h3>
          <p>В PDF формате</p>
          <button>Скачать</button>
        </div>
        <div className={cm.call__item}>
          <h3>Электропочта</h3>
          <p>senatorov.slk@gmail.com</p>
          <button>Отправить письмо</button>
        </div>
      </div>
    </div>
  )
}
