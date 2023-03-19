import React from 'react'

export default function About({image="https://via.placeholder.com/215",text}) {
  return (
    <aside>
      <img src={image} alt='blog logo' />
      <p>{text}</p>
    </aside>
  )
}
