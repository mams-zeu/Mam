import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function About({ }: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://i.imgur.com/p6Ut7kU.jpg"
        className="mt-24 md:mt-2 flex-shrink-0 w-[160px] h-[180px] rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-500px xl:h-600px"
      />

      <div className="space-y-4 px-0 md:px-10 md:flex-1 max-w-3xl">
        <h4 className="text-xl md:text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-yellow-600/50">little</span> background
        </h4>
        <p className="text-sm md:text-md text-justify">
        I'm here to make a statement, to inspire others with my genius . Mamoudou is the name, and I'm ready to bring the heat. So keep an eye out, 'cause this renoi from the is about the world about to make some noise.Stay tuned, my people. We're about to change the game, one letter, one variabl at a time. Mamoudou out! Peace!
        </p>
      </div>
    </div>
  );
}
