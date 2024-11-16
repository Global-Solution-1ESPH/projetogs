import React, { useState, useEffect } from 'react';


const img = [
  'src/assets/',
  'src/assets/',
  'src/assets/',
];

const Home = () => {

//Slideshow
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImg = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
  };

  useEffect(() => {
    const intervalo = setInterval(nextImg, 3000);
    return () => clearInterval(intervalo);
  }, []);




  return (
    <div>


    <div style={{ position: 'relative', width: 'auto', margin: 'auto' }}>
      <img
        src={img[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: 'auto', height: 'auto', borderRadius: '8px' }}
      />
    </div>



    </div>
    
  );
};

export default Home;
