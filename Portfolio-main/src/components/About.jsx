import React from 'react';
import stackImage from '../assets/about/Hero Image.png';
import { aboutContent } from '../data/portfolioData';

// 1. Python SVG Icon
const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.917 1.112c-1.393-.016-2.657.114-3.524.363-2.188.63-2.316 1.838-2.316 3.144v1.89h5.955v.842H3.924C2.553 7.351 1.25 8.344 1.112 10.155c-.172 2.253-.134 3.731.026 5.347.16 1.614 1.343 2.502 2.585 2.586h1.7v-2.392c0-1.896 1.543-3.44 3.44-3.44h5.945c1.6 0 2.893-1.294 2.893-2.893V6.446c0-1.472-1.127-2.735-2.766-3.155-.89-.228-2.025-.363-3.018-.379zm-2.42 1.488a.936.936 0 1 1 0 1.872.936.936 0 0 1 0-1.872z" fill="#3776AB"/>
      <path d="M12.083 22.888c1.393.016 2.657-.114 3.524-.363 2.188-.63 2.316-1.838 2.316-3.144v-1.89h-5.955v-.842h8.108c1.37 0 2.673-.993 2.811-1.804.172-2.253.134-3.731-.026-5.347-.16-1.614-1.343-2.502-2.585-2.586h-1.7v2.392c0 1.896-1.543 3.44-3.44 3.44H9.19c-1.6 0-2.893 1.294-2.893 2.893v2.962c0 1.472 1.127 2.735 2.766 3.155.89.228 2.025.363 3.018.379zm2.42-1.488a.936.936 0 1 1 0-1.872.936.936 0 0 1 0 1.872z" fill="#FFD343"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Python</span>
  </div>
);

// 2. Machine Learning SVG Icon
const MachineLearningIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="4" cy="12" r="2" fill="#222222" />
      <circle cx="12" cy="5" r="2" fill="#222222" />
      <circle cx="12" cy="19" r="2" fill="#222222" />
      <circle cx="20" cy="12" r="2" fill="#222222" />
      <line x1="6" y1="11" x2="10" y2="6.5" />
      <line x1="6" y1="13" x2="10" y2="17.5" />
      <line x1="14" y1="6" x2="18" y2="11" />
      <line x1="14" y1="18" x2="18" y2="13" />
      <line x1="6" y1="12" x2="18" y2="12" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Machine Learning</span>
  </div>
);

// 3. Data Science SVG Icon
const DataScienceIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <path d="M2 20h20" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Data Science</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge Picture */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard decorations */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              
              {/* Image Box */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Ammar Tanveer — AI & ML Engineer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* New Custom Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <MachineLearningIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <DataScienceIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative Stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
