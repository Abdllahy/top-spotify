import { Play, TrendingUp, Headphones, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent 
              drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] 
              relative inline-block 
              px-2
              leading-tight
              min-h-[100px]
              "
            style={{
              WebkitTextStroke: "1px rgba(0,0,0,0.15)",
            }}
          >
            <span className="block align-middle rounded px-2 py-2">
              Top 100 Songs
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            of 2024
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Dive deep into the year's most popular tracks. Explore trends, discover patterns, 
            and understand what made these songs chart-toppers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-full flex items-center space-x-2 shadow-lg transition"
              onClick={() => navigate("/")}
            >
              <Play className="w-5 h-5" />
              <span>Explore Top Tracks</span>
            </Button>
            <Button
              variant="ghost"
              className="!bg-gradient-to-r !from-blue-700 !via-purple-600 !to-green-500 !text-white hover:from-green-500 hover:to-blue-700 px-8 py-3 rounded-full flex items-center space-x-2 border-none shadow-lg transition"
              onClick={() => navigate("/analysis")}
              style={{
                background: "linear-gradient(90deg, #2563eb 0%, #9333ea 60%, #22c55e 100%)",
              }}
            >
              <TrendingUp className="w-5 h-5" />
              <span>View Analysis</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100 Top Tracks</h3>
              <p className="text-zinc-400">Carefully curated list of the year's biggest hits</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
              <p className="text-zinc-400">In-depth insights and trending patterns</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Genre Breakdown</h3>
              <p className="text-zinc-400">Explore diversity across musical styles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
