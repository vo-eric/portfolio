'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

const projects = [
  {
    id: 1,
    title: 'habii',
    description:
      'A Tamagotchi-like app where you and multiple people can take care of a pet. It can also run as an executable app on a raspberry pi with a touchscreen and physical buttons.',
    image: '/habii.png',
    className: 'object-bottom',
    url: 'https://habii.life/',
    github: 'https://github.com/vo-eric/habii/',
  },
  {
    id: 2,
    title: 'decohr',
    description: `decohr helps you find the perfect 
	 decor for your home by leveraging AI to determine your taste 
	 profile and generate inspiration images based off that profile .`,
    image: '/decohr.png',
    url: 'https://decohr.vercel.app/',
    github: 'https://github.com/vo-eric/decohr',
  },
];

export default function ProjectsSection() {
  return (
    <section className='py-12 md:py-20 px-4 max-w-7xl mx-auto'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, opacity: 0.6 }}
        className='text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center'
      >
        Featured Projects
      </motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: project.id * 0.1 }}
            className={
              'group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden'
            }
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={clsx(
                'object-cover transition-transform',
                project.className
              )}
            />
            <div className='absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300' />
            <div className='absolute inset-0 p-6 flex flex-col justify-end'>
              <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
              <p className='text-gray-100 mb-4'>{project.description}</p>
              <div className='flex gap-4'>
                <Link
                  href={project.url}
                  target='_blank'
                  className='text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors'
                >
                  View Project
                </Link>
                <Link
                  href={project.github}
                  target='_blank'
                  className='text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors'
                >
                  GitHub
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
