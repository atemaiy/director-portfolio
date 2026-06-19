// components/HeroSection.jsx
import { Volume2, VolumeX } from 'lucide-react';

export const HeroSection = ({ videoRef, isMuted, volume, toggleMute, handleVolumeChange }) => {
  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted={isMuted} 
          playsInline
          className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
          src="/showreel.mp4" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 md:from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]"></div>
      </div>
      
      {/* Панель управления звуком */}
      <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-20 flex items-center bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-full p-1 transition-all duration-500 group">
        
        <button 
          onClick={toggleMute}
          className="w-12 h-12 md:w-12 md:h-12 flex items-center justify-center rounded-full text-gray-300 hover:text-white transition-colors shrink-0 cursor-pointer"
          title={isMuted ? "Включить звук" : "Выключить звук"}
        >
          {isMuted || volume === 0 ? <VolumeX size={20} strokeWidth={1.5} /> : <Volume2 size={20} strokeWidth={1.5} />}
        </button>

        {/* Ползунок громкости (скрыт на мобильных) */}
        <div className="hidden md:flex w-0 overflow-hidden group-hover:w-24 transition-all duration-500 ease-in-out items-center">
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
            className="w-full h-1 mr-3 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white"
          />
        </div>

      </div>
    </section>
  );
};
