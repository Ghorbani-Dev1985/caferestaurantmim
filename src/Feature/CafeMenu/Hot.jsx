import React from 'react'
import { MenuTitle } from '../../UI/MenuTitle'
import data from '../../Data/data.json'
import MenuItemsCard from '../../UI/MenuItemsCard'
const Hot = () => {
  return (
    <>
      <MenuTitle id="hot" title="نوشیدنی گرم"/> 
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          
         {
            data.hotMenu.map(({id , src , title , subTitle , price})=> (
                <React.Fragment key={id}>
                    <MenuItemsCard src={src} title={title} subTitle={subTitle} price={price}/>
                </React.Fragment>
            ))
         }
        </div>
    </>
  )
}

export default Hot
