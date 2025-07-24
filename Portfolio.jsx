import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Menu, X, Code, Palette, Database, Globe } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form submission
  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Catering Website",
      description: "A professional web platform for catering services, featuring menu browsing, online booking, and responsive design. Built with HTML, CSS, JavaScript, AJAX, PHP, and XML.",
      technologies: ["HTML", "CSS", "JavaScript", "AJAX", "PHP", "XML"],
      github: "https://github.com/URVIL2512/Web-Development-Project-Catering-Website-",
      live: "#",
      image: "🍽️"
    },
    {
      title: "Dimension Reduction",
      description: "A Python-based tool for object dimension detection and reduction, leveraging computer vision techniques for accurate measurement and analysis.",
      technologies: ["Python", "OpenCV", "Machine Learning"],
      github: "https://github.com/URVIL2512/URVIL2512-object-dimension-detector",
      live: "#",
      image: "📏"
    },
    {
      title: "Attendance Management System",
      description: "A web-based attendance management system with secure login, dashboard, and real-time tracking. Designed for efficiency and ease of use.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      github: "https://github.com/URVIL2512/Registration--login-dashboard",
      live: "#",
      image: "📝"
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: <Code className="w-6 h-6" />, level: 90 },
    { name: "Backend Developer", icon: <Palette className="w-6 h-6" />, level: 85 },
    { name: "UI/UX Design", icon: <Database className="w-6 h-6" />, level: 80 },
    { name: "Web Technologies", icon: <Globe className="w-6 h-6" />, level: 95 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Urvil Solanki
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-green-400 ${
                    activeSection === item ? 'text-green-400' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize text-white hover:text-green-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-5xl font-mono text-black font-extrabold border-2 border-green-400 shadow-lg">
              US
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-mono">
            &lt;FullStack
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Developer /&gt;
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto font-mono">
            
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-1 font-mono"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400 hover:text-black transition-all duration-300 font-mono"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-mono">
            &lt;About Me /&gt;
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* <h3 className="text-2xl font-semibold text-white mb-6 font-mono">
                &gt; About Urvil Solanki
              </h3> */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                Hi! I'm <span className="text-green-400 font-bold">Urvil Solanki</span>, a passionate Full Stack Developer dedicated to building seamless, scalable, and impactful digital experiences. I thrive on solving complex problems and transforming ideas into robust software solutions. My expertise spans modern JavaScript frameworks, backend technologies, and UI/UX design, allowing me to deliver end-to-end products that delight users and drive results.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Whether I'm collaborating with a team, leading a project, or exploring the latest in tech, I bring creativity, precision, and a love for learning to everything I do. When I'm not coding, you'll find me contributing to open-source, mentoring fellow developers, or enjoying a late-night debugging session with a cup of coffee.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/URVIL2512" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/urvil-solanki2512" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-green-400 mr-3">
                      {skill.icon}
                    </div>
                    <h4 className="text-white font-semibold font-mono">{skill.name}</h4>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-mono">
            &lt;Projects /&gt;
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto text-lg font-mono">
            Here are a few projects that showcase my skills in full stack development, UI/UX, and problem-solving. Each project reflects my commitment to quality, innovation, and user-centric design.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-green-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/10">
                <div className="text-4xl mb-4">{project.image}</div>
                <h3 className="text-xl font-semibold text-white mb-3 font-mono">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-mono border border-green-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="flex items-center text-green-400 hover:text-green-300 transition-colors text-sm font-mono"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-mono"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-mono">
            &lt;Contact /&gt;
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 font-mono">&gt; Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                Interested in working together, have a project idea, or just want to chat about technology? I'm always open to new opportunities and collaborations. Reach out and let's create something amazing together!
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-green-400" />
                  <span className="font-mono">urvilsolanki@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <span className="font-mono">+91 9865321489</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-green-400" />
                  <span className="font-mono">India</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Urvil Solanki"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors font-mono"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors font-mono"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors resize-none font-mono"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-1 font-mono"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-700 bg-gray-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 font-mono">
            © 2025 UrvilSolanki | Built with React| Thanks for visiting
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio; 