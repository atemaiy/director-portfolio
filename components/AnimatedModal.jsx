export const AnimatedModal = ({ 
  project, 
  position, 
  isOpening, 
  isClosing, 
  onClose 
}) => {
  if (!isOpening && !isClosing) return null;

  return (
    <div 
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 ${
        isClosing ? 'bg-black/0 pointer-events-none' : 'bg-black/80 backdrop-blur-md'
      } transition-all duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]`}
    >
      <div 
        className={`absolute rounded-lg md:rounded-2xl overflow-hidden bg-black md:border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] ${
          isOpening 
            ? 'transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]' 
            : 'transition-all duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]'
        }`}
        style={{
          left: isOpening ? `${position.x}px` : '50%',
          top: isOpening ? `${position.y}px` : '50%',
          width: isOpening ? `${position.width}px` : 'calc(100% - 2rem)',
          height: isOpening ? `${position.height}px` : 'calc(100% - 2rem)',
          maxWidth: isOpening ? 'none' : '6xl',
          transform: isOpening 
            ? 'translate(0, 0)' 
            : 'translate(-50%, -50%)',
          opacity: isOpening ? 1 : (isClosing ? 0 : 1)
        }}
      >
        <div className="relative w-full h-full">
          {isOpening && (
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
