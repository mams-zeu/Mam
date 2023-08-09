import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function ExperienceCard3({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] 
    xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}

            />

            <div className='px-0 md:px-10'>
                <h4 className='text-3xl md:text-4xl font-light'>Confidential</h4>
                <p>Portfolio</p>
                <div className='flex space-x-2 my-2'>
                    <img className="h-10 w-10 rounded-full"
                        src="https://olimex.files.wordpress.com/2017/06/arduino-logo-circle-thumb.png?w=584" alt="" />
                    {/*Tech used*/}
                </div>
                <p className='uppercase py-5 text-gray-300'> September 2021 - June2022..e.</p>

            
            </div>
        </article>
    );
}

export default ExperienceCard3
