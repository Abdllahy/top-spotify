
import { Heart } from 'lucide-react';

interface TrackCardProps {
  rank: number;
  title: string;
  artist: string;
  album?: string;
  genre?: string;
  streams?: string;
}

const TrackCard = ({ rank, title, artist, album, genre, streams }: TrackCardProps) => {
  return (
    <div className="group bg-zinc-900/50 hover:bg-zinc-800/70 rounded-lg p-4 transition-all duration-300 hover:scale-105 border border-zinc-800 hover:border-zinc-700">
      <div className="flex items-center justify-between mb-3">
        <span className="text-2xl font-bold text-green-400">#{rank}</span>
        <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center hover:bg-zinc-600 transition-colors">
            <Heart className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
      
      <h3 className="font-semibold text-lg mb-1 line-clamp-2 text-white">
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
    </div>
  );
};

export default TrackCard;
