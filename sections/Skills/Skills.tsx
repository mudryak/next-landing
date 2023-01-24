import React from 'react'
import cx from 'classnames'
import { Img } from '../../components/Img/Img'

import cm from './Skills.module.css'

export const Skills = () => {
  return (
    <div className={cx('black_block', cm.skills)}>
      {/* <Img className={cm.skill__title} src='skill_title.svg' alt='Skill title' fill /> */}
      <h2 className='text-center'>Скиллы</h2>
      <div className={cm.skill__text}>
        <h3>Харды</h3>
        <p>
          Дизайню в Figma, могу сделать интерактив в ProtoPie, задачки фиксирую
          в Trello, для заметок и личных задач использую TIckTick, презы собираю
          в Notion. Еще я знаком с методологиями JTBD, CJM и методом персон.
          JTBD успешно применял в работе. Более формально про мои навыки можно
          почитать в CV (тык).
        </p>
        <h3>Софты</h3>
        <p>
          Могу с удовольствием сам встретиться с клиентом и провести интервью с
          пользователем. Люблю и с уважением отношусь к своей команде. Ценю
          обратную связь, а если могу сам поделиться чем-то полезным — всегда
          открыт к диалогу. А еще у меня есть обширная библиотека отборных мемов
          (тык) на любой вкус для поддержания настроения.
        </p>
      </div>
    </div>
  )
}
