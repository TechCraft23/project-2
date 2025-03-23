import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    gsap.from('.about-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: '.about-content',
        start: 'top 80%',
      },
    });
  }, { scope: aboutRef });

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Team collaboration"
                className="w-full h-full object-cover transform transition-transform hover:scale-105"
              />
            </div>
          </div>
          <div className="about-content">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Crafting Digital Excellence Since 2020
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We are a team of passionate developers, designers, and digital strategists dedicated to
              transforming businesses through innovative technology solutions. Our approach combines
              creativity with technical expertise to deliver exceptional digital experiences.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary-600 dark:text-primary-400">200+</h3>
                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary-600 dark:text-primary-400">50+</h3>
                <p className="text-gray-600 dark:text-gray-400">Team Members</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-primary-600 dark:text-primary-400">98%</h3>
                <p className="text-gray-600 dark:text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;