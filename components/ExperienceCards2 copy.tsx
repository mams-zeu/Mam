import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function ExperienceCard2({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-500 md:w-600 xl:w-900 snap-center bg-gray-900 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full xl:w-200 xl:h-200 object-cover  object-center'
                src='https://blog.thirdweb.com/content/images/size/w600/2022/12/EVEN-Empowers-Fans-to-Support-their-Favorite-Music-Artists-through-NFTs.png'
                alt=""
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-3xl md:text-4xl font-light'>NFT Gated Web App</h4>
                <p>Portfolio</p>
                <div className='flex space-x-2 my-2'>
                    <img className="h-10 w-10 rounded-full"
                        src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png" alt="" />
                    <img className="h-10 w-10 rounded-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="" />
                    <img className="h-10 w-10 rounded-full"
                        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/junrqwfvds7vuowcovsv" alt="" />

                    <img className="h-10 w-10 rounded-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />

                    <img className="h-10 w-10 rounded-full"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="" />

                    <img className="h-10 w-10 rounded-full"
                        src="https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png" alt="" />
                    {/*Tech used*/}
                    {/*Tech used*/}
                    {/*Tech used*/}
                </div>
                <p className='uppercase py-5 text-gray-300'>Started November2022 -ongoing</p>

                <ul className='list-disc space-y-4 ml-5 text-lg '>
                    <li>buy and sell NFT Platform</li>
                    <li>Members only access systems</li>


                </ul>
            </div>
        </article>
    );
}

export default ExperienceCard2
