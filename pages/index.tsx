import Head from 'next/head';
import type { NextPage } from 'next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll 
    overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400 scrollbar-thumb-yellow-600/80">
      <Head>
        <title>Amara Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className='sticky button-5 w-full cursor-pointer absolute bottom-0'>
          <div className='flex items-center justify-center w-full bg-[rgb(36,36,36)]'>
            <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src="https://i.imgur.com/Lue01ZI.jpg"
              alt=''
            />
          </div>
        </footer>
      </Link>


    </div>
  );
};

export default Home;
