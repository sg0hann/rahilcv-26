
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SkillProps {
  title: string;
  percentage: number;
}

const skills = [
  { title: 'Web Design', percentage: 90 },
  { title: 'Graphic Design', percentage: 85 },
  { title: 'UI/UX Design', percentage: 80 },
  { title: 'React Development', percentage: 95 },
  { title: 'TypeScript', percentage: 85 },
  { title: 'Responsive Design', percentage: 90 }
];

const experienceItems = [
  {
    title: 'UI/UX Designer',
    company: 'Creative Studio',
    period: '2020 - Present',
    description: 'Lead UI/UX designer for web and mobile applications, focusing on creating intuitive and engaging user experiences.'
  },
  {
    title: 'Frontend Developer',
    company: 'Tech Solutions',
    period: '2018 - 2020',
    description: 'Developed responsive websites and applications using modern JavaScript frameworks and CSS preprocessors.'
  },
  {
    title: 'Graphic Designer',
    company: 'Design Agency',
    period: '2016 - 2018',
    description: 'Created visual concepts for clients across various industries, including branding, marketing materials, and digital assets.'
  }
];

const Skill: React.FC<SkillProps> = ({ title, percentage }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-xs text-white/70">{percentage}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-highlight rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%`, transition: 'width 1.5s ease-out' }}
        />
      </div>
    </div>
  );
};

const ExperienceItem: React.FC<{
  title: string;
  company: string;
  period: string;
  description: string;
  isLast?: boolean;
}> = ({ title, company, period, description, isLast = false }) => {
  return (
    <div className={cn("relative pl-8", !isLast && "pb-8")}>
      {!isLast && (
        <div className="absolute left-[7px] top-[26px] w-[2px] h-[calc(100%-20px)] bg-white/10"></div>
      )}
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-highlight/20 border-2 border-highlight flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-highlight"></div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <div className="flex items-center text-sm text-white/60 mb-2">
          <span>{company}</span>
          <span className="mx-2">•</span>
          <span>{period}</span>
        </div>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] rounded-full bg-highlight/5 blur-[100px]"></div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <div className="inline-flex items-center justify-center py-1 px-3 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm">
            <span className="text-xs font-medium text-white/70">About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Experience & Skills</h2>
          <p className="text-white/70 leading-relaxed">
            I specialize in creating digital experiences that are both visually stunning and functionally intuitive. With years of experience in design and development, I bring a unique perspective to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-semibold relative inline-block">
              Professional Skills
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-highlight/50 rounded-full"></span>
            </h3>
            
            <div className="mt-8">
              {skills.map((skill, index) => (
                <Skill 
                  key={index} 
                  title={skill.title} 
                  percentage={skill.percentage} 
                />
              ))}
            </div>
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-semibold relative inline-block">
              Work Experience
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-highlight/50 rounded-full"></span>
            </h3>
            
            <div className="mt-8 space-y-2">
              {experienceItems.map((item, index) => (
                <ExperienceItem
                  key={index}
                  title={item.title}
                  company={item.company}
                  period={item.period}
                  description={item.description}
                  isLast={index === experienceItems.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Let's Work Together</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                I'm open to freelance opportunities and collaborations. If you have a project that needs creative and technical expertise, I'd love to hear about it.
              </p>
              
              <ul className="space-y-3">
                {['Responsive Web Design', 'Custom Web Development', 'UI/UX Design', 'Brand Identity'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={18} className="text-highlight mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative h-full flex items-center justify-center perspective">
              <div className="w-full max-w-[320px] aspect-[3/4] rounded-lg overflow-hidden transform rotate-3 transition-all duration-500 hover:rotate-0 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Designer at work" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-highlight flex items-center justify-center transform rotate-12 shadow-lg font-display font-bold text-dark text-lg">
                5+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
