import React from 'react'
import { tv } from 'tailwind-variants';
 
const pagination = tv({
  slots: {
    base: 'flex flex-wrap relative gap-1 max-w-fit my-8',
    item: 'data-[active="true"]:bg-blue-500 data-[active="true"]:text-white rounded-md',
    prev: 'rounded-md',
    next: 'rounded-md'
  },
  variants: {
    size: {
      xs: {},
      sm: {},
      md: {}
    }
  },
  defaultVariants: {
    size: 'md'
  },
  compoundSlots: [
    // if you dont specify any variant, it will always be applied
    {
      slots: ['item', 'prev', 'next'],
      class: [
        'flex',
        'flex-wrap',
        'truncate',
        'box-border',
        'outline-none',
        'items-center',
        'justify-center',
        'bg-neutral-100',
        'hover:bg-neutral-200',
        'active:bg-neutral-300',
        'text-neutral-500'
      ] // --> these classes will be applied to all slots
    },
    // if you specify a variant, it will only be applied if the variant is active
    {
      slots: ['item', 'prev', 'next'],
      size: 'xs',
      class: 'w-7 h-7 text-xs' // --> these classes will be applied to all slots if size is xs
    },
    {
      slots: ['item', 'prev', 'next'],
      size: 'sm',
      class: 'w-8 h-8 text-sm' // --> these classes will be applied to all slots if size is sm
    },
    {
      slots: ['item', 'prev', 'next'],
      size: 'md',
      class: 'w-9 h-9 text-base' // --> these classes will be applied to all slots if size is md
    }
  ]
});
const Pagination = () => {
    const { base, item, prev, next } = pagination();
  return (
    <ul aria-label="pagination navigation" className={base()}>
    <li
      aria-label="Go to previous page"
      className={prev()}
      data-disabled="true"
      role="button"
    >
      {'<'}
    </li>
    <li aria-label="page 1" className={item()} role="button">
      1
    </li>
    <li aria-label="page 2" className={item()} role="button">
      2
    </li>
    <li
      aria-label="page 3"
      className={item()}
      data-active="true"
      role="button"
    >
      3
    </li>
    <li aria-label="page 4" className={item()} role="button">
      4
    </li>
    <li aria-label="page 5" className={item()} role="button">
      5
    </li>
    <li aria-hidden="true" className={item()} role="button">
      ...
    </li>
    <li aria-label="page 10" className={item()} role="button">
      10
    </li>
    <li aria-label="Go to next page" className={next()} role="button">
      {'>'}
    </li>
  </ul>
  )
}

export default Pagination