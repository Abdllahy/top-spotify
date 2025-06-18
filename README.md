# Spotify-Top-100-2024-Analysis

## Project Overview  
This repository contains Python scripts and data visualizations for analyzing the top 100 most popular songs on Spotify in 2024. The project examines trends in music duration, market availability, genre, and other audio-related features to uncover what makes a track successful. It is designed for data analysts, music marketers, and artists seeking data-backed insights into streaming success.

## Goal  
The goal of this project is to explore the underlying features that drive music popularity on Spotify. Inspired by the evolving nature of music consumption and data-driven curation, this project aims to identify patterns that define hit songs in 2024—filling a gap in understanding how factors like genre, availability, and audio characteristics contribute to streaming performance.

## Features  
- Extraction of top 100 tracks from Spotify for the year 2024  
- Collection of audio features like tempo, valence, energy, and duration  
- Integration of artist genres for deeper musical profiling  
- Cleaned and enriched dataset ready for analysis and visualization  
- Multiple bivariate and multivariate charts using Seaborn and Matplotlib  
- Analysis of track positions, available markets, and explicit content  

## Data  
The dataset is extracted using Spotify’s Web API. It includes metadata for tracks released in 2024, such as:  
- Track name, artist, album  
- Release date and popularity score  
- Duration (in ms), track number, disc number  
- Explicit label, available markets  
- Genre information (fetched per artist)

Limitations:  
Some genre information was initially missing and was manually filled where possible. Audio features like danceability or energy were unavailable for a few tracks due to Spotify API restrictions under certain authentication scopes.

## Usage / Contribution  
To replicate this analysis:  
1. Clone this repo  
2. Create a Spotify Developer App and replace `client_id`, `client_secret`, and `redirect_uri` in the script  
3. Run `top_100_extractor.py` to fetch the dataset  
4. Open `spotify_analysis.ipynb` to run and visualize the analysis  

**Requirements**:  
- Python 3.9+  
- `spotipy`, `pandas`, `matplotlib`, `seaborn`

## Project Structure  

## Technical Details  
- Used Spotify’s Web API (Spotipy wrapper) for data collection  
- Pandas for data manipulation  
- Seaborn & Matplotlib for plotting charts  
- Genres were fetched using `sp.artist()` calls  
- Multivariate analysis included factors like duration, popularity, genre, and market reach

## Results & Insights  
- Songs with broader market availability tend to have higher popularity scores  
- Most popular tracks fall within 2.5 to 3.5 minutes in duration  
- Genres like pop, hip-hop, and Afrobeats were dominant in 2024  
- Track position (track number) shows mild influence on popularity  
- Explicit content had no clear correlation with popularity

## Future Work  
- Incorporate TikTok virality or YouTube views for cross-platform insights  
- Add audio sentiment or lyrical analysis (via NLP)  
- Create a live dashboard using Streamlit or Power BI  
- Compare with Billboard or Apple Music charts

## Spotify Top 100 Songs of 2024 Analysis – Project Assessment

---

### What is the problem you are solving?

In today’s digital music era, artists, producers, and marketers struggle to understand what makes a song rise to the top of the charts. Is it the genre, release format, explicit content, or global availability?  
This project aims to **decode the patterns and attributes** of the most popular songs on Spotify in 2024 to uncover **what truly influences success in the music industry**.

---

### 🛠️ What tools did you use?

- **Python**: Core scripting language used to automate data extraction and analysis.
- **Pandas**: For data wrangling, transformation, and filtering.
- **Spotipy (Spotify API)**: To access real-time data on tracks, artists, and audio features.
- **Matplotlib & Seaborn**: For clean and insightful data visualizations.
- **Google Colab**: For running interactive notebooks in a cloud environment.

---

### What insights did you or do you want to discover?

- **Clean songs** represent 64% of the Top 100, suggesting broader mainstream appeal.
- **Optimal song length** for popularity ranges between **2.5 to 4 minutes**.
- **Wider market availability does not guarantee higher popularity** — even songs in only 20 markets can trend if they resonate.
- **Top artists** like Billie Eilish and Sabrina Carpenter dominate, with up to **7 tracks each**, highlighting the value of strong fanbases.
- **Album vs. single releases** don’t strongly influence popularity — both formats perform similarly.

These insights can **guide music industry stakeholders** toward more data-driven decisions.

---

### How would a business or community benefit from your work?

- **Record labels & producers** can optimize releases for format, length, and content type based on what’s trending.
- **Streaming platforms & marketers** gain insights into listener behavior, enabling better recommendation and promotion strategies.
- **Aspiring musicians** can model their approach based on traits of successful tracks.
- Overall, this project helps **reduce guesswork, improve ROI on campaigns, and increase the probability of chart success** through data.

---

## Article and Website
[Read the full article on Hashnode](https://abdullahybashir.hashnode.dev/uncovering-the-formula-behind-spotifys-top-100-songs-of-2024)

[Interact with the website](https://top-spotify-silk.vercel.app/)

---

## Contact / Support  
For questions, reach out via:  
📧 abyogia@gmail.com

🌐 GitHub Issues tab  
