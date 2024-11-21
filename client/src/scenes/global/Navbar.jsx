import React from 'react'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { Badge, Box, IconButton } from '@mui/material'
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { shades } from '../../theme'
import { setIsCartOpen } from '../../state/index'

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart)

  return (
      <div className='navbar-outer'>

        <div className="navbar-inner">
          <div className="navbar-logo" onClick={() => Navigate('/')} style={{color:shades.secondary[500]}}>
            ECOMMER
          </div>
          <div className="navbar-icons">
            <IconButton sx={{color: 'black'}}>
              <SearchOutlined />
            </IconButton>

            <IconButton sx={{color: 'black'}}>
              <PersonOutline />
            </IconButton>

            <Badge  badgeContent={cart.length} 
                    color='secondary' 
                    invisible={cart.length === 0} 
                    sx={{'&MuiBadge-badge' : {
                      right: 5, 
                      top: 5, 
                      padding: '0 4px', 
                      height: '14px', 
                      minWidth: '13px'}}}>
            <IconButton sx={{color: 'black'}} onClick={() => dispatch(setIsCartOpen({}))}>
              <ShoppingBagOutlined />
            </IconButton>
            </Badge>

            <IconButton sx={{color: 'black'}}>
              <MenuOutlined />
            </IconButton>
          </div>
        </div>

      </div>
  )
}

export default Navbar