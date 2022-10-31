import React from 'react'
import {MenuList} from '../data/data'
import MenuItem from './MenuItem';
import '../styles/Menu.css'
function Menu() {
  return (
    <div className='menu'>
        <div className='menuTitle'>
            <div className='menuList'>
                
                {MenuList.map((menuItem, key) => {return (<MenuItem key = {key} image = {menuItem.image} name = {menuItem.name} price = {menuItem.price}/>)})}
            </div>
        </div>
    </div>
  )
}

export default Menu