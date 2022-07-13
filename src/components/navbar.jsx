import React from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='left'>
            <div className='language'>En</div>
            <div className='search-bar'>
                <input placeholder='Your First Wish'></input>
                <SearchIcon cursor='pointer'/>
            </div>
        </div>

        <div className='centre'>
            <span className='goat'>GOAT</span>
            <span className='ed'>ed</span>
        </div>

        <div className='right'>
            <div className='menu-item'>
                Register
            </div>
            <div className='menu-item'>
                Sign In
            </div>
            <div className='menu-item'>
                <Badge badgeContent={4} color="primary" className='cart-icon'>
                    <ShoppingCartOutlinedIcon />
                </Badge>
            </div>
        </div>
    </div>
  )
}

export default Navbar