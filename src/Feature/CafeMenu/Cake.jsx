import React from 'react'
import { MenuTitle } from '../../UI/MenuTitle'
import data from '../../Data/data.json'
import MenuItemsCard from '../../UI/MenuItemsCard'
const Cake = () => {
  return (
    <>
      <MenuTitle id="cake" title="   کیک دسر بستنی"/> 
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          
         {
            data.cake.map(({id , src , title , subTitle , price})=> (
                <React.Fragment key={id}>
                    <MenuItemsCard src={src} title={title} subTitle={subTitle} price={price}/>
                </React.Fragment>
            ))
         }
        </div>
    </>
  )
}

export default Cake
