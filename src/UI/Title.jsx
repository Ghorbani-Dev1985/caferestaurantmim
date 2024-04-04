import { Image } from '@nextui-org/react'
import React from 'react'
import DividerImg from './../Assets/Images/Main/title.webp'
const Title = ({text}) => {
  return (
    <section className='container flex flex-col items-center'>
      <h2>{text}</h2>
      <Image
      alt="ghorbani-dev.ir"
      src={DividerImg}
      className='object-fill'
      />
    </section>
  )
}

export default Title
