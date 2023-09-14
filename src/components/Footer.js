import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#EB5E28' }}>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2 className='h2 uppercase mb-6 font-semibold space-x-3'>
            اشترك في نشرتنا الإخبارية 
          </h2>
          <p className='text-white/70'>
            كن أول من يحصل على آخر الأخبار حول الاتجاهات والعروض الترويجية وأكثر من ذلك بكثير!
          </p>
        </div>
        {/* form */}
        <form className='w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14'>
          <input
            type='text'
            placeholder='Your email address'
            className='input'
          />
          <button className='btn btn-accent min-w-[150px]'>Join</button>
        </form>
        {/* links */}
        <div className='text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9'>
          <a href='#' className='hover:text-white transition-all'>
            سياسه الارجاع 
          </a>
          <a href='#' className='hover:text-white transition-all'>
            أتبع طلبك  
          </a>
          <a href='#' className='hover:text-white transition-all'>
            الشحن و التسليم  
          </a>
        </div>
        {/* socials */}
        <div className='flex gap-x-6 max-w-max mx-auto text-lg mb-16'>
          <a href='#' className='hover:text-white transition-all'>
            <FaYoutube />
          </a>
          <a href='#' className='hover:text-white transition-all'>
            <FaInstagram />
          </a>
          <a href='#' className='hover:text-white transition-all'>
            <FaTwitter />
          </a>
          
        </div>
      </div>
      {/* copyright */}
      <div className='py-10 border-t border-t-white/10'>
        <div className='container mx-auto'>
          <div className='text-center text-sm text-white/60'>
            Copyright &copy; OYUN BAHRIAH 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
