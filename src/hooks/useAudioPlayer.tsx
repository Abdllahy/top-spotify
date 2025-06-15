
import { useState, useRef, useEffect } from 'react';

export const useAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playTrack = (trackId: number, audioUrl?: string) => {
    console.log('Playing track:', trackId, 'URL:', audioUrl);
    
    if (currentTrack === trackId && isPlaying && audioRef.current) {
      // Pause current track
      audioRef.current.pause();
      setIsPlaying(false);
      setIsLoading(false);
      console.log('Paused current track');
    } else {
      // Play new track or resume
      if (currentTrack !== trackId && audioUrl && audioRef.current) {
        setIsLoading(true);
        setIsPlaying(false);
        setCurrentTrack(trackId);
        
        // Stop current audio
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        
        // Set new source
        audioRef.current.src = audioUrl;
        console.log('Loading new audio source:', audioUrl);
        
        // Try to play immediately
        audioRef.current.load();
        
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Successfully started playing');
              setIsPlaying(true);
              setIsLoading(false);
            })
            .catch((error) => {
              console.error('Error playing audio:', error);
              setIsPlaying(false);
              setIsLoading(false);
              // Try a fallback approach
              setTimeout(() => {
                if (audioRef.current) {
                  audioRef.current.play()
                    .then(() => {
                      console.log('Fallback play successful');
                      setIsPlaying(true);
                      setIsLoading(false);
                    })
                    .catch(e => {
                      console.error('Fallback play failed:', e);
                      setIsLoading(false);
                    });
                }
              }, 500);
            });
        }
      } else if (currentTrack === trackId && audioRef.current) {
        // Resume same track
        setIsLoading(true);
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setIsLoading(false);
            })
            .catch((error) => {
              console.error('Error resuming audio:', error);
              setIsPlaying(false);
              setIsLoading(false);
            });
        }
      }
    }
  };

  const stopTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setIsLoading(false);
    setCurrentTrack(null);
    console.log('Stopped and reset track');
  };

  useEffect(() => {
    const audio = new Audio();
    audio.volume = 0.5; // Reduced volume for better UX
    audio.preload = 'auto';
    audio.crossOrigin = 'anonymous';
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
    };

    const handlePlaying = () => {
      console.log('Audio is playing');
      setIsPlaying(true);
      setIsLoading(false);
    };

    const handlePause = () => {
      console.log('Audio paused');
      setIsPlaying(false);
      setIsLoading(false);
    };

    // Add all event listeners
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('pause', handlePause);

    return () => {
      // Clean up event listeners
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('pause', handlePause);
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
