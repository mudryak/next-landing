import React from 'react'
import Image from 'next/image'
import cx from 'classnames'
import { Img } from '../Img/Img'

import cm from './ProjectCard.module.css'

interface ProjectCard {
  className?: string
  src: string
  description: string
  title: string
}

export const ProjectCard: React.FC<ProjectCard> = ({
  className,
  src,
  description,
  title,
}) => {
  return (
    <div className={cx(cm.card, className)}>
      <Img className={cm.card__img} src={src} alt='Project img' fill />
      <div className={cm.card__text}>
        <h3 className={cm.card__title}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
