"use client";

import { useState, useRef } from 'react';
import { Header } from '@/components/Header';
import { MobileMenu } from '@/components/MobileMenu';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { AboutSection } from '@/components/AboutSection';
import { Footer } from '@/components/Footer';
import { ModalPlayer } from '@/components/ModalPlayer';
import { AnimatedModal } from '@/components/AnimatedModal';
import { useScrollHandler } from '@/hooks/useScrollHandler';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useVideoVolume } from '@/hooks/useVideoVolume';
import { projectsData } from '@/data/projectsData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [closingProject, setClosingProject] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpening, setIsModalOpening] = useState(false);
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [openingPosition, setOpeningPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });
  
  const isScrolled = useScrollHandler();
  const { isMuted, volume, videoRef, toggleMute, handleVolumeChange } = useVideoVolume(0.5);
  
  useBodyScrollLock(selectedProject || isMobileMenuOpen);
  
  const cardRefs = useRef({});

  const handleCardClick = (project, e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    setOpeningPosition({
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height
    });
    
    setIsModalOpening(true);
    setSelectedProject(project);
    
    setTimeout(() => {
      setIsModalOpening(false);
    }, 50);
  };

  const handleCloseModal = () => {
    if (!selectedProject) return;
    
    setIsModalClosing(true);
    setClosingProject(selectedProject);
    
    setTimeout(() => {
      setSelectedProject(null);
      setClosingProject(null);
      setIsModalClosing(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-gray-500 selection:text-white">
      
      <Header 
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <MobileMenu 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <HeroSection 
        videoRef={videoRef}
        isMuted={isMuted}
        volume={volume}
        toggleMute={toggleMute}
        handleVolumeChange={handleVolumeChange}
      />

      <ProjectsGrid 
        projects={projectsData}
        onProjectClick={handleCardClick}
        cardRefs={cardRefs}
      />

      <AboutSection />

      <Footer />

      <AnimatedModal
        project={selectedProject}
        position={openingPosition}
        isOpening={isModalOpening}
        isClosing={isModalClosing}
        onClose={handleCloseModal}
      />

      <ModalPlayer 
        project={selectedProject} 
        onClose={handleCloseModal} 
      />

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        @media (min-width: 768px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
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
