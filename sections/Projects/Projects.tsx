import React from 'react'
import cx from 'classnames'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'

import cm from './Projects.module.css'

export const Projects = () => {
  return (
    <div className={cx('white_block', cm.projects)}>
      <h2 className='text-center black_title'>Проекты</h2>
      <div className={cm.projects__list}>
        <ProjectCard
          src='/defihelper.png'
          description='Трекер твоего криптопортфеля с самых популярных бирж и автоматизации инвестиций'
          title='DEFIHELPER'
        />
        <div className={cm.projects__two_in_list}>
          <ProjectCard
            className={cm.projects_item}
            src='/sharapp.png'
            description='Платформа заказа бартерной рекламы у блогеров'
            title='SHAR APP'
          />
          <ProjectCard
            className={cm.projects_item}
            src='/keram.png'
            description='Магазин премиальной итальянской плитки'
            title='KERAM DESIGN'
          />
        </div>
        <ProjectCard
          src='/cluster.png'
          description='Расширяемый некастодиальный блокчейн кошелёк'
          title='CLUSTER ONE'
        />
      </div>
    </div>
  )
}
