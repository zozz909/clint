import React, { useContext} from 'react';
// useParams hook
import { useParams } from 'react-router-dom';
// useFecth hook
import useFetch from '../hooks/useFetch';

// components
import RelatedProducts from '../components/RelatedProducts';
// context
import { CartContext } from '../context/CartContext';


import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';
// import required modules
import { Pagination } from 'swiper';

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  // get product data base on the id
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  if (!data) {
    return <div className='container mx-auto'>loading...</div>;
  }
  const sliderData = [
    {
      img:  `http://85.31.237.113/${data[0].attributes.image.data.attributes.url}`,
   
    },
      {
      img: `http://85.31.237.113/${data[0].attributes.imagee.data.attributes.url}`,
   
    },
  ]
  // category title
  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;


  
    

  return (
    



    <div className='mb-16 pt-44 lg:pt-[30px] xl:pt-0'>
      
      <div className='container mx-auto'>
        {/* text */}
        <div className='flex flex-col lg:flex-row gap-[30px] mb-[30px] row-auto'>
          
          <div className='flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center'>
          <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      style={{ backgroundColor: '#151618' }}className='mainSlider h-full  xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl'
    >
      <>
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className=' bg-white flex flex-col lg:flex-row h-full p-[60px] md:p-[50px]  row-auto'>
                {/* img */}
                <div className='flex-1 '>
                <img
              src={slide.img}
              alt=''
              className=''
            />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>

          </div>
        

       
   
        

  
       
          <div style={{ backgroundColor: "#ffffff"}} className='flex-1  p-12 xl:p-20 rounded-lg flex flex-col justify-center'>
            {/* category title */}
            <div className='uppercase text-[#EB5E28]  text-4xl font-semibold mb-2 bg-[#ffffff]'>
              {data[0].attributes.categories.data[0].attributes.title} 
            </div>
            {/* title */}
            <h2 className='h2 mb-4'>{data[0].attributes.title}</h2>
            {/* description */}
            <p className='mb-12 text-xl font-black text-[#EB5E28]'>{data[0].attributes.description}</p>
            {/* price & btn */}
            <div className='text-lg text-[#EB5E28] line-through'>{data[0].attributes.disconttt} {data[0].attributes.discont}</div>

            <div className='flex items-center gap-x-8'>
              {/* price */}
              
              

              <div className='text-3xl text-[#EB5E28] font-semibold input-group-text  '>
                
                SAR {data[0].attributes.price}
              </div>
              <button
                onClick={() => addToCart(data, id  )}
                className='btn btn-accent row input-group-text'
              >
                اضافه الى سلة
              </button>
              <div className='mb-10'>
              <dvi className='flex justify-between mb-2 '>
                <div className='text-md font text-xl  text-[#EB5E28] pl-2'>
                  
                </div>
               
               <div>
              
               </div>
                
              </dvi>
              




              </div>
             
            </div>
            
            
            
          </div>
        </div>
        
        {/* related products */}
        <RelatedProducts categoryTitle={categoryTitle} />
        
      </div>
      
    </div>
    
  );
};

export default ProductDetails;
