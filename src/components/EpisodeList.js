import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
import LocationsList from './LocationsList';

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(res => {
        // console.log(res.data.results);
        setEpisodes(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="grid-view ui bottom attached segment active">
      {episodes.map(episode => {
        return <EpisodeCard key={episode.id} episode={episode} />;
      })}
    </section>
  )
}