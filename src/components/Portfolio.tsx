
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 'project1',
    title: 'E-Commerce Website',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1523389963438-28a7282e2f4a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/projects/e-commerce-website'
  },
  {
    id: 'project2',
    title: 'Brand Identity Design',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1611531022285-9d8f8a0a764f?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/projects/brand-identity'
  },
  {
    id: 'project3',
    title: 'Mobile App UI',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/projects/mobile-app-ui'
  },
  {
    id: 'project4',
    title: 'Social Media Campaign',
    category: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1596558450255-7c0b7be3d2f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/projects/social-media-campaign'
  },
  {
    id: 'project5',
    title: 'Dashboard Interface',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/projects/dashboard-interface'
  },
  {
    id: 'project6',
    title: 'Product Packaging',
    category: 'Graphic Design',
    image: '/lovable-uploads/b31c5188-6a83-4b9a-810a-e6bdf157fd8c.png',
    link: '/projects/product-packaging'
  }
];

const categories = ['All', 'Web Development', 'Graphic Design', 'UI/UX Design'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-full bg-highlight/5 blur-[100px]"></div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <div className="inline-flex items-center justify-center py-1 px-3 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm">
            <span className="text-xs font-medium text-white/70">My Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-up">Recent Projects</h2>
          <p className="text-white/70 leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Explore my recent design and development projects. Each project represents my dedication to creating visually appealing and functional digital experiences.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {categories.map((category, index) => (
            <button
              key={index}
              className={cn(
                "py-2 px-5 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category 
                  ? "bg-highlight text-dark" 
                  : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.id}
              to={project.link}
              className="group relative rounded-xl overflow-hidden bg-white/5 border border-white/10 aspect-[3/4] md:aspect-[4/5] transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="inline-block py-1 px-2.5 bg-highlight/20 rounded-full text-xs font-medium text-highlight mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4">{project.title}</h3>
                  
                  <div className="flex items-center text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View Project</span>
                    <ArrowUpRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
              
              {hoveredProject === project.id && (
                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 animate-fade-in">
                  <ExternalLink size={14} className="text-white" />
                </div>
              )}
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Link 
            to="/projects" 
            className="inline-flex items-center py-2.5 px-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm text-white/90 hover:bg-white/10 transition-all duration-300"
          >
            View All Projects
            <ArrowUpRight size={16} className="ml-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
