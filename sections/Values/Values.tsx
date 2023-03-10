import React from 'react'
import cx from 'classnames'
import { MAIN_SECTION_IDS } from '../../constants/MAIN_SECTION'

import cm from './Values.module.css'

export const Values = () => {
  return (
    <div id={MAIN_SECTION_IDS.VALUES} className={cx('black_block', cm.values)}>
      <h2 className='text-center'>ЦЕННОСТИ</h2>
      <div className={cm.values__item}>
        <h3>Расширяй горизонты</h3>
        <p>
          Развивать свои навыки можно не только изучая профильный материал. В
          свободное время я с удовольствием хожу на вокал и занятия по
          рисованию. Помимо морального удовлетворения, эти занятия помогают
          развить креативное мышление, что позитивно сказывается и на работе :)
        </p>
      </div>
      <div className={cm.values__item}>
        <h3>Страсть = движение</h3>
        <p>
          Если не получать удовольствие от того, что делаешь — лучше делать
          что-то другое. Направляя свою энергию в то, что действительно в кайф,
          мы добиваемся настоящих результатов. Зачем тратить жизнь на то, что не
          заставляет двигаться вперед?
        </p>
      </div>
      <div className={cm.values__item}>
        <h3>Be humble</h3>
        <p>
          Неважно насколько ты преисполнился в своем развитии, и чем ты
          занимаешься. Уважать и поддерживать других людей — залог здоровых
          отношений в жизни и внутри коллектива. Stay true, stay humble.
        </p>
      </div>
    </div>
  )
}
