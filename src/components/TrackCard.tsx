
interface TrackCardProps {
  rank: number;
  title: string;
  artist: string;
  album?: string;
  genre?: string;
}

const TrackCard = ({ rank, title, artist, album, genre }: TrackCardProps) => {
  return (
    <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800">
      <div className="flex items-center justify-between mb-3">
        <span className="text-2xl font-bold text-green-400">#{rank}</span>
      </div>

      <h3 className="font-semibold text-lg mb-1 line-clamp-2 text-white">
        {title}
      </h3>
      <p className="text-zinc-400 mb-2">{artist}</p>

      {album && (
        <p className="text-zinc-500 text-sm mb-2">{album}</p>
      )}

      {genre && (
        <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded-full">
          {genre}
        </span>
      )}
    </div>
  );
};

export default TrackCard;
