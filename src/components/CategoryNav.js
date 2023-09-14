import React from 'react';
// useFetch hook
import useFetch from '../hooks/useFetch';
// link
import { Link } from 'react-router-dom';

const CategoryNav = () => {
  const { data } = useFetch('/categories');
  return (
    <aside className='hidden xl:flex'>
      <div  style={{ backgroundColor: "#FFFFFF",color: '#EB5E28'}} className=' flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden font-semibold text-2xl text-center'>
        <div style={{ backgroundColor: "#EB5E28", color: '#000000'}} className=' py-4  uppercase font-semibold flex items-center justify-center '>
          Browse Categories
        </div>
        <div className='flex flex-col gap-y-6 p-6'>
          {data?.map((category) => {
            return (
              <Link
                to={`/products/${category.id}`}
                className='cursor-pointer uppercase'
                key={category.id}
              >
                {category.attributes.title}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
