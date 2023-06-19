import React from 'react';

function ProjectItem({ title, imgUrl, stack, link }) {
   return (
      <a 
         href={link}
         target='_blank'
         rel='noopener noreferrer'
         className='border-2 border-stone-900 dark:border-white rounded-md overflow-hidden mt-20'
      >
         <img
            src={imgUrl}
            alt='image' 
            className='h-37 md:h-40 object-cover cursor-pointer'
         />
         <div className='p-4'>
            <h3 className='text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold '>{title}</h3>
            <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white '>
               {stack.map(item => (
                  <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md'>
                     {item}
                  </span>
               ))}
            </p>
         </div>
      </a>
   )
}

export default ProjectItem;