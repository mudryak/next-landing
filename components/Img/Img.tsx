import React from 'react'
import Image from 'next/image'
import cx from 'classnames'

import cm from './Img.module.css'

interface ImgProps {
    src: string
    srcset?: string
    className?: string
    alt: string
    fill: boolean
}

export const Img: React.FC<ImgProps> = ({ src, className, alt, fill = false }) => {
  return (
    <div className={cx(cm.img, className)}>
      <Image src={src} alt={alt} fill={fill} />
    </div>
  )
}
