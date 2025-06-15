
import React, { createContext, useContext } from 'react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';

interface AudioPlayerContextType {
  isPlaying: boolean;
  currentTrack: number | null;
  playTrack: (trackId: number, audioUrl?: string) => void;
  stopTrack: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioPlayer = useAudioPlayer();

  return (
    <AudioPlayerContext.Provider value={audioPlayer}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayerContext = () => {
  const context = useContext(AudioPlayerContext);
  if (context === undefined) {
    throw new Error('useAudioPlayerContext must be used within an AudioPlayerProvider');
  }
  return context;
};
