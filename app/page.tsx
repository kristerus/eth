// pages/index.js
'use client'
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const whyEthRef = useRef(null);
  const videosRef = useRef(null);
  const contactRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // Observer for section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = [
      heroRef.current,
      aboutRef.current,
      educationRef.current,
      projectsRef.current,
      skillsRef.current,
      whyEthRef.current,
      videosRef.current,
      contactRef.current
    ];

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Scroll to section
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-gray-50 text-gray-900">
      <Head>
        <title>Kristian Dhimitri - ETH Zurich Application</title>
        <meta name="description" content="Application portfolio for ETH Zurich BSc in Electrical Engineering and Information Technology" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-600">Kristian Dhimitri</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {['hero', 'about', 'projects', 'skills', 'whyEth', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === section ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {section === 'hero' ? 'Home' : 
                   section === 'whyEth' ? 'Why ETH' : 
                   section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              {/* Mobile menu button */}
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Enhanced Tech-Focused Hero Section */}
        <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
          {/* Animated circuit background */}
          <div className="absolute inset-0 overflow-hidden opacity-40">
            <svg
              className="absolute inset-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
            >
              <defs>
                <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0040ff" />
                  <stop offset="100%" stopColor="#00a2ff" />
                </linearGradient>
              </defs>
              <g stroke="url(#circuitGrad)" strokeWidth="1.5" fill="none">
                <motion.path
                  d="M0,500 L1000,500"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 0.2 }}
                />
                <motion.path
                  d="M500,0 L500,1000"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 0.4 }}
                />
                <motion.path
                  d="M0,200 L1000,200"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 0.6 }}
                />
                <motion.path
                  d="M0,800 L1000,800"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 0.8 }}
                />
                <motion.path
                  d="M200,0 L200,1000"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 1.0 }}
                />
                <motion.path
                  d="M800,0 L800,1000"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 1.2 }}
                />
                {/* Circuit nodes */}
                {[100, 300, 500, 700, 900].map((x, i) => 
                  [100, 300, 500, 700, 900].map((y, j) => (
                    <motion.circle
                      key={`${i}-${j}`}
                      cx={x}
                      cy={y}
                      r="5"
                      fill="#0070f3"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.5 + (i * 5 + j) * 0.05 }}
                    />
                  ))
                )}
                {/* Circuit connecting lines */}
                {[
                  "M100,100 L300,100", "M100,300 L100,500", "M300,300 L500,300", 
                  "M300,500 L300,700", "M500,100 L500,300", "M500,500 L700,500",
                  "M700,300 L900,300", "M700,700 L500,700", "M900,500 L900,700"
                ].map((path, i) => (
                  <motion.path
                    key={i}
                    d={path}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 2 + i * 0.1 }}
                  />
                ))}
              </g>
            </svg>
          </div>

          {/* Glowing particles */}
          <div className="absolute inset-0 z-0">
            {[...Array(50)].map((_, i) => {
              const size = Math.random() * 4 + 1;
              const xPos = Math.random() * 100;
              const yPos = Math.random() * 100;
              const duration = Math.random() * 20 + 10;
              const delay = Math.random() * 5;
              const glowIntensity = Math.random() * 0.5 + 0.5;

              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: size,
                    height: size,
                    left: `${xPos}%`,
                    top: `${yPos}%`,
                    backgroundColor: '#00f0ff',
                    boxShadow: `0 0 ${size * 4}px ${size * 2}px rgba(0, 240, 255, ${glowIntensity})`,
                  }}
                  animate={{
                    y: [0, -20, 0, 20, 0],
                    x: [0, 20, 0, -20, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: duration,
                    delay: delay,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'linear',
                  }}
                />
              );
            })}
          </div>

          {/* Main content with tech border effect */}
          <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="relative bg-black/70 p-8 rounded-lg overflow-hidden border border-blue-500"
              style={{
                boxShadow: '0 0 30px rgba(0, 128, 255, 0.6)',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent, #0088ff, transparent)',
                  width: '100%',
                  height: '3px',
                  top: 0,
                  left: 0,
                }}
                animate={{
                  left: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent, #0088ff, transparent)',
                  width: '100%',
                  height: '3px',
                  bottom: 0,
                  right: 0,
                }}
                animate={{
                  right: ['-100%', '100%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Kristian Dhimitri</span>
              </motion.h1>
              
              <motion.h2 
                className="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-blue-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Electrical Engineering & Information Technology
              </motion.h2>
              
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Passionate about Cybersecurity, Electrical Power, Semiconductor Industry, Telecommunications and AI
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <button 
                  onClick={() => scrollToSection('about')}
                  className="relative overflow-hidden bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 group"
                >
                  <span className="relative z-10">Discover My Journey</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Tech decorative elements */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-blue-500"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" ref={aboutRef} className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-600">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden bg-gray-200 shadow-xl">
                  <Image
                    src="/img.jpeg" 
                    alt="Your Photo" 
                    className="object-cover"
                    width='600'
                    height='800'
                  />
                </div>
              </div>
              <div>
                <p className="text-lg text-gray-700 mb-6">
                From disassembling my first computer at age 10 to developing secure pentesting tools at Fraunhofer SIT today, my journey in technology has been driven by curiosity about how systems work and can be improved. Growing up between Albania and Germany gave me unique perspectives that shaped my approach to innovation. My passion for electrical engineering ignited during early Arduino experiments and led me to Constructor University Bremen and TU Darmstadt, where I&apos;ve developed expertise in cybersecurity, power systems, and semiconductor technology.                </p>
                <p className="text-lg text-gray-700 mb-6">
                I&apos;m motivated by the belief that secure, efficient technological systems are key to addressing global challenges, particularly at the intersection of renewable energy infrastructure and cybersecurity. This conviction guides my research and professional work, whether streamlining IT processes at Wesernetz-SWB or developing security solutions at ATHENE Zentrum. My technical foundation across full-stack development, cloud architecture, and network security—validated through numerous certifications—enables me to approach complex problems holistically.                </p>
                <p className="text-lg text-gray-700">
                As Albania&apos;s national speedcubing record holder, I&apos;ve developed a methodical approach to problem-solving that translates directly to engineering challenges. My multilingual abilities (Albanian, German, English, French) enable me to bridge cultural and technical divides in international collaborations. At ETH Zurich, I aim to leverage these unique perspectives to develop innovative solutions at the nexus of sustainable energy and cybersecurity, contributing meaningfully to technological advancement in Europe&apos;s premier AI and engineering research ecosystem.                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        

        {/* Projects Section */}
        <section id="projects" ref={projectsRef} className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-600">Key Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "SecurePen Framework",
          description: "Developed a comprehensive penetration testing framework at Fraunhofer SIT with enhanced security features for critical infrastructure systems. Implemented automated vulnerability detection and reporting capabilities.",
          technologies: ["Python", "Bash", "Docker", "Cybersecurity"]
        },
        {
          title: "Smart Grid Monitoring System",
          description: "Built a secure IoT-based monitoring solution for electrical grid systems at Wesernetz-SWB. Implemented end-to-end encryption and real-time analytics dashboard for power distribution networks.",
          technologies: ["IoT", "Azure", "Node.js", "Power Systems"]
        },
        {
          title: "AI-Driven Threat Detection",
          description: "Created a machine learning system that identifies potential network intrusions with 94% accuracy. Trained on custom datasets and implemented as part of ATHENE Zentrum's cybersecurity research initiative.",
          technologies: ["TensorFlow", "Python", "Network Security", "AI"]
        }
      ].map((project, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          transition={{ duration: 0.3 }}
        >
          
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

        {/* Skills Section */}
        <section id="skills" ref={skillsRef} className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-100">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-600">Technical Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Programming Languages</h3>
        <ul className="space-y-3">
          {['JavaScript', 'Python', 'C++/C#', 'TypeScript', 'SQL'].map((skill) => (
            <li key={skill} className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  className="bg-blue-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
              <span className="ml-3 text-gray-700">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Cybersecurity & Networks</h3>
        <ul className="space-y-3">
          {['Penetration Testing', 'Network Security', 'Azure Cloud Services', 'Linux Administration', 'Security Compliance'].map((skill) => (
            <li key={skill} className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  className="bg-blue-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
              <span className="ml-3 text-gray-700">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Web Development</h3>
        <ul className="space-y-3">
          {['ReactJS', 'NextJS', 'Node.js', 'GraphQL', 'MongoDB/PostgreSQL'].map((skill) => (
            <li key={skill} className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  className="bg-blue-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
              <span className="ml-3 text-gray-700">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Electrical Engineering</h3>
        <ul className="space-y-3">
          {['Signal Processing', 'Power Systems', 'Electronic Circuits', 'Telecommunications', 'Semiconductor Technology'].map((skill) => (
            <li key={skill} className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  className="bg-blue-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
              <span className="ml-3 text-gray-700">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Languages & Soft Skills</h3>
        <ul className="space-y-3">
          {['German (C1)', 'English (C2)', 'Albanian (Native)', 'French (C1)', 'Problem-Solving'].map((skill) => (
            <li key={skill} className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  className="bg-blue-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.floor(Math.random() * 40) + 60}%` }}
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
              <span className="ml-3 text-gray-700">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
</section>

        {/* Why ETH Section */}
        <section id="whyEth" ref={whyEthRef} className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-600">Why ETH Zurich</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="/eth.jpg" 
                    alt="ETH Zurich Campus" 
                    className="object-cover w-full h-full"
                    width='800'
                    height='500'
                  />
                </div>
              </div>
              <div>
                <blockquote className="text-lg italic text-gray-700 mb-8 border-l-4 border-blue-500 pl-4">
                &quot;ETH Zurich represents the pinnacle of excellence in electrical engineering and information technology education and research.&quot;
                </blockquote>
                <p className="text-lg text-gray-700 mb-6">
                I&apos;m drawn to ETH Zurich for its expertise that aligns perfectly with my interests. Professor Mathias Payer&apos;s system security research complements my work at Fraunhofer SIT. I&apos;m also attracted to Professor Mattern&apos;s IoT research, Professor Thiele&apos;s embedded systems work, Professor Grossner&apos;s semiconductor innovations, and Professor Zhang&apos;s integration of AI with electrical engineering.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                ETH&apos;s position as Europe&apos;s AI and technological innovation hub would enable me to advance my pentesting tools projects while exploring telecommunications, power systems, and AI intersections.  </p>
                <p className="text-lg text-gray-700">
                As a multilingual cybersecurity specialist with industry experience, I bring unique perspectives to ETH. My secure systems development background and problem-solving skills (demonstrated through speedcubing) foster creative technical approaches. I plan to engage in cybersecurity competitions and AI research groups, bridging theory with practice to contribute to ETH&apos;s tradition of impactful innovation.                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Videos Section */}
        
        {/* Contact Section */}
        <section id="contact" ref={contactRef} className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-600">Connect With Me</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 mb-8">
                Thank you for considering my application to ETH Zurich. I would be thrilled to discuss my candidacy further and answer any questions you may have.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a 
                  href="mailto:kerpudha05@gmail.com" 
                  className="inline-flex items-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  Email Me
                </a>
                <a 
                  href="https://www.linkedin.com/in/johann-dhimitri-06887330a/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/kristerus" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  GitHub
                </a>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Download My Resume</h3>
                <p className="text-gray-600 mb-6">For a complete overview of my qualifications, please download my resume.</p>
                <a href="../KristianCV-1.pdf" download="KristianCV-1.pdf">
  <button className="inline-flex items-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
    </svg>
    Download Resume
  </button>
</a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg mb-4">Kristian Dhimitri - ETH Zurich Application</p>
          <p className="text-sm opacity-75">© {new Date().getFullYear()} - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}