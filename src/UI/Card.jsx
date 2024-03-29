import React from 'react'
import { tv } from 'tailwind-variants';
 
const Card = ({src , desc , fullName , jobTitle}) => {
    const card = tv({
      slots: {
        base: 'md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-gray-900',
        avatar:
          'size-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto drop-shadow-lg',
        wrapper: 'flex-1 pt-6 md:p-8 text-center space-y-6',
        description: 'text-md font-medium',
        infoWrapper: 'font-medium space-y-4',
        name: 'text-lg text-sky-500 dark:text-sky-400',
        role: 'text-sm text-slate-700 dark:text-slate-500'
      }
    });
    const { base, avatar, wrapper, description, infoWrapper, name, role } = card();
  return (
    <figure className={base()}>
    <img
      className={avatar()}
      src={src}
      alt=""
      width="384"
      height="512"
    />
    <div className={wrapper()}>
      <blockquote>
        <p className={description()}>
          {desc}
        </p>
      </blockquote>
      <figcaption className={infoWrapper()}>
        <div className={name()}>{fullName}</div>
        <div className={role()}>{jobTitle}</div>
      </figcaption>
    </div>
  </figure>
  )
}

export default Card