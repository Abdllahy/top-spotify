import { BarChart3, TrendingUp, Users, Music } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Analysis = () => {
  const stats = [
    {
      icon: Music,
      label: "Total Tracks Analyzed",
      value: "100",
      color: "text-green-400",
      bgColor: "bg-green-500/20"
    },
    {
      icon: TrendingUp,
      label: "Average Streams",
      value: "2.1B",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20"
    },
    {
      icon: Users,
      label: "Unique Artists",
      value: "78",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20"
    },
    {
      icon: BarChart3,
      label: "Genres Covered",
      value: "12",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20"
    }
  ];

  const topGenres = [
    { name: "Pop", percentage: 32, color: "bg-green-500" },
    { name: "Hip-Hop", percentage: 28, color: "bg-blue-500" },
    { name: "Rock", percentage: 18, color: "bg-purple-500" },
    { name: "R&B", percentage: 12, color: "bg-yellow-500" },
    { name: "Electronic", percentage: 10, color: "bg-pink-500" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Music Data Analysis
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Deep dive into the patterns, trends, and insights from the top 100 songs of 2024
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-colors">
                <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-zinc-400">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
            <h2 className="text-2xl font-semibold mb-6 text-white">Genre Distribution</h2>
            <div className="space-y-4">
              {topGenres.map((genre, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-zinc-300 font-medium w-20 text-left">{genre.name}</span>
                  <div className="flex items-center space-x-3 flex-1 ml-4">
                    <div className="flex-1 bg-zinc-800 rounded-full h-2">
                      <div 
                        className={`${genre.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${genre.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-zinc-400 text-sm w-12 text-right">{genre.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
            <h2 className="text-2xl font-semibold mb-6 text-white">Key Insights</h2>
            <div className="space-y-4">
              <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <h3 className="text-green-400 font-semibold mb-2">Most Popular Genre</h3>
                <p className="text-zinc-300">Pop music dominates with 32% of the top 100, showing its continued mainstream appeal.</p>
              </div>
              
              <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <h3 className="text-blue-400 font-semibold mb-2">Hip-Hop's Strong Presence</h3>
                <p className="text-zinc-300">Hip-Hop claims 28% of the charts, reflecting its cultural impact and streaming dominance.</p>
              </div>
              
              <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <h3 className="text-purple-400 font-semibold mb-2">Artist Diversity</h3>
                <p className="text-zinc-300">78 unique artists in the top 100 shows a healthy diversity in the music landscape.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
          <h2 className="text-2xl font-semibold mb-6 text-white">2024 Music Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Streaming Growth</h3>
              <p className="text-zinc-400">Average streams per track increased by 23% compared to 2023</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Cross-Genre Fusion</h3>
              <p className="text-zinc-400">More artists are blending genres, creating unique sounds</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Global Influence</h3>
              <p className="text-zinc-400">International artists make up 34% of the top charts</p>
            </div>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 w-full">
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 0,
              paddingTop: '56.25%',
              paddingBottom: 0,
              boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
              marginTop: '1.6em',
              marginBottom: '0.9em',
              overflow: 'hidden',
              borderRadius: '8px',
              willChange: 'transform',
            }}
          >
            <iframe
              loading="lazy"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                border: 'none',
                padding: 0,
                margin: 0,
              }}
              src="https://www.canva.com/design/DAGqoaAJD4g/4PYBBMqoerBN2j2c5P0B8g/view?embed"
              allowFullScreen
              allow="fullscreen"
            ></iframe>
          </div>
        </section>

      </div>

      <footer className="bg-zinc-950 border-t border-zinc-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <Music className="w-5 h-5 text-black" />
            </div>
            <span className="text-white font-bold text-xl">Top 100 Tracks 2024</span>
          </div>
          <p className="text-zinc-400 mb-4">
            Exploring the year's biggest musical moments through data and analysis
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4">
            <a href="mailto:abyogia@gmail.com" className="text-zinc-400 hover:text-green-400 transition-colors">
              Email: abyogia@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/abdullahi-bashir-74256b2b5/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-green-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-green-400 transition-colors">
              GitHub
            </a>
            <a href="https://abdullahybashir.hashnode.dev/uncovering-the-formula-behind-spotifys-top-100-songs-of-2024" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-green-400 transition-colors">
              Hashnode
            </a>
          </div>
          
          <p className="text-xs text-zinc-500 mt-4">
            Made by Abdullahi Bashir 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Analysis;
