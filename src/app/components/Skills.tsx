/* eslint-disable react/no-unescaped-entities */

import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos= "zoom-in-up">
                <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
            
                <p className='pt-3'>I'm exited to expand my tech skills! I've learned HTML, CSS, TypeScript , Next js and Node.js 
                    unlocking web development possibilities. Cdoing has refind my problem-solving, Critical thinking
                    and Creativity.
                 </p>
            </div>



<div>
    <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
        {/* eslint-disable-next-line react/no-unescaped-entities */}

        <div className='space-y-2'>
            <h2 data-aos= "zoom-in-up">Html</h2>
            <h2 data-aos= "zoom-in-up">Css</h2>
            <h2 data-aos= "zoom-in-up">TypeScript</h2>
            </div>
            {/* eslint-disable-next-line react/no-unescaped-entities */}

            <div className='space-y-2'>
            <h2 data-aos= "zoom-in-up">Next js</h2>
            <h2 data-aos= "zoom-in-up">TailwindCss</h2>
            <h2 data-aos= "zoom-in-up">Node js</h2>
        </div>

    </div>
</div>
        </div>
      
    </div>
  )
}

export default Skills
