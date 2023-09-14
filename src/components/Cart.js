import React, { useContext } from 'react';
// icons
import { IoArrowForward, IoCartOutline, IoClose } from 'react-icons/io5';
// context
import { CartContext } from '../context/CartContext';
// components
import CartItem from '../components/CartItem';

import { json, useNavigate } from 'react-router-dom';



const Cart = () => {
  const { setIsOpen, cart, total, clearCart , discontt} = useContext(CartContext);

  const navigate = useNavigate();

const handlechec = async () => {
  navigate("/CartFinsh")
  setIsOpen(false)
  
  }

  const handlexit = async () => {
    setIsOpen(false)
    
    }


  
  return (
    <div className='w-full h-full px-10 text-white bg-[#ffffff] '>
      <div className='overflow-y-auto overflow-x-hdden h-[50vh] row'>
        {/* close icon */}
        <div 
            onClick={() => handlexit(false)}
         
            
            style={{ color: '#000000'}}  className='row text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer'
        >
          <IoClose />
        </div>
        <div className='flex flex-col gap-y-10 px-1'>
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      </div>
      {/* subtotal & total */}
      {cart.length >= 1 && (
        <div className='px-6 py-10 flex flex-col'>
          {/* subtotal */}
          <div className='flex justify-between text-lg'>
            <div className='text-[#EB5E28]'>Subtotal</div>
            <div className='text-[#EB5E28]'>SAR {total}</div>


          </div>
          <div className='flex justify-between text-lg'>
          <div  className='text-[#EB5E28] '>discont</div>
          <div className='text-[#EB5E28]  line-through'>SAR {discontt}</div>
          </div>

          

          {/* total */}
          <div className='flex justify-between text-2xl'>
            <div className='text-[#EB5E28]'>Total</div>
            <div className='text-[#EB5E28] '>SAR {total}</div>
          </div>
        </div>
      )}

      {/* buttons */}
      <div className='px-6'>
        {cart.length >= 1 ? (
          <div className='flex justify-between gap-x-4'>
            <button
              onClick={clearCart}
              style={{ backgroundColor: "#EB5E28", color: '#151618'}} className='btn btn-accent '
            >
              تنظيف السلة
            </button>
            <button
              onClick={handlechec}

              style={{ backgroundColor: "#EB5E28", color: '#151618'}} className='btn btn-accent  flex-1 px-2 gap-x-2'
            >
              اكمال الطلب
              <IoArrowForward className='text-lg' />
            </button>=
          </div>
        ) : (
          <div className='h-full absolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col text-white/30'>
            <div className='text-2xl'>السلة فارغه</div>
            <div className='text-6xl'>
              <IoCartOutline />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
