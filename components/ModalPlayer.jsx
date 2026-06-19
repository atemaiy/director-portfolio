// components/ModalPlayer.jsx
import { X } from 'lucide-react';

export const ModalPlayer = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 z-50 text-gray-400 hover:text-white transition-all hover:scale-110 hover:bg-white/10 bg-black/50 p-2 rounded-full backdrop-blur-md cursor-pointer"
      >
        <X className="w-7 h-7 md:w-8 md:h-8" strokeWidth={1.5} />
      </button>

      <div className="w-full max-w-6xl rounded-lg md:rounded-2xl overflow-hidden bg-black md:border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative animate-in zoom-in-95 duration-300 ease-out">
        <div className="relative w-full aspect-video">
          <iframe 
            src={`${project.videoUrl}&autoplay=1`} 
            title={project.title}
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
