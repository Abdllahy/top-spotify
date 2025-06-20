import { Music } from 'lucide-react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrackCard from '@/components/TrackCard';
import React, { useState } from 'react';

// Manually mapped from user data. Genres are set to 'Pop' unless clearly another genre.
const tracks = [
  { rank: 1, title: "BIRDS OF A FEATHER", artist: "Billie Eilish", album: "HIT ME HARD AND SOFT", genre: "Pop" },
  { rank: 2, title: "Die With A Smile", artist: "Lady Gaga", album: "Die With A Smile", genre: "Pop" },
  { rank: 3, title: "back to friends", artist: "sombr", album: "back to friends", genre: "Pop" },
  { rank: 4, title: "That's So True", artist: "Gracie Abrams", album: "The Secret of Us (Deluxe)", genre: "Pop" },
  { rank: 5, title: "WILDFLOWER", artist: "Billie Eilish", album: "HIT ME HARD AND SOFT", genre: "Pop" },
  { rank: 6, title: "Ordinary", artist: "Alex Warren", album: "You'll Be Alright, Kid (Chapter 1)", genre: "Pop" },
  { rank: 7, title: "APT.", artist: "ROSÉ", album: "APT.", genre: "Pop" },
  { rank: 8, title: "Good Luck, Babe!", artist: "Chappell Roan", album: "Good Luck, Babe!", genre: "Pop" },
  { rank: 9, title: "Not Like Us", artist: "Kendrick Lamar", album: "Not Like Us", genre: "Hip-Hop" },
  { rank: 10, title: "Si Antes Te Hubiera Conocido", artist: "KAROL G", album: "Si Antes Te Hubiera Conocido", genre: "Reggaeton" },
  { rank: 11, title: "No One Noticed", artist: "The Marías", album: "Submarine", genre: "Pop" },
  { rank: 12, title: "Beautiful Things", artist: "Benson Boone", album: "Fireworks & Rollerblades", genre: "Pop" },
  { rank: 13, title: "PASSO BEM SOLTO - Slowed", artist: "ATLXS", album: "PASSO BEM SOLTO", genre: "Pop" },
  { rank: 14, title: "Sailor Song", artist: "Gigi Perez", album: "Sailor Song", genre: "Pop" },
  { rank: 15, title: "tv off (feat. lefty gunplay)", artist: "Kendrick Lamar", album: "GNX", genre: "Hip-Hop" },
  { rank: 16, title: "The Days - NOTION Remix", artist: "Chrystal", album: "The Days (NOTION Remix)", genre: "Electronic" },
  { rank: 17, title: "ME JALO", artist: "Fuerza Regida", album: "MALA MÍA", genre: "Pop" },
  { rank: 18, title: "luther (with sza)", artist: "Kendrick Lamar", album: "GNX", genre: "Hip-Hop" },
  { rank: 19, title: "blue", artist: "yung kai", album: "blue", genre: "Pop" },
  { rank: 20, title: "Taste", artist: "Sabrina Carpenter", album: "Short n' Sweet", genre: "Pop" },
  { rank: 21, title: "Messy", artist: "Lola Young", album: "Messy", genre: "Pop" },
  { rank: 22, title: "Espresso", artist: "Sabrina Carpenter", album: "Short n' Sweet", genre: "Pop" },
  { rank: 23, title: "CHIHIRO", artist: "Billie Eilish", album: "HIT ME HARD AND SOFT", genre: "Pop" },
  { rank: 24, title: "Like Him (feat. Lola Young)", artist: "Tyler, The Creator", album: "CHROMAKOPIA", genre: "Hip-Hop" },
  { rank: 25, title: "Nope your too late i already died", artist: "wifiskeleton", album: "suburban daredevil", genre: "Pop" },
  { rank: 26, title: "Stargazing", artist: "Myles Smith", album: "Stargazing", genre: "Pop" },
  { rank: 27, title: "luther (with sza)", artist: "Kendrick Lamar", album: "GNX", genre: "Hip-Hop" },
  { rank: 28, title: "Qué Pasaría...", artist: "Rauw Alejandro", album: "Cosa Nuestra", genre: "Reggaeton" },
  { rank: 29, title: "Who", artist: "Jimin", album: "MUSE", genre: "K-Pop" },
  { rank: 30, title: "capaz (merengueton)", artist: "Alleh", album: "LA CIUDAD", genre: "Pop" },
  { rank: 31, title: "Feel It (From \"Invincible\")", artist: "d4vd", album: "Feel It (From \"Invincible\")", genre: "Pop" },
  { rank: 32, title: "Love Me Not", artist: "Ravyn Lenae", album: "Bird's Eye", genre: "Pop" },
  { rank: 33, title: "I Love You, I'm Sorry", artist: "Gracie Abrams", album: "The Secret of Us", genre: "Pop" },
  { rank: 34, title: "Espresso", artist: "Sabrina Carpenter", album: "Espresso", genre: "Pop" },
  { rank: 35, title: "I Adore You (feat. Daecolm)", artist: "HUGEL", album: "I Adore You (feat. Daecolm)", genre: "Pop" },
  { rank: 36, title: "Slow It Down", artist: "Benson Boone", album: "Fireworks & Rollerblades", genre: "Pop" },
  { rank: 37, title: "Beautiful Things", artist: "Benson Boone", album: "Beautiful Things", genre: "Pop" },
  { rank: 38, title: "Gata Only", artist: "FloyyMenor", album: "Gata Only", genre: "Reggaeton" },
  { rank: 39, title: "Love Me Not", artist: "Ravyn Lenae", album: "Love Me Not / Love Is Blind", genre: "Pop" },
  { rank: 40, title: "APT.", artist: "ROSÉ", album: "rosie", genre: "Pop" },
  { rank: 41, title: "Messy", artist: "Lola Young", album: "This Wasn't Meant For You Anyway", genre: "Pop" },
  { rank: 42, title: "we can't be friends (wait for your love)", artist: "Ariana Grande", album: "eternal sunshine", genre: "Pop" },
  { rank: 43, title: "PUSH 2 START", artist: "Tyla", album: "TYLA +", genre: "Pop" },
  { rank: 44, title: "Austin (Boots Stop Workin')", artist: "Dasha", album: "What Happens Now?", genre: "Pop" },
  { rank: 45, title: "Move", artist: "Adam Port", album: "Move", genre: "Electronic" },
  { rank: 46, title: "LUNCH", artist: "Billie Eilish", album: "HIT ME HARD AND SOFT", genre: "Pop" },
  { rank: 47, title: "I Had Some Help (Feat. Morgan Wallen)", artist: "Post Malone", album: "F-1 Trillion", genre: "Country" },
  { rank: 48, title: "Bed Chem", artist: "Sabrina Carpenter", album: "Short n' Sweet", genre: "Pop" },
  { rank: 49, title: "MILLION DOLLAR BABY", artist: "Tommy Richman", album: "MILLION DOLLAR BABY", genre: "Hip-Hop" },
  { rank: 50, title: "Carry You Home", artist: "Alex Warren", album: "You'll Be Alright, Kid (Chapter 1)", genre: "Pop" },
  { rank: 51, title: "A Bar Song (Tipsy)", artist: "Shaboozey", album: "A Bar Song (Tipsy)", genre: "Country" },
  { rank: 52, title: "Pink Skies", artist: "Zach Bryan", album: "Pink Skies", genre: "Country" },
  { rank: 53, title: "DENIAL IS A RIVER", artist: "Doechii", album: "Alligator Bites Never Heal", genre: "Hip-Hop" },
  { rank: 54, title: "In The Stars", artist: "Benson Boone", album: "Fireworks & Rollerblades", genre: "Pop" },
  { rank: 55, title: "Guess featuring billie eilish", artist: "Charli xcx", album: "Brat and it's completely different but also still brat", genre: "Pop" },
  { rank: 56, title: "Diet Pepsi", artist: "Addison Rae", album: "Diet Pepsi", genre: "Pop" },
  { rank: 57, title: "Too Sweet", artist: "Hozier", album: "Unreal Unearth: Unaired", genre: "Indie" },
  { rank: 58, title: "I Don't Wanna Wait", artist: "David Guetta", album: "I Don't Wanna Wait", genre: "Electronic" },
  { rank: 59, title: "Indigo (feat. Avery Anna)", artist: "Sam Barber", album: "Restless Mind", genre: "Country" },
  { rank: 60, title: "Like That", artist: "Future", album: "WE DON'T TRUST YOU", genre: "Hip-Hop" },
  { rank: 61, title: "Sticky (feat. GloRilla, Sexyy Red & Lil Wayne)", artist: "Tyler, The Creator", album: "CHROMAKOPIA", genre: "Hip-Hop" },
  { rank: 62, title: "Juno", artist: "Sabrina Carpenter", album: "Short n' Sweet", genre: "Pop" },
  { rank: 63, title: "Please Please Please", artist: "Sabrina Carpenter", album: "Short n' Sweet", genre: "Pop" },
  { rank: 64, title: "THE GREATEST", artist: "Billie Eilish", album: "HIT ME HARD AND SOFT", genre: "Pop" },
  { rank: 65, title: "Black Friday (pretty like the sun)", artist: "Lost Frequencies", album: "Black Friday (pretty like the sun)", genre: "Electronic" },
  { rank: 66, title: "Daylight", artist: "David Kushner", album: "The Dichotomy", genre: "Pop" },
  { rank: 67, title: "Kisses (feat. bbyclose)", artist: "BL3SS", album: "Kisses (feat. bbyclose)", genre: "Electronic" },
  { rank: 68, title: "A Bar Song (Tipsy)", artist: "Shaboozey", album: "Where I've Been, Isn't Where I'm Going", genre: "Country" },
  { rank: 69, title: "Fortnight (feat. Post Malone)", artist: "Taylor Swift", album: "THE TORTURED POETS DEPARTMENT", genre: "Pop" },
  { rank: 70, title: "M a k e I t T o T h e M o r n i n g", artist: "PARTYNEXTDOOR", album: "PARTYNEXTDOOR 4 (P4)", genre: "R&B" },
  { rank: 71, title: "Funk de Beleza - Slowed", artist: "Nateki", album: "Funk de Beleza", genre: "Funk" },
  { rank: 72, title: "Ride Or Die, Pt. 2 (with Villano Antillano & Tokischa)", artist: "Sevdaliza", album: "Ride Or Die, Pt. 2", genre: "Electronic" },
  { rank: 73, title: "Bad Dreams", artist: "Teddy Swims", album: "Bad Dreams", genre: "R&B" },
  { rank: 74, title: "peekaboo (feat. azchike)", artist: "Kendrick Lamar", album: "GNX", genre: "Hip-Hop" },
  { rank: 75, title: "The Reason", artist: "Hoobastank", album: "The Reason (20th Anniversary)", genre: "Rock" },
  { rank: 76, title: "Type Shit", artist: "Future", album: "WE DON'T TRUST YOU", genre: "Hip-Hop" },
  { rank: 77, title: "Close To You", artist: "Gracie Abrams", album: "The Secret of Us", genre: "Pop" },
  { rank: 78, title: "MUTT", artist: "Leon Thomas", album: "MUTT", genre: "R&B" },
  { rank: 79, title: "Please Please Please", artist: "Sabrina Carpenter", album: "Please Please Please", genre: "Pop" },
  { rank: 80, title: "I Had Some Help (Feat. Morgan Wallen)", artist: "Post Malone", album: "I Had Some Help", genre: "Country" },
  { rank: 81, title: "Von dutch", artist: "Charli xcx", album: "BRAT", genre: "Pop" },
  { rank: 82, title: "SI NO ES CONTIGO", artist: "Cris Mj", album: "SI NO ES CONTIGO", genre: "Reggaeton" },
  { rank: 83, title: "BLUE", artist: "Billie Eilish", album: "HIT ME HARD AND SOFT", genre: "Pop" },
  { rank: 84, title: "Say My Name - Remix", artist: "Morgan Seatree", album: "Say My Name (Remix)", genre: "Electronic" },
  { rank: 85, title: "i like the way you kiss me", artist: "Artemas", album: "i like the way you kiss me", genre: "Pop" },
  { rank: 86, title: "The Emptiness Machine", artist: "Linkin Park", album: "From Zero", genre: "Rock" },
  { rank: 87, title: "NEW DROP", artist: "Don Toliver", album: "HARDSTONE PSYCHO", genre: "Hip-Hop" },
  { rank: 88, title: "L'AMOUR DE MA VIE", artist: "Billie Eilish", album: "HIT ME HARD AND SOFT", genre: "Pop" },
  { rank: 89, title: "Belong Together", artist: "Mark Ambor", album: "Rockwood", genre: "Pop" },
  { rank: 90, title: "Dirty Cash (Money Talks)", artist: "PAWSA", album: "Dirty Cash (Money Talks)", genre: "Electronic" },
  { rank: 91, title: "Love Me Not (feat. Rex Orange County)", artist: "Ravyn Lenae", album: "Love Me Not (feat. Rex Orange County)", genre: "Pop" },
  { rank: 92, title: "CARNIVAL", artist: "¥$", album: "VULTURES 1", genre: "Hip-Hop" },
  { rank: 93, title: "PELIGROSA", artist: "FloyyMenor", album: "EL COMIENZO", genre: "Reggaeton" },
  { rank: 94, title: "Espresso Macchiato", artist: "Tommy Cash", album: "Espresso Macchiato", genre: "Pop" },
  { rank: 95, title: "Lady Killers II", artist: "G-Eazy", album: "Lady Killers II", genre: "Hip-Hop" },
  { rank: 96, title: "Scared To Start", artist: "Michael Marcagi", album: "Scared To Start", genre: "Folk" },
  { rank: 97, title: "Before You Leave Me", artist: "Alex Warren", album: "You'll Be Alright, Kid (Chapter 1)", genre: "Pop" },
  { rank: 98, title: "Nice To Meet You", artist: "Myles Smith", album: "Nice To Meet You (Mistletoe Version)", genre: "Pop" },
  { rank: 99, title: "Dirty Cash (Money Talks)", artist: "PAWSA", album: "Dirty Cash (Money Talks)", genre: "Electronic" },
  { rank: 100, title: "do i ever cross your mind", artist: "sombr", album: "do i ever cross your mind", genre: "Pop" }
];

const Index = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleTracks = showAll ? tracks : tracks.slice(0, 12);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <HeroSection />

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Canva embed above title */}
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
              src="https://www.canva.com/design/DAGqoRz5BLk/TPCAXgGVX4bjrz_L7E0Thw/view?embed"
              allowFullScreen
              allow="fullscreen"
            ></iframe>
          </div>
        </section>

        {/* Spotify Playlist embed */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 w-full">
          <iframe 
            style={{borderRadius: '12px'}} 
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DX18jTM2l2fJY?utm_source=generator" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </section>

        {/* Title moved below the Canva embed */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Top 100 Tracks 2024
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            The complete list of 2024's most popular songs across all genres
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleTracks.map((track) => (
            <TrackCard
              key={track.rank}
              rank={track.rank}
              title={track.title}
              artist={track.artist}
              album={track.album}
              genre={track.genre}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {tracks.length > 12 && (
            <button
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      </div>

      {/* Second Canva embed section */}
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
            src="https://www.canva.com/design/DAGpndym3Ps/E4306odxyzfoGBB7IARBkA/view?embed"
            allowFullScreen
            allow="fullscreen"
          ></iframe>
        </div>
      </section>

      {/* Third Canva embed section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 w-full">
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingTop: '56.2500%',
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
            src="https://www.canva.com/design/DAGq4Ofu8Uk/E1Z0k7Ui_k0_h9WnPD0xbw/view?embed"
            allowFullScreen
            allow="fullscreen"
          ></iframe>
        </div>
      </section>

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
          
          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4">
            <a href="mailto:abyogia@gmail.com" className="text-zinc-400 hover:text-green-400 transition-colors">
              Email: abyogia@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/abdullahi-bashir-74256b2b5/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-green-400 transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/Abdllahy/top-spotify" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-green-400 transition-colors">
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

export default Index;
