import { tv } from 'tailwind-variants';
const Alert = () => {
    
   const alert = tv({
     slots: {
       root: 'rounded py-3 px-5 mb-4',
       title: 'font-bold mb-1',
       message: ''
     },
     variants: {
       variant: {
         outlined: {
           root: 'border'
         },
         filled: {
           root: ''
         }
       },
       severity: {
         error: '',
         success: ''
       }
     },
     compoundVariants: [
       {
         variant: 'outlined',
         severity: 'error',
         class: {
           root: 'border-red-700 dark:border-red-500',
           title: 'text-red-700 dark:text-red-500',
           message: 'text-red-600 dark:text-red-500'
         }
       },
       {
         variant: 'outlined',
         severity: 'success',
         class: {
           root: 'border-green-700 dark:border-green-500',
           title: 'text-green-700 dark:text-green-500',
           message: 'text-green-600 dark:text-green-500'
         }
       },
       {
         variant: 'filled',
         severity: 'error',
         class: {
           root: 'bg-red-100 dark:bg-red-800',
           title: 'text-red-900 dark:text-red-50',
           message: 'text-red-700 dark:text-red-200'
         }
       },
       {
         variant: 'filled',
         severity: 'success',
         class: {
           root: 'bg-green-100 dark:bg-green-800',
           title: 'text-green-900 dark:text-green-50',
           message: 'text-green-700 dark:text-green-200'
         }
       }
     ],
     defaultVariants: {
       variant: 'filled',
       severity: 'success'
     }
   });
   const { root, message, title } = alert();
 
  return (
    <>
    <div className={root()}>
    <div className={title()}>Oops, something went wrong</div>
    <div className={message()}>
      Something went wrong saving your changes. Try again later.
    </div>
  </div>
  <section label="Select color:">
        <label htmlFor='success'>success<input type='radio' value="success" onChange={(e) => setColor(e.target.value)} name='alert' id='success'/></label>
        <br />
        <label htmlFor='error'>error<input type='radio' value="error" onChange={(e) => setColor(e.target.value)} name='alert' id='error'/></label>
        <br />
        <label htmlFor='filled'>filled<input type='radio' value="filled" onChange={(e) => setColor(e.target.value)} name='alert' id='filled'/></label>
        <br/>
        <label htmlFor='outlined'>outlined<input type='radio' value="outlined" onChange={(e) => setColor(e.target.value)} name='alert' id='outlined'/></label>
      </section>
    </>
  )
}

export default Alert