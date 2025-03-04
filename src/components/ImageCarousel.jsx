import React from 'react';
import { useState, useEffect } from 'react';

const ImageCarousel = () => {
  const images = [
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
    'https://images.unsplash.com/photo-1526772662000-3f88f10405ff',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    'https://images.unsplash.com/photo-1491555103944-7c647fd857e3'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="carousel">
      <img 
        src={images[currentIndex]} 
        alt={`Travel destination ${currentIndex + 1}`} 
        className="carousel-image full-screen" 
      />
    </section>
  );
};

export default ImageCarousel;
