
import { useState, useRef, useEffect } from 'react';

export const useAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playTrack = (trackId: number, audioUrl?: string) => {
    console.log('Playing track:', trackId, 'URL:', audioUrl);
    
    if (currentTrack === trackId && isPlaying) {
      // Pause current track
      audioRef.current?.pause();
      setIsPlaying(false);
      console.log('Paused current track');
    } else {
      // Play new track or resume
      if (currentTrack !== trackId && audioUrl) {
        setCurrentTrack(trackId);
        if (audioRef.current) {
          audioRef.current.src = audioUrl;
          audioRef.current.load(); // Reload the audio element
          console.log('Loading new audio source:', audioUrl);
        }
      }
      
      audioRef.current?.play()
        .then(() => {
          setIsPlaying(true);
          console.log('Successfully started playing');
        })
        .catch((error) => {
          console.error('Error playing audio:', error);
          setIsPlaying(false);
        });
    }
  };

  const stopTrack = () => {
    audioRef.current?.pause();
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentTrack(null);
    console.log('Stopped and reset track');
  };

  useEffect(() => {
    const audio = new Audio();
    audio.volume = 0.7; // Set default volume
    audio.preload = 'metadata';
    audioRef.current = audio;

    const handleEnded = () => {
      console.log('Track ended');
      setIsPlaying(false);
      setCurrentTrack(null);
    };

    const handleError = (e: Event) => {
      console.error('Audio error:', e);
      setIsPlaying(false);
    };

    const handleCanPlay = () => {
      console.log('Audio can play');
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('canplay', handleCanPlay);
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
