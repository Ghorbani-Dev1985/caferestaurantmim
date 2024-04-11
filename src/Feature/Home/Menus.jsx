import React from 'react'
import Title from '../../UI/Title'
import { Link } from 'react-router-dom'

const Menus = () => {
  return (
    <Link to="/menus">
       <Title text=" منو کافه و رستوران"/>
    </Link>
  )
}

export default Menus
