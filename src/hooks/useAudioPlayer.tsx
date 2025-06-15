
import { useState, useRef, useEffect } from 'react';

export const useAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playTrack = (trackId: number, audioUrl?: string) => {
    if (currentTrack === trackId && isPlaying) {
      // Pause current track
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      // Play new track or resume
      if (currentTrack !== trackId) {
        setCurrentTrack(trackId);
        if (audioUrl && audioRef.current) {
          audioRef.current.src = audioUrl;
        }
      }
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  const stopTrack = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
    setCurrentTrack(null);
  };

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTrack(null);
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, []);

  return {
    isPlaying,
    currentTrack,
    playTrack,
    stopTrack,
  };
};
