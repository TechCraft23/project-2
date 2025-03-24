import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Zap, Shield, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.feature-card', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.features-grid',
        start: 'top 80%',
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We combine technical expertise with creative innovation to deliver exceptional results for
            our clients.
          </p>
        </div>
        <div className="features-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Fast & Efficient
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We deliver high-performance solutions optimized for speed and efficiency.
            </p>
            
          </div>
          <div className="feature-card p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Secure & Reliable
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Security is our priority, ensuring your data and applications are protected.
            </p>
          </div>
          <div className="feature-card p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Expert Team
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our experienced professionals bring diverse expertise to every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;