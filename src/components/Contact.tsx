
import React, { useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import SocialIcons from './SocialIcons';

interface ContactInfo {
  icon: React.FC<{ size?: number; className?: string }>;
  title: string;
  content: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@davidjohnson.com',
    link: 'mailto:hello@davidjohnson.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'San Francisco, CA, USA'
  }
];

const ContactInfoCard: React.FC<ContactInfo> = ({ icon: Icon, title, content, link }) => {
  return (
    <div className="flex items-start p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
      <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mr-4 flex-shrink-0">
        <Icon size={20} className="text-highlight" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-white/70 mb-1">{title}</h4>
        {link ? (
          <a href={link} className="text-white hover:text-highlight transition-colors">
            {content}
          </a>
        ) : (
          <p className="text-white">{content}</p>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-full bg-highlight/5 blur-[100px]"></div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <div className="inline-flex items-center justify-center py-1 px-3 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-sm">
            <span className="text-xs font-medium text-white/70">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Discuss Your Project</h2>
          <p className="text-white/70 leading-relaxed">
            Have a project in mind or just want to say hello? Feel free to reach out to me. I'm always open to discussing new projects and creative ideas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <ContactInfoCard
                  key={index}
                  icon={info.icon}
                  title={info.title}
                  content={info.content}
                  link={info.link}
                />
              ))}
            </div>
            
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-lg font-medium mb-4">Follow Me</h4>
              <SocialIcons />
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form 
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/70 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-highlight"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-white/70 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-highlight"
                  />
                </div>
              </div>
              
              <div className="mb-5">
                <label htmlFor="subject" className="block text-sm text-white/70 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-highlight"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm text-white/70 mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi David, I'd like to discuss a project..."
                  required
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-highlight resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-highlight hover:bg-highlight-hover text-dark font-medium py-2.5 px-8 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-[0_10px_20px_rgba(44,255,190,0.3)]"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <ArrowRight size={16} className="ml-1.5" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
