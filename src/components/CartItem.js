import React, { useContext } from 'react';
// link
import { Link } from 'react-router-dom';
// icons
import { IoClose } from 'react-icons/io5';
// components
import Qty from '../components/Qty';
// context
import { CartContext } from '../context/CartContext';


const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className='flex gap-x-8'>
      <Link to={`product/${item.id}`} className='w-[70px] h-[70px]'>
        <img
          src={`http://85.31.237.113/${item.attributes.image.data.attributes.url}`}
          alt=''
        />
      </Link>
      <div className='flex-1'>
        {/* title & remove icon */}
        <div className='flex gap-x-4 mb-3'>
          <Link to={`product/${item.id}`}>{item.attributes.title}</Link>
          <div
            onClick={() => removeFromCart(item.id)}
            className='cursor-pointer text-[24px] hover:text-[#EB5E28] transition-all'
          >
            <IoClose />
          </div>
        </div>
        <div className='flex items-center gap-x-12'>
          {/* quantity */}
          <div className='flex gap-x-4 mb-2'>
            <Qty item={item} />
          </div>
          <div className='text-[#EB5E28] text-xl'>
            
            SAR {item.attributes.price * item.amount}
          </div>
        </div>

        <div>



        </div>

        
        {/* price */}
        <div>
          <span className='text-[#EB5E28]'>
            SAR {item.attributes.price} per piece
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
