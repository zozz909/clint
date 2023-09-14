import React from 'react';
// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../slider.css';
// import required modules
import { Pagination } from 'swiper';
// img
import CameraImg from '../img/nna.jpg';

// data
const sliderData = [
  {
    img: CameraImg,
    pretitle: 'عروض خاص',
    titlePart1: 'جميع المنتجات ',
    titlePart2: 'عليها خصم تصل الى 80%',
    titlePart3: '',
    btnText: 'تصفح',
  },
  {
    img: CameraImg,
    pretitle: 'عروض خاص',
    titlePart1: 'جميع المنتجات ',
    titlePart2: 'عليها خصم تصل الى 80%',
    titlePart3: '',
    btnText: 'تصفح',
  },
  {
    img: CameraImg,
    pretitle: 'عروض خاص',
    titlePart1: 'جميع المنتجات ',
    titlePart2: 'عليها خصم تصل الى 80%',
    titlePart3: '',
    btnText: 'تصفح',
  },
];

const MainSlider = () => {
  return (
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
                {/* text */}
                <div className='w-full lg:flex-1'>
                  <div className='uppercase mb-1 text-center lg:text-left text-[#403D39]'>
                    {slide.pretitle}
                  </div>
                  <div className='text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20 text-[#403D39] '>
                    {slide.titlePart1} <br />
                    {slide.titlePart2} <br />
                    {slide.titlePart3}
                  </div>
                  <button className='btn btn-accent mx-auto lg:mx-0 '>
                  تصفح
                  </button>
                </div>
                {/* img */}
                <div className='flex-1'>
                  <img
                    className='xl:absolute xl:-right-28 w-96'
                    src={slide.img}
                    alt=''
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default MainSlider;
