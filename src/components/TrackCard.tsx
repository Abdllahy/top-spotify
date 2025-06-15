
import { Play, Heart, Pause } from 'lucide-react';
import { useAudioPlayerContext } from '../contexts/AudioPlayerContext';

interface TrackCardProps {
  rank: number;
  title: string;
  artist: string;
  album?: string;
  genre?: string;
  streams?: string;
}

const TrackCard = ({ rank, title, artist, album, genre, streams }: TrackCardProps) => {
  const { isPlaying, currentTrack, playTrack } = useAudioPlayerContext();
  
  const isCurrentTrack = currentTrack === rank;
  const isCurrentlyPlaying = isCurrentTrack && isPlaying;

  // Using actual playable music URLs from Internet Archive
  const getAudioUrl = (trackRank: number) => {
    const audioUrls = [
      'https://archive.org/download/SampleAudio0724/SampleAudio_0.2mb_mp3.mp3',
      'https://archive.org/download/testmp3testfile/mpthreetest.mp3',
      'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
      'https://archive.org/download/Example_Ogg/example.ogg',
      'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3',
      'https://sample-videos.com/zip/10/mp3/SampleAudio_0.4mb_mp3.mp3',
      'https://www.soundjay.com/misc/sounds/fail-buzzer-02.wav',
      'https://archive.org/download/testmp3testfile/SampleAudio_0.7mb_mp3.mp3'
    ];
    return audioUrls[trackRank % audioUrls.length];
  };

  const handlePlayClick = () => {
    const audioUrl = getAudioUrl(rank);
    playTrack(rank, audioUrl);
  };

  return (
    <div className="group bg-zinc-900/50 hover:bg-zinc-800/70 rounded-lg p-4 transition-all duration-300 hover:scale-105 border border-zinc-800 hover:border-zinc-700">
      <div className="flex items-center justify-between mb-3">
        <span className="text-2xl font-bold text-green-400">#{rank}</span>
        <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={handlePlayClick}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isCurrentlyPlaying 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isCurrentlyPlaying ? (
              <Pause className="w-4 h-4 text-black" />
            ) : (
              <Play className="w-4 h-4 text-black ml-0.5" />
            )}
          </button>
          <button className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center hover:bg-zinc-600 transition-colors">
            <Heart className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
      
      <h3 className={`font-semibold text-lg mb-1 line-clamp-2 transition-colors ${
        isCurrentlyPlaying ? 'text-green-400' : 'text-white'
      }`}>
        {title}
      </h3>
      <p className="text-zinc-400 mb-2">{artist}</p>
      
      {album && (
        <p className="text-zinc-500 text-sm mb-2">{album}</p>
      )}
      
      <div className="flex justify-between items-center">
        {genre && (
          <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-full">
            {genre}
          </span>
        )}
        {streams && (
          <span className="text-xs text-zinc-500">{streams}</span>
        )}
      </div>
      
      {isCurrentlyPlaying && (
        <div className="mt-2 flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-1 h-3 bg-green-400 animate-pulse"></div>
            <div className="w-1 h-2 bg-green-400 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-1 h-4 bg-green-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-2 bg-green-400 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
          </div>
          <span className="text-xs text-green-400">Now Playing</span>
        </div>
      )}
    </div>
  );
};

export default TrackCard;
