import React from 'react';
import ProjectJS from '../data/ProjectJS';
import ProjectItem from './ProjectItem';

function Project() {
   return (
      <div className='flex flex-col items-center justify-center my-20'>
         <div className='md:w-7/12'>
            <div className='block text-4xl font-bold'>Projects</div>
         </div>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {ProjectJS.map((project) => (
               <ProjectItem 
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
               />
            ))}
         </div>
      </div>
   )
}

export default Project;