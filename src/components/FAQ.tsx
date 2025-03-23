import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const faqRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useGSAP(() => {
    gsap.from('.faq-item', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.faq-container',
        start: 'top 80%',
      },
    });
  }, { scope: faqRef });

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a comprehensive range of digital services including web development, UI/UX design, mobile app development, and digital marketing solutions.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity and scope. A typical website project can take 4-12 weeks, while more complex applications may take 3-6 months.',
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes, we provide ongoing support and maintenance services to ensure your digital solutions continue to perform optimally after launch.',
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including project-based, hourly rates, and retainer options. Each project is quoted based on specific requirements and scope.',
    },
  ];

  return (
    <section ref={faqRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </div>
        <div className="faq-container max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item mb-4">
              <button
                className="w-full flex items-center justify-between p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="p-6 bg-white dark:bg-gray-900 rounded-b-lg">
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;