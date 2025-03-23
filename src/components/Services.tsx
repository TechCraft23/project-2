import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Code2, Palette, Globe } from 'lucide-react';

const Services = () => {
  const servicesRef = useRef(null);

  useGSAP(() => {
    gsap.from('.service-card', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%',
      },
    });
  }, { scope: servicesRef });

  return (
    <section id="services" ref={servicesRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of digital solutions to help your business thrive in the
            modern digital landscape.
          </p>
        </div>
        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Web Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Custom web applications built with modern technologies and best practices for optimal
              performance and user experience.
            </p>
          </div>
          <div className="service-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-6">
              <Palette className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">UI/UX Design</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Beautiful, intuitive interfaces designed with your users in mind, ensuring engaging and
              memorable digital experiences.
            </p>
          </div>
          <div className="service-card p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-6">
              <Code2 className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Custom Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Tailored software solutions that address your specific business needs and help streamline
              your operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;