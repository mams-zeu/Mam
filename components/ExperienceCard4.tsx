import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function ExperienceCard4({ }: Props) {
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
                className='w-32 h-32 rounded-full xl:w-[200] xl:h-[200px] object-cover  object-center'
                src='https://thumbs.dreamstime.com/b/money-movement-vector-icon-logo-design-money-movement-vector-icon-logo-design-193390489.jpg'
                alt=""
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-3xl md:text-4xl font-light'>Confidential</h4>
                <p> West Africa</p>
               
                <p className='uppercase py-5 text-gray-300'>Started January 2016 -in progress</p>

                <ul className='list-disc space-y-4 ml-5 text-lg '>
                    <li>torture</li>
                    <li>Compromising an ennemy mission</li>
                    <li>Search and rescue VIP</li>


                </ul>
            </div>
        </article>
    );
}

export default ExperienceCard4
