import React from 'react'
import cx from 'classnames'
import { Img } from '../../components/Img/Img'

import cm from './AboutMe.module.css'

export const AboutMe = () => {
  return (
    <div className={cx(cm.about_me, 'white_block')}>
      <div className={cm.about_me__block}>
        <div className={cm.about_me__text}>
          <h3>Обо мне</h3>
          <p>
            Привет! Меня зовут Слава. Каждый день мной движет желание делать
            окружающий мир удобнее и изучать новое. Чтобы удовлетворить это
            желание, я выбрал для себя путь дизайнера и с огромным удовольствием
            иду по нему.
          </p>
          <div className={cm.about_me__buttons}>
            <button>Linkedin</button>
            <button>Telegram</button>
          </div>
        </div>
        <Img className={cm.about_me__img} src='/about_me.svg' alt='Me' fill />
      </div>
    </div>
  )
}
