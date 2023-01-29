import React from 'react'

import cm from './defihelper.module.css'

export default function Defihelper() {
  return (
    <div>
      <div className={cm.infinity_line}>
        {Array(50)
          .fill(0)
          .map((_v, index) => (
            <span key={index}>DEFIHELPER</span>
          ))}
      </div>
    </div>
  )
}
