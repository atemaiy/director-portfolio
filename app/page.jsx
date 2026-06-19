"use client";

import React, { useState, useEffect } from 'react';
import { X, Play, Mail, Film, Volume2, VolumeX } from 'lucide-react';

// Кастомная иконка Instagram (замена удаленной из lucide-react)
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const projectsData = [
  {
    id: "echo-of-tundra",
    title: "Эхо тундры",
    type: "Документальный фильм",
    year: "2025",
    logline: "Исследование исчезающих языков малых народов Севера и людей, которые пытаются их сохранить в условиях глобализации.",
    videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&rel=0&modestbranding=1",
    thumbnail: "https://images.unsplash.com/photo-1518481852452-9415b262eba4?auto=format&fit=crop&q=80&w=1200",
    festivals: ["Каннский кинофестиваль (Спецпоказ)", "Артдокфест - Лучший дебют"],
    credits: {
      "Режиссёр": "Полина Полищук",
      "DOP (Оператор)": "Алексей Смирнов",
      "Монтаж": "Елена Волкова",
      "Цветокоррекция": "Color Studio",
      "Саунд-дизайн": "Иван Звуков"
    }
  },
  {
    id: "concrete-shadows",
    title: "Тень бетона",
    type: "Короткий метр",
    year: "2024",
    logline: "Один день из жизни архитектора-модерниста, чьи здания готовят к сносу.",
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&rel=0",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    festivals: ["Vimeo Staff Pick"],
    credits: {
      "Режиссёр": "Полина Полищук",
      "DOP (Оператор)": "Марк Левин",
      "Оригинальная музыка": "Ambient Society"
    }
  },
  {
    id: "invisibles",
    title: "Невидимые",
    type: "Социальный док",
    year: "2023",
    logline: "Хроника жизни волонтеров ночного патруля, помогающих бездомным пережить зиму.",
    videoUrl: "https://www.youtube.com/embed/L_LUpnjgPso?autoplay=1&rel=0",
    thumbnail: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1200",
    festivals: ["IDFA - Официальная программа"],
    credits: {
      "Режиссёр": "Полина Полищук",
      "DOP (Оператор)": "Алексей Смирнов",
      "Продюсер": "Анна Карелина"
    }
  },
  {
    id: "rhythm",
    title: "Ритм",
    type: "Музыкальный док",
    year: "2023",
    logline: "Путешествие в мир андеграундной электронной сцены Восточной Европы.",
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0?autoplay=1&rel=0",
    thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200",
    festivals: [],
    credits: {
      "Режиссёр": "Полина Полищук",
      "DOP (Оператор)": "Дмитрий Волков",
      "Звукорежиссёр": "Макс Бит"
    }
  }
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-gray-500 selection:text-white">
      
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out px-6 py-6 md:px-12 flex items-center ${
          isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className={`flex flex-col items-center text-center absolute left-1/2 -translate-x-1/2 w-max transition-all duration-500 ${
          isScrolled ? 'top-1/2 -translate-y-1/2 scale-90 md:scale-100' : 'top-12 md:top-16 scale-100'
        }`}>
          <h1 className="text-2xl md:text-4xl font-bold tracking-[0.15em] uppercase drop-shadow-lg">Полина Полищук</h1>
          <span className="text-xs md:text-sm tracking-[0.2em] text-gray-300 uppercase mt-2 drop-shadow-md">Режиссёр документального кино</span>
        </div>
        
        <nav className="hidden md:flex space-x-8 text-sm tracking-widest uppercase ml-auto relative z-10">
          <a href="#work" className="hover:text-white text-gray-400 transition-colors">Работы</a>
          <a href="#about" className="hover:text-white text-gray-400 transition-colors">Обо мне</a>
        </nav>
      </header>

      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <video 
            autoPlay 
            loop 
            muted={isMuted} 
            playsInline
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
            src="/showreel.mp4" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]"></div>
        </div>
        
        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
          title={isMuted ? "Включить звук" : "Выключить звук"}
        >
          {isMuted ? <VolumeX size={20} strokeWidth={1.5} /> : <Volume2 size={20} strokeWidth={1.5} />}
        </button>
      </section>

      <section id="work" className="px-4 py-20 md:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {projectsData.map((project) => (
            <article 
              key={project.id} 
              className="group cursor-pointer relative"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden aspect-video bg-gray-900">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm">
                    <Play className="text-white ml-1" size={24} />
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h2 className="text-2xl font-medium tracking-wide">{project.title}</h2>
                  <p className="text-sm text-gray-400 mt-2 tracking-wider uppercase">{project.type} • {project.year}</p>
                </div>
                <div className="md:max-w-xs">
                  <p className="text-sm text-gray-300 leading-relaxed">{project.logline}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="py-24 px-4 md:px-12 border-t border-white/10 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 aspect-[3/4] relative overflow-hidden grayscale">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="Полина Полищук" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl font-light mb-6">Обо мне</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed font-light text-lg">
              <p>
                Независимый режиссёр документального кино. В фокусе моего внимания — социальные трансформации, антропология повседневности и истории людей, оказавшихся на изломе эпох.
              </p>
              <p>
                Выпускница Московской Школы Нового Кино. Мои работы были отмечены на международных фестивалях, включая IDFA и Артдокфест. Я верю в наблюдательную документалистику и минималистичное вмешательство в реальность.
              </p>
            </div>
            <div className="mt-10 pt-10 border-t border-white/10 flex flex-col space-y-4">
              <a href="mailto:contact@example.com" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors w-fit">
                <Mail size={18} />
                <span className="tracking-wider">contact@polina-doc.ru</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors w-fit">
                <InstagramIcon size={18} />
                <span className="tracking-wider">@polina_docs</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 md:px-12 text-center text-xs text-gray-600 tracking-widest uppercase border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Polina Polishchuk. Все права защищены.</p>
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
          
          <button 
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-50 text-gray-400 hover:text-white transition-colors bg-black/50 p-2 rounded-full backdrop-blur-md"
          >
            <X size={32} strokeWidth={1.5} />
          </button>

          <div className="w-full max-w-6xl h-full md:h-auto max-h-[100vh] overflow-y-auto overflow-x-hidden rounded-none md:rounded-lg bg-[#050505] shadow-2xl relative custom-scrollbar">
            
            <div className="relative w-full aspect-video bg-black">
              <iframe 
                src={selectedProject.videoUrl} 
                title={selectedProject.title}
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-6 md:p-12">
              <div className="flex flex-col md:flex-row md:justify-between gap-12">
                
                <div className="md:w-2/3">
                  <h2 className="text-3xl md:text-4xl font-medium tracking-wide mb-2">{selectedProject.title}</h2>
                  <p className="text-gray-400 tracking-widest uppercase text-sm mb-8">{selectedProject.type} • {selectedProject.year}</p>
                  <p className="text-lg text-gray-300 leading-relaxed font-light">
                    {selectedProject.logline}
                  </p>
                  
                  {selectedProject.festivals && selectedProject.festivals.length > 0 && (
                    <div className="mt-8">
                      <h4 className="text-xs tracking-widest uppercase text-gray-500 mb-3 border-b border-gray-800 pb-2">Фестивали и Награды</h4>
                      <ul className="space-y-2">
                        {selectedProject.festivals.map((fest, idx) => (
                          <li key={idx} className="text-sm text-gray-300 flex items-center">
                            <Film size={14} className="mr-2 text-gray-500" />
                            {fest}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="md:w-1/3">
                  <h4 className="text-xs tracking-widest uppercase text-gray-500 mb-4 border-b border-gray-800 pb-2">Команда</h4>
                  <dl className="space-y-3">
                    {Object.entries(selectedProject.credits).map(([role, name]) => (
                      <div key={role} className="flex flex-col">
                        <dt className="text-xs text-gray-500 uppercase tracking-wider">{role}</dt>
                        <dd className="text-sm text-gray-200 mt-1">{name}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #050505;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        html {
          scroll-behavior: smooth;
        }
      `}} />
    </div>
  );
}