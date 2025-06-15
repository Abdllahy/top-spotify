
import { Music } from 'lucide-react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrackCard from '@/components/TrackCard';

const Index = () => {
  // Updated track list with provided data
  const tracks = [
    { rank: 1, title: "BIRDS OF A FEATHER", artist: "Billie Eilish", album: "HIT ME HARD AND SOFT", genre: "Pop" },
    { rank: 2, title: "Die With A Smile", artist: "Lady Gaga", album: "Die With A Smile", genre: "Pop" },
    { rank: 3, title: "back to friends", artist: "sombr", album: "back to friends", genre: "Alternative" },
    { rank: 4, title: "That's So True", artist: "Gracie Abrams", album: "The Secret of Us (Deluxe)", genre: "Pop" },
    { rank: 5, title: "WILDFLOWER", artist: "Billie Eilish", album: "HIT ME HARD AND SOFT", genre: "Pop" },
    { rank: 6, title: "Ordinary", artist: "Alex Warren", album: "You'll Be Alright, Kid (Chapter 1)", genre: "Pop" },
    { rank: 7, title: "APT.", artist: "ROSÉ", album: "APT.", genre: "K-Pop" },
    { rank: 8, title: "Good Luck, Babe!", artist: "Chappell Roan", album: "Good Luck, Babe!", genre: "Pop" },
    { rank: 9, title: "Not Like Us", artist: "Kendrick Lamar", album: "Not Like Us", genre: "Hip-Hop" },
    { rank: 10, title: "Si Antes Te Hubiera Conocido", artist: "KAROL G", album: "Si Antes Te Hubiera Conocido", genre: "Reggaeton" },
    { rank: 11, title: "No One Noticed", artist: "The Marías", album: "Submarine", genre: "Indie" },
    { rank: 12, title: "Beautiful Things", artist: "Benson Boone", album: "Fireworks & Rollerblades", genre: "Pop" },
    { rank: 13, title: "PASSO BEM SOLTO - Slowed", artist: "ATLXS", album: "PASSO BEM SOLTO", genre: "Electronic" },
    { rank: 14, title: "Sailor Song", artist: "Gigi Perez", album: "Sailor Song", genre: "Folk" },
    { rank: 15, title: "tv off (feat. lefty gunplay)", artist: "Kendrick Lamar", album: "GNX", genre: "Hip-Hop" },
    { rank: 16, title: "The Days - NOTION Remix", artist: "Chrystal", album: "The Days (NOTION Remix)", genre: "Electronic" },
    { rank: 17, title: "ME JALO", artist: "Fuerza Regida", album: "MALA MÍA", genre: "Regional Mexican" },
    { rank: 18, title: "luther (with sza)", artist: "Kendrick Lamar", album: "GNX", genre: "Hip-Hop" },
    { rank: 19, title: "blue", artist: "yung kai", album: "blue", genre: "R&B" },
    { rank: 20, title: "Taste", artist: "Sabrina Carpenter", album: "Short n' Sweet", genre: "Pop" },
    { rank: 21, title: "Messy", artist: "Lola Young", album: "Messy", genre: "Pop" },
    { rank: 22, title: "Espresso", artist: "Sabrina Carpenter", album: "Short n' Sweet", genre: "Pop" },
    { rank: 23, title: "CHIHIRO", artist: "Billie Eilish", album: "HIT ME HARD AND SOFT", genre: "Pop" },
    { rank: 24, title: "Like Him (feat. Lola Young)", artist: "Tyler, The Creator", album: "CHROMAKOPIA", genre: "Hip-Hop" },
    { rank: 25, title: "Nope your too late i already died", artist: "wifiskeleton", album: "suburban daredevil", genre: "Alternative" },
    { rank: 26, title: "Stargazing", artist: "Myles Smith", album: "Stargazing", genre: "Pop" },
    { rank: 27, title: "Qué Pasaría...", artist: "Rauw Alejandro", album: "Cosa Nuestra", genre: "Reggaeton" },
    { rank: 28, title: "Who", artist: "Jimin", album: "MUSE", genre: "K-Pop" },
    { rank: 29, title: "capaz (merengueton)", artist: "Alleh", album: "LA CIUDAD", genre: "Latin" },
    { rank: 30, title: "Feel It (From "Invincible")", artist: "d4vd", album: "Feel It (From "Invincible")", genre: "R&B" },
    { rank: 31, title: "Love Me Not", artist: "Ravyn Lenae", album: "Bird's Eye", genre: "R&B" },
    { rank: 32, title: "I Love You, I'm Sorry", artist: "Gracie Abrams", album: "The Secret of Us", genre: "Pop" },
    { rank: 33, title: "I Adore You (feat. Daecolm)", artist: "HUGEL", album: "I Adore You (feat. Daecolm)", genre: "Electronic" },
    { rank: 34, title: "Slow It Down", artist: "Benson Boone", album: "Fireworks & Rollerblades", genre: "Pop" },
    { rank: 35, title: "Gata Only", artist: "FloyyMenor", album: "Gata Only", genre: "Reggaeton" },
    { rank: 36, title: "we can't be friends (wait for your love)", artist: "Ariana Grande", album: "eternal sunshine", genre: "Pop" },
    { rank: 37, title: "PUSH 2 START", artist: "Tyla", album: "TYLA +", genre: "Afrobeats" },
    { rank: 38, title: "Austin (Boots Stop Workin')", artist: "Dasha", album: "What Happens Now?", genre: "Country" },
    { rank: 39, title: "Move", artist: "Adam Port", album: "Move", genre: "Electronic" },
    { rank: 40, title: "LUNCH", artist: "Billie Eilish", album: "HIT ME HARD AND SOFT", genre: "Pop" },
    { rank: 41, title: "I Had Some Help (Feat. Morgan Wallen)", artist: "Post Malone", album: "F-1 Trillion", genre: "Country" },
    { rank: 42, title: "Bed Chem", artist: "Sabrina Carpenter", album: "Short n' Sweet", genre: "Pop" },
    { rank: 43, title: "MILLION DOLLAR BABY", artist: "Tommy Richman", album: "MILLION DOLLAR BABY", genre: "Hip-Hop" },
    { rank: 44, title: "Carry You Home", artist: "Alex Warren", album: "You'll Be Alright, Kid (Chapter 1)", genre: "Pop" },
    { rank: 45, title: "A Bar Song (Tipsy)", artist: "Shaboozey", album: "A Bar Song (Tipsy)", genre: "Country" },
    { rank: 46, title: "Pink Skies", artist: "Zach Bryan", album: "Pink Skies", genre: "Country" },
    { rank: 47, title: "DENIAL IS A RIVER", artist: "Doechii", album: "Alligator Bites Never Heal", genre: "Hip-Hop" },
    { rank: 48, title: "In The Stars", artist: "Benson Boone", album: "Fireworks & Rollerblades", genre: "Pop" },
    { rank: 49, title: "Guess featuring billie eilish", artist: "Charli xcx", album: "Brat and it's completely different but also still brat", genre: "Pop" },
    { rank: 50, title: "Diet Pepsi", artist: "Addison Rae", album: "Diet Pepsi", genre: "Pop" },
    { rank: 51, title: "Too Sweet", artist: "Hozier", album: "Unreal Unearth: Unaired", genre: "Indie" },
    { rank: 52, title: "I Don't Wanna Wait", artist: "David Guetta", album: "I Don't Wanna Wait", genre: "Electronic" },
    { rank: 53, title: "Indigo (feat. Avery Anna)", artist: "Sam Barber", album: "Restless Mind", genre: "Country" },
    { rank: 54, title: "Like That", artist: "Future", album: "WE DON'T TRUST YOU", genre: "Hip-Hop" },
    { rank: 55, title: "Sticky (feat. GloRilla, Sexyy Red & Lil Wayne)", artist: "Tyler, The Creator", album: "CHROMAKOPIA", genre: "Hip-Hop" },
    { rank: 56, title: "Juno", artist: "Sabrina Carpenter", album: "Short n' Sweet", genre: "Pop" },
    { rank: 57, title: "Please Please Please", artist: "Sabrina Carpenter", album: "Short n' Sweet", genre: "Pop" },
    { rank: 58, title: "THE GREATEST", artist: "Billie Eilish", album: "HIT ME HARD AND SOFT", genre: "Pop" },
    { rank: 59, title: "Black Friday (pretty like the sun)", artist: "Lost Frequencies", album: "Black Friday (pretty like the sun)", genre: "Electronic" },
    { rank: 60, title: "Daylight", artist: "David Kushner", album: "The Dichotomy", genre: "Pop" },
    { rank: 61, title: "Kisses (feat. bbyclose)", artist: "BL3SS", album: "Kisses (feat. bbyclose)", genre: "Electronic" },
    { rank: 62, title: "Fortnight (feat. Post Malone)", artist: "Taylor Swift", album: "THE TORTURED POETS DEPARTMENT", genre: "Pop" },
    { rank: 63, title: "M a k e I t T o T h e M o r n i n g", artist: "PARTYNEXTDOOR", album: "PARTYNEXTDOOR 4 (P4)", genre: "R&B" },
    { rank: 64, title: "Funk de Beleza - Slowed", artist: "Nateki", album: "Funk de Beleza", genre: "Funk" },
    { rank: 65, title: "Ride Or Die, Pt. 2 (with Villano Antillano & Tokischa)", artist: "Sevdaliza", album: "Ride Or Die, Pt. 2", genre: "Electronic" },
    { rank: 66, title: "Bad Dreams", artist: "Teddy Swims", album: "Bad Dreams", genre: "R&B" },
    { rank: 67, title: "peekaboo (feat. azchike)", artist: "Kendrick Lamar", album: "GNX", genre: "Hip-Hop" },
    { rank: 68, title: "The Reason", artist: "Hoobastank", album: "The Reason (20th Anniversary)", genre: "Rock" },
    { rank: 69, title: "Type Shit", artist: "Future", album: "WE DON'T TRUST YOU", genre: "Hip-Hop" },
    { rank: 70, title: "Close To You", artist: "Gracie Abrams", album: "The Secret of Us", genre: "Pop" },
    { rank: 71, title: "MUTT", artist: "Leon Thomas", album: "MUTT", genre: "R&B" },
    { rank: 72, title: "Von dutch", artist: "Charli xcx", album: "BRAT", genre: "Pop" },
    { rank: 73, title: "SI NO ES CONTIGO", artist: "Cris Mj", album: "SI NO ES CONTIGO", genre: "Reggaeton" },
    { rank: 74, title: "BLUE", artist: "Billie Eilish", album: "HIT ME HARD AND SOFT", genre: "Pop" },
    { rank: 75, title: "Say My Name - Remix", artist: "Morgan Seatree", album: "Say My Name (Remix)", genre: "Electronic" },
    { rank: 76, title: "i like the way you kiss me", artist: "Artemas", album: "i like the way you kiss me", genre: "Alternative" },
    { rank: 77, title: "The Emptiness Machine", artist: "Linkin Park", album: "From Zero", genre: "Rock" },
    { rank: 78, title: "NEW DROP", artist: "Don Toliver", album: "HARDSTONE PSYCHO", genre: "Hip-Hop" },
    { rank: 79, title: "L'AMOUR DE MA VIE", artist: "Billie Eilish", album: "HIT ME HARD AND SOFT", genre: "Pop" },
    { rank: 80, title: "Belong Together", artist: "Mark Ambor", album: "Rockwood", genre: "Pop" },
    { rank: 81, title: "Dirty Cash (Money Talks)", artist: "PAWSA", album: "Dirty Cash (Money Talks)", genre: "Electronic" },
    { rank: 82, title: "Love Me Not (feat. Rex Orange County)", artist: "Ravyn Lenae", album: "Love Me Not (feat. Rex Orange County)", genre: "R&B" },
    { rank: 83, title: "CARNIVAL", artist: "¥$", album: "VULTURES 1", genre: "Hip-Hop" },
    { rank: 84, title: "PELIGROSA", artist: "FloyyMenor", album: "EL COMIENZO", genre: "Reggaeton" },
    { rank: 85, title: "Espresso Macchiato", artist: "Tommy Cash", album: "Espresso Macchiato", genre: "Hip-Hop" },
    { rank: 86, title: "Lady Killers II", artist: "G-Eazy", album: "Lady Killers II", genre: "Hip-Hop" },
    { rank: 87, title: "Scared To Start", artist: "Michael Marcagi", album: "Scared To Start", genre: "Folk" },
    { rank: 88, title: "Before You Leave Me", artist: "Alex Warren", album: "You'll Be Alright, Kid (Chapter 1)", genre: "Pop" },
    { rank: 89, title: "Nice To Meet You", artist: "Myles Smith", album: "Nice To Meet You (Mistletoe Version)", genre: "Pop" },
    { rank: 90, title: "do i ever cross your mind", artist: "sombr", album: "do i ever cross your mind", genre: "Alternative" }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Top 100 Tracks 2024
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            The complete list of 2024's most popular songs across all genres
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tracks.map((track) => (
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
