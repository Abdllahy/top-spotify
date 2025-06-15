import { Music } from 'lucide-react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrackCard from '@/components/TrackCard';

const Index = () => {
  // Sample data for demonstration
  const sampleTracks = [
    { rank: 1, title: "Birds of a Feather", artist: "Billie Eilish", album: "Hit Me Hard and Soft", genre: "Pop", streams: "1.2B" },
    { rank: 2, title: "Anti-Hero", artist: "Taylor Swift", album: "Midnights", genre: "Pop", streams: "2.1B" },
    { rank: 3, title: "As It Was", artist: "Harry Styles", album: "Harry's House", genre: "Pop", streams: "1.9B" },
    { rank: 4, title: "Heat Waves", artist: "Glass Animals", album: "Dreamland", genre: "Indie", streams: "1.8B" },
    { rank: 5, title: "Unholy", artist: "Sam Smith ft. Kim Petras", album: "Gloria", genre: "Pop", streams: "1.7B" },
    { rank: 6, title: "Bad Habit", artist: "Steve Lacy", album: "Gemini Rights", genre: "R&B", streams: "1.6B" },
    { rank: 7, title: "Flowers", artist: "Miley Cyrus", album: "Endless Summer Vacation", genre: "Pop", streams: "1.5B" },
    { rank: 8, title: "Creepin'", artist: "Metro Boomin, The Weeknd, 21 Savage", album: "Heroes & Villains", genre: "Hip-Hop", streams: "1.4B" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Top Tracks
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Get a preview of the biggest hits that dominated 2024's music landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleTracks.map((track) => (
            <TrackCard
              key={track.rank}
              rank={track.rank}
              title={track.title}
              artist={track.artist}
              album={track.album}
              genre={track.genre}
              streams={track.streams}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-full transition-colors">
            View All 100 Tracks
          </button>
        </div>
      </div>

      <footer className="bg-zinc-950 border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <Music className="w-5 h-5 text-black" />
            </div>
            <span className="text-white font-bold text-xl">Top 100 Tracks 2024</span>
          </div>
          <p className="text-zinc-400">
            Exploring the year's biggest musical moments through data and analysis
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
