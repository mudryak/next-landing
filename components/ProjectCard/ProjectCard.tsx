import React from 'react'
import Link from 'next/link'
import cx from 'classnames'
import { Img } from '../Img/Img'

import cm from './ProjectCard.module.css'

interface ProjectCard {
  className?: string
  src: string
  description: string
  title: string
  link: string
}

export const ProjectCard: React.FC<ProjectCard> = ({
  className,
  src,
  description,
  title,
  link,
}) => {
  return (
    <Link href={link} className={cx(cm.card, className)}>
      <Img className={cm.card__img} src={src} alt='Project img' fill />
      <div className={cm.card__text}>
        <h3 className={cm.card__title}>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  )
}
