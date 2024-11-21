import React from 'react'
import { Box, Button, Divider, IconButton, Typography} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import styled from '@emotion/styled'
import { shades } from '../../theme'
import {
    decreaseCount,
    increaseCount,
    removeFromCart,
    setIsCartOpen,   
} from '../../state/index'
import { useNavigate } from 'react-router-dom'
import './CartMenu.css'

const CartMenu = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cart)
    const isCartOpen = useSelector((state) => state.cart.isCartOpen)

    const totalPrice = cart.reduce((total, item) => {
        return total + item.count * item.attributes.price
    }, 0);

  return (
    <div style={{ display: isCartOpen ? 'block' : 'none' }} className='cart-overlay'>

        <div className='cart-menu'>
            <div style={{padding: '30px', overflow: 'auto', height: '100%'}}>
                {/* HEADER */}
                <div className='flex-box' style={{marginBottom: '15px'}}>
                    <Typography variant='h3'>
                        SHOPPING BAG ({cart.length})
                    </Typography>
                    <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
                        <CloseIcon />
                    </IconButton>
                </div>

                {/* CART LIST */}
                <div>
                    {cart.map((item) =>  (
                        <div key={`${item.attributes.name}-${item.id}`}>
                            <div className='flex-box' style={{padding: '15px 0'}}>
                                <div style={{flex: '1 1 40%'}}>
                                    <img src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`} 
                                    alt={item?.name} 
                                    width='123px' 
                                    height='164px'  />
                                </div>
                                <div style={{flex: '1 1 60%'}}>
                                    
                                    {/* ITEM NAME */}
                                    <div className='flex-box' style={{marginBottom: '5px'}}>
                                        <Typography fontWeight='bold'>
                                            {item.attributes.name}
                                        </Typography>
                                        <IconButton onClick={() => dispatch(removeFromCart({ id: item.id }))}>
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                    <Typography>
                                        {item.attributes.shortDescription}
                                    </Typography>

                                    {/* AMOUNT */}
                                    <div className='flex-box' style={{margin: '15px 0'}}>
                                        <div style={{display: 'flex', alignItems: 'center', border: `1.5px solid ${shades.neutral[500]}`}}>
                                            <IconButton onClick={() => dispatch(decreaseCount({ id: item.id }))}>
                                                <RemoveIcon />
                                            </IconButton>
                                            <Typography>{item.count}</Typography>
                                            <IconButton onClick={() => dispatch(increaseCount({ id: item.id }))}>
                                                <AddIcon />
                                            </IconButton>
                                        </div>
                                         {/* PRICE */}
                                         <Typography fontWeight='bold'>${item.attributes.price}</Typography>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                        </div>
                    ))}
                </div>
                
                {/* ACTIONS */}
                <div style={{margin: '20px 0'}}>
                    <div className="flex-box" style={{margin:'20px 0'}}>
                        <Typography fontWeight='bold'>SUBTOTAL</Typography>
                        <Typography fontWeight='bold'>${totalPrice}</Typography>
                    </div>
                    <button style={{
                        backgroundColor: shades.primary[400], 
                        color: 'white', 
                        borderRadius: '0', 
                        minWidth: '100%', 
                        padding: '20px 40px', 
                        margin: '20px 0'}}
                        onClick={() => {
                            navigate('/checkout');
                            dispatch(isCartOpen({}))
                        }}>
                            CHECKOUT
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CartMenu