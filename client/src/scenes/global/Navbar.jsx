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

const Navbar = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

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
            <IconButton sx={{color: 'black'}}>
              <ShoppingBagOutlined />
            </IconButton>
            <IconButton sx={{color: 'black'}}>
              <MenuOutlined />
            </IconButton>
          </div>
        </div>

      </div>
  )
}

export default Navbar