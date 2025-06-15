
import { useState, useRef, useEffect } from 'react';

export const useAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playTrack = (trackId: number, audioUrl?: string) => {
    console.log('Playing track:', trackId, 'URL:', audioUrl);
    
    if (currentTrack === trackId && isPlaying) {
      // Pause current track
      audioRef.current?.pause();
      setIsPlaying(false);
      setIsLoading(false);
      console.log('Paused current track');
    } else {
      // Play new track or resume
      if (currentTrack !== trackId && audioUrl) {
        setIsLoading(true);
        setIsPlaying(false);
        setCurrentTrack(trackId);
        
        if (audioRef.current) {
          // Stop current audio to prevent AbortError
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          
          audioRef.current.src = audioUrl;
          audioRef.current.load();
          console.log('Loading new audio source:', audioUrl);
        }
      } else if (currentTrack === trackId) {
        // Resume same track
        setIsLoading(true);
      }
      
      // Add a small delay to ensure the audio is ready
      setTimeout(() => {
        audioRef.current?.play()
          .then(() => {
            setIsPlaying(true);
            setIsLoading(false);
            console.log('Successfully started playing');
          })
          .catch((error) => {
            console.error('Error playing audio:', error);
            setIsPlaying(false);
            setIsLoading(false);
          });
      }, 100);
    }
  };

  const stopTrack = () => {
    audioRef.current?.pause();
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setIsLoading(false);
    setCurrentTrack(null);
    console.log('Stopped and reset track');
  };

  useEffect(() => {
    const audio = new Audio();
    audio.volume = 0.7;
    audio.preload = 'metadata';
    audioRef.current = audio;

    const handleEnded = () => {
      console.log('Track ended');
      setIsPlaying(false);
      setIsLoading(false);
      setCurrentTrack(null);
    };

    const handleError = (e: Event) => {
      console.error('Audio error:', e);
      setIsPlaying(false);
      setIsLoading(false);
    };

    const handleCanPlay = () => {
      console.log('Audio can play');
      setIsLoading(false);
    };

    const handleLoadStart = () => {
      console.log('Audio load started');
      setIsLoading(true);
    };

    const handleLoadedData = () => {
      console.log('Audio data loaded');
      setIsLoading(false);
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('loadeddata', handleLoadedData);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.pause();
    };
  }, []);

  return {
    isPlaying,
    isLoading,
    currentTrack,
    playTrack,
    stopTrack,
  };
};
