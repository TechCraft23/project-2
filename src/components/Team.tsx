import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team = () => {
  const teamRef = useRef(null);

  useGSAP(() => {
    gsap.from('.team-member', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.team-grid',
        start: 'top 80%',
      },
    });
  }, { scope: teamRef });

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
      },
    },
    {
      name: 'Michael Chen',
      role: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
      },
    },
    {
      name: 'Emily Davis',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
      },
    },
  ];

  return (
    <section id="team" ref={teamRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet our talented team of professionals who make the magic happen.
          </p>
        </div>
        <div className="team-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="team-member bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;