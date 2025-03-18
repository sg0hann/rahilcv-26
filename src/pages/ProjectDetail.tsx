
import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

// Mock project data
const projects = [
  {
    id: 'e-commerce-website',
    title: 'E-Commerce Website',
    category: 'Web Development',
    client: 'Fashion Boutique',
    date: 'June 2023',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    heroImage: 'https://images.unsplash.com/photo-1523389963438-28a7282e2f4a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gallery: [
      'https://images.unsplash.com/photo-1491897554428-130a60dd4757?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1571867424488-4565932edb41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1464689125459-648639073e49?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    description: "This e-commerce website was designed and developed for a fashion boutique looking to expand their online presence. The website features a modern, responsive design with a focus on showcasing the products in an elegant and user-friendly way. The project included custom product filters, user authentication, shopping cart functionality, and integration with payment gateways.",
    challenge: "The main challenge was creating a seamless shopping experience across all devices while maintaining fast loading times and ensuring secure payment processing. The client also required a custom inventory management system that could be easily updated by their staff.",
    solution: "I implemented a responsive design using React and Next.js, with Tailwind CSS for styling. The website was optimized for performance with lazy loading images and code splitting. For the backend, I created a robust API that handles inventory management, user authentication, and order processing. The payment system was integrated with Stripe for secure transactions.",
    results: "The website resulted in a 45% increase in online sales within the first three months after launch. The bounce rate decreased by 30%, and the average time spent on the website increased significantly. The client was extremely satisfied with both the design and functionality of the website.",
    testimonial: {
      text: "David created an exceptional online shopping experience for our customers. His attention to detail and technical expertise transformed our vision into a beautiful, functional website that has significantly increased our sales.",
      author: "Sarah Johnson",
      position: "Owner, Fashion Boutique"
    },
    liveLink: "https://example.com",
    nextProject: "brand-identity"
  },
  {
    id: 'product-packaging',
    title: 'Product Packaging',
    category: 'Graphic Design',
    client: 'Organic Food Company',
    date: 'April 2023',
    tags: ['Package Design', 'Branding', 'Print Design', 'Typography'],
    heroImage: '/lovable-uploads/b31c5188-6a83-4b9a-810a-e6bdf157fd8c.png',
    gallery: [
      '/lovable-uploads/b31c5188-6a83-4b9a-810a-e6bdf157fd8c.png',
      'https://images.unsplash.com/photo-1607602740045-42a1ba8c0b4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1625037032037-2ff2c04c5108?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    description: "This product packaging design was created for an organic food company looking to showcase their premium chocolate products. The design features elegant typography, distinctive branding elements, and a rich color palette that reflects the premium nature of the product.",
    challenge: "The client needed packaging that would stand out on shelves, communicate the premium quality of their chocolate, and align with their organic and eco-friendly brand values. The design needed to work across various product sizes while maintaining brand consistency.",
    solution: "I created a distinctive design with a rich brown background and gold accents to communicate premium quality. The packaging features custom illustrations and a clean layout that highlights the product's natural ingredients. The design was optimized for various product sizes and printing techniques.",
    results: "The new packaging design helped increase product visibility and sales by 35%. Customer feedback was overwhelmingly positive, with many noting the distinctive design as a factor in their purchase decision. The design also won a regional packaging design award.",
    testimonial: {
      text: "The packaging design created for our chocolate products perfectly captures our brand's essence. The detailed illustrations and elegant color scheme have made our products stand out on shelves and resonate with our target audience.",
      author: "Nadia Thompson",
      position: "Marketing Director, Organic Food Company"
    },
    liveLink: "https://example.com/packaging-case-study",
    nextProject: "e-commerce-website"
  }
];

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === projectId);
  
  useEffect(() => {
    if (!project) {
      navigate('/projects', { replace: true });
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Animate elements on load
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-on-load');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-active');
        }, index * 100);
      });
    };
    
    animateElements();
    
  }, [project, navigate, projectId]);
  
  if (!project) return null;

  return (
    <>
      <Navbar />
      
      <main className="pt-24 bg-dark min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark z-10"></div>
          <img 
            src={project.heroImage} 
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover animate-scale-in animate-on-load"
          />
          
          <div className="relative z-20 container mx-auto px-6 md:px-10 h-full flex flex-col justify-end pb-10">
            <Button 
              variant="outline" 
              size="sm"
              className="mb-6 self-start bg-white/5 border-white/10 hover:bg-white/10 animate-fade-in animate-on-load"
              onClick={() => navigate(-1)}
              style={{ animationDelay: '0.2s' }}
            >
              <ArrowLeft size={16} className="mr-1.5" />
              Back to Projects
            </Button>
            
            <div className="animate-fade-up animate-on-load" style={{ animationDelay: '0.3s' }}>
              <span className="inline-block py-1 px-2.5 bg-highlight/20 rounded-full text-xs font-medium text-highlight mb-3">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
            </div>
          </div>
        </section>
        
        {/* Project Info */}
        <section className="py-16 bg-dark">
          <div className="container mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="md:col-span-2 animate-fade-up animate-on-load" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                <p className="text-white/80 leading-relaxed mb-8">{project.description}</p>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">The Challenge</h3>
                    <p className="text-white/80 leading-relaxed">{project.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">The Solution</h3>
                    <p className="text-white/80 leading-relaxed">{project.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">The Results</h3>
                    <p className="text-white/80 leading-relaxed">{project.results}</p>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-up animate-on-load" style={{ animationDelay: '0.5s' }}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sticky top-24">
                  <h3 className="text-lg font-semibold mb-5">Project Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar size={18} className="text-highlight mt-0.5 mr-3" />
                      <div>
                        <h4 className="text-sm text-white/60 mb-1">Date</h4>
                        <p className="text-white/90">{project.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <User size={18} className="text-highlight mt-0.5 mr-3" />
                      <div>
                        <h4 className="text-sm text-white/60 mb-1">Client</h4>
                        <p className="text-white/90">{project.client}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Tag size={18} className="text-highlight mt-0.5 mr-3" />
                      <div>
                        <h4 className="text-sm text-white/60 mb-1">Technologies</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="text-xs py-1 px-2.5 bg-white/10 rounded-full text-white/80"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center justify-center w-full py-2.5 px-4 bg-highlight hover:bg-highlight-hover text-dark font-medium rounded-md transition-all duration-300"
                    >
                      Visit Live Site
                      <ExternalLink size={16} className="ml-1.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery */}
        <section className="py-16 bg-dark">
          <div className="container mx-auto px-6 md:px-10">
            <h2 className="text-2xl font-bold mb-8 animate-fade-up">Project Gallery</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div 
                  key={index}
                  className="rounded-xl overflow-hidden aspect-video animate-fade-up hover:transform hover:scale-[1.02] transition-all duration-500"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <img 
                    src={image} 
                    alt={`Project image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial */}
        {project.testimonial && (
          <section className="py-16 bg-dark">
            <div className="container mx-auto px-6 md:px-10">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 relative animate-fade-up">
                <div className="absolute top-6 left-8 text-highlight/20 text-7xl font-serif">"</div>
                
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-white/90 italic mb-8 max-w-3xl mx-auto text-center leading-relaxed">
                    {project.testimonial.text}
                  </p>
                  
                  <div className="text-center">
                    <h4 className="text-white font-medium">{project.testimonial.author}</h4>
                    <p className="text-white/60 text-sm">{project.testimonial.position}</p>
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-8 text-highlight/20 text-7xl font-serif">"</div>
              </div>
            </div>
          </section>
        )}
        
        {/* Next Project */}
        {project.nextProject && (
          <section className="py-16 bg-dark">
            <div className="container mx-auto px-6 md:px-10">
              <div className="text-center animate-fade-up">
                <span className="text-sm text-white/60 uppercase tracking-wider">Next Project</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-6">Continue Exploring</h2>
                
                <Link
                  to={`/projects/${project.nextProject}`}
                  className="inline-flex items-center py-3 px-8 rounded-full bg-highlight text-dark font-medium hover:bg-highlight-hover transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-[0_10px_20px_rgba(44,255,190,0.3)]"
                >
                  View Next Project
                  <ArrowLeft size={16} className="ml-1.5 rotate-180" />
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </>
  );
};

export default ProjectDetail;
