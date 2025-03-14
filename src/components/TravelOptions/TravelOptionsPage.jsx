import React from 'react';
import './TravelOptionsPage.css';


const TravelOptionsPage = () => {
  const travelOptions = [
    { name: 'Cruises', img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29', link: '/cruises' },
    { name: 'Hotels', img: 'https://images.unsplash.com/photo-1564507592333-7d5dc1b1f43d', link: '/hotels' },
    { name: 'Vacation Packages', img: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', link: '/vacation-packages' },
    { name: 'Top Destinations', img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963', link: '/top-destinations' }
  ];

  return (
    <>
      <section className="travel-options">
        <h2>Explore Our Travel Options</h2>
        <div className="options-grid">
          {travelOptions.map((option) => (
            <a href={option.link} key={option.name} className="option">
              <img src={option.img} alt={option.name} className="option-image" />
              <p>{option.name}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default TravelOptionsPage;
