import React from 'react';
import homeVideo from '../videos/homevideo.mp4';
import homeVideo2 from '../videos/homevideo6.mp4';


import altgiyim from '../images/ALT.jpg';
import disgiyim from '../images/disgiyim.jpg';
import pijama from '../images/pijama.jpg';
import ustgiyim from '../images/ÜST.jpg';

const data = [
  { title: 'ALT GİYİM', image: altgiyim },
  { title: 'DIŞ GİYİM', image: disgiyim },
  { title: 'PİJAMA', image: pijama },
  { title: 'ÜST GİYİM', image: ustgiyim },
];

const Home = () => {
  return (
    <main className="grid">
      <video
        className="home-video"
        src={homeVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <video
  className="home-video"
  src={homeVideo2}
  autoPlay
  loop
  muted
  playsInline
/>

      {data.map((item, index) => (
        <div className="grid-item" key={index}>
          <img src={item.image} alt={item.title} />
          {item.title && (
            <div className="label">
              <p>{item.title}</p>
              <p className="sub">KEŞFET</p>
            </div>
          )}
        </div>
      ))}
    </main>
  );
};

export default Home;
