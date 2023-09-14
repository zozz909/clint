import React from 'react';
// link
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
 

  // console.log(product);
  return (
    
    <Link to={`/product/${product.id}`}>
      <div className='grad w-full h-[362px] rounded-[8px] overflow-hidden relative group'>
        {/* badge */}
        {product.attributes.berand ? (
          <div style={{ backgroundColor: "#F6CD46", color: '#151618'}}  className='absolute   text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10'>
            Berand
            
            
          </div>
          
          
          
          
        ) : (
          
          ''
        )}

          
        {/* image */}
        
        <div className='w-full h-[200px] flex items-center justify-center relative'>
          
          <img
            className='w-[160px] h-[160px] group-hover:scale-90 transition-all'
            src={`http://85.31.237.113/${product.attributes.image.data.attributes.url}`}
            alt=''
          />
        </div>
        
        {/* text */}
        <div className='px-6 pb-8 flex flex-col'>
          {/* category title */}
          <div className=' text-[#EB5E28] text-xl capitalize mb-2 text-center'>
            {product.attributes.categories.data[0].attributes.title}
          </div>
          {/* title */}
          {/*}
          <div className='text-[15px] mb-4 lg:mb-9'>
            {product.attributes.title.substring(0, 35)}...
          </div>
          {/* price */}
          <span  className='text-lg text-[#EB5E28] line-through '><h2></h2>{product.attributes.disconttt} {product.attributes.discont} </span>

          <div className='text-xl text-[#EB5E28]'>SAR {product.attributes.price}</div>
        </div>
        
      </div>
      
    </Link>

  );
};

export default Product;
