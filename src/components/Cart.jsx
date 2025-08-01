import React from 'react'
import ItemList from './ItemList'
import { useDispatch, useSelector } from 'react-redux'
import { clearcart } from '../utils/CardSlice'

const Cart = () => {

    const cartitems = useSelector((store)=>store.cart.items)

    const dispatch = useDispatch()

    const handleclearcart=()=>{
        dispatch(clearcart())
    }
    
  return cartitems.length===0? <h1 className='mt-24 text-2xl font-bold text-center'>Cart is empty</h1> : (
    <div>
        <h1 className='text-2xl font-bold text-center'>Cart</h1>
     
        <div className='w-[1000px] mx-auto'>
        <button onClick={handleclearcart} className='p-2 py-3 font-medium text-green-500 bg-gray-100 rounded-2xl cursor-pointer'> ❌Clear Cart</button>
            <ItemList items={cartitems}/>
           
        </div>

    </div>
  )
}

export default Cart