
import { Play, TrendingUp, Headphones, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 text-white">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Top 100 Songs
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            of 2024
          </h2>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl mx-auto">
            Dive deep into the year's most popular tracks. Explore trends, discover patterns, 
            and understand what made these songs chart-toppers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-3 rounded-full flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Explore Top Tracks</span>
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full flex items-center space-x-2">
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
