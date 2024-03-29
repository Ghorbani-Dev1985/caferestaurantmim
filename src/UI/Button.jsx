import { tv } from 'tailwind-variants';
 
// const baseButton = tv({
//     base: [
//       'font-semibold',
//       'dark:text-white',
//       'py-1',
//       'px-3',
//       'rounded-full',
//       'active:opacity-80',
//       'bg-zinc-100',
//       'hover:bg-zinc-200',
//       'dark:bg-zinc-800',
//       'dark:hover:bg-zinc-800'
//     ]
//   });
   
//   const buyButton = tv({
//     extend: baseButton,
//     base: [
//       'text-sm',
//       'text-white',
//       'rounded-lg',
//       'shadow-lg',
//       'uppercase',
//       'tracking-wider',
//       'bg-green-500',
//       'hover:bg-green-600',
//       'shadow-green-500/50',
//       'dark:bg-green-500',
//       'dark:hover:bg-green-600'
//     ]
//   });
const button = tv(
    {
      base: 'font-semibold text-white py-1 px-3 rounded-full active:opacity-80',
      variants: {
        color: {
          primary: 'bg-blue-500 hover:bg-blue-700',
          secondary: 'bg-purple-500 hover:bg-purple-700',
          success: 'bg-green-500 hover:bg-green-700'
        },
        size: {
          small: 'py-0 px-2 text-xs',
          medium: 'py-1 px-2 text-md',
          large: 'py-1.5 px-3 text-lg',
          xlarge: 'py-2.5 px-6 text-xl',
          xxlarge: 'py-3.5 px-8 text-2xl'
        }
      }
    },
    {
      responsiveVariants: ['sm', 'md' , 'lg' , 'xl' , 'xxl'] // `true` to apply to all screen sizes
    }
  );
   
  button({
    color: {
      initial: 'primary',
      sm: 'success',
      md: 'secondary'
    },
    size: {
      initial: 'small',
      md: 'medium',
      lg: 'large',
      xl: 'xlarge',
      xxl: 'xxlarge'
    }
  });
const Button = ({children}) => {

  return (
    <button className={  button({
        color: {
          initial: 'primary',
          sm: 'success',
          md: 'secondary'
        },
        size: {
          initial: 'small',
          sm: 'medium',
          md: 'large'
        }
      })}>
    {children}
  </button>
  )
}

export default Button