import { useState, useEffect, useRef, useCallback } from 'react';

export const useVideoVolume = (initialVolume = 0.5) => {
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(initialVolume);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  const toggleMute = useCallback(() => {
    setIsMuted(!isMuted);
  }, [isMuted]);

  const handleVolumeChange = useCallback((newVolume) => {
    setVolume(newVolume);
    if (isMuted && newVolume > 0) setIsMuted(false);
    if (!isMuted && newVolume === 0) setIsMuted(true);
  }, [isMuted]);

  return {
    isMuted,
    volume,
    videoRef,
    toggleMute,
    handleVolumeChange
  };
};
