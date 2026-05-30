import React from 'react';
import './Home.css';

function Home() {

  function handleShopNow() {
    alert("Please login first!");
  }

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to MyStore</h1>

        <p>
          Discover the latest fashion, electronics, and lifestyle products
          at unbeatable prices.
        </p>

        <button
          className="shop-btn"
          onClick={handleShopNow}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Home;