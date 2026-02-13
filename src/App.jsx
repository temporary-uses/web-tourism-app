import { useState } from 'react';

const destinations = [
  {
    name: 'Maldives',
    category: 'beach',
    image:
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80',
    description: 'Crystal lagoons, overwater villas, sunset cruises.',
    alt: 'Maldives beach villas',
  },
  {
    name: 'Swiss Alps',
    category: 'mountain',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
    description: 'Scenic train rides, alpine lodges, glacier walks.',
    alt: 'Swiss Alps mountain adventure',
  },
  {
    name: 'Tokyo',
    category: 'city',
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80',
    description: 'Neon nightlife, ancient shrines, world-class food.',
    alt: 'Tokyo city lights',
  },
  {
    name: 'Bali',
    category: 'beach',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
    description: 'Volcanic beaches, jungle retreats, temple sunsets.',
    alt: 'Bali tropical coast',
  },
];

const filters = ['all', 'beach', 'mountain', 'city'];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [message, setMessage] = useState('');

  const filteredDestinations =
    filter === 'all'
      ? destinations
      : destinations.filter((destination) => destination.category === filter);

  const handleSubscribe = (event) => {
    event.preventDefault();
    const email = event.target.email.value.trim();

    if (!email) {
      setMessage('Please enter your email first.');
      return;
    }

    setMessage(`Thanks, ${email}! You'll get exclusive deals soon.`);
    event.target.reset();
  };

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home">
            Wander<span>Luxe</span>
          </a>
          <button
            className="menu-toggle"
            aria-label="Open menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            ☰
          </button>
          <nav className={`site-nav ${menuOpen ? 'open' : ''}`}>
            <a href="#destinations">Destinations</a>
            <a href="#packages">Packages</a>
            <a href="#stories">Stories</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-small" href="#packages">
            Book Now
          </a>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-content">
            <p className="eyebrow">Luxury Travel Experiences</p>
            <h1>Explore the world with style, comfort, and wonder.</h1>
            <p className="lead">
              From tropical islands to hidden mountain villages, we craft unforgettable adventures tailored to your vibe.
            </p>
            <div className="hero-actions">
              <a href="#destinations" className="btn">
                Start Exploring
              </a>
              <a href="#stories" className="btn btn-ghost">
                Watch Stories
              </a>
            </div>
          </div>
        </section>

        <section id="destinations" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Top Picks</p>
                <h2>Dream Destinations</h2>
              </div>
              <div className="filter-buttons">
                {filters.map((item) => (
                  <button
                    key={item}
                    className={`filter-btn ${filter === item ? 'active' : ''}`}
                    onClick={() => setFilter(item)}
                  >
                    {item[0].toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="cards-grid" id="destinationGrid">
              {filteredDestinations.map((destination) => (
                <article className="card" key={destination.name}>
                  <img src={destination.image} alt={destination.alt} />
                  <div className="card-body">
                    <h3>{destination.name}</h3>
                    <p>{destination.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="section packages">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Best Offers</p>
              <h2>Curated Travel Packages</h2>
            </div>

            <div className="package-grid">
              <article className="package-card popular">
                <p className="badge">Most Popular</p>
                <h3>Classic Escape</h3>
                <p className="price">$1,299</p>
                <ul>
                  <li>5 Nights / 6 Days</li>
                  <li>4-Star Hotels</li>
                  <li>Airport Transfers</li>
                  <li>Daily Breakfast</li>
                </ul>
                <button className="btn full">Choose Plan</button>
              </article>

              <article className="package-card">
                <h3>Adventure Pro</h3>
                <p className="price">$1,899</p>
                <ul>
                  <li>7 Nights / 8 Days</li>
                  <li>Adventure Activities</li>
                  <li>Guided Local Tours</li>
                  <li>All Meals Included</li>
                </ul>
                <button className="btn full">Choose Plan</button>
              </article>

              <article className="package-card">
                <h3>Luxury Elite</h3>
                <p className="price">$2,899</p>
                <ul>
                  <li>10 Nights / 11 Days</li>
                  <li>5-Star Resorts</li>
                  <li>Private Chauffeur</li>
                  <li>Personal Travel Concierge</li>
                </ul>
                <button className="btn full">Choose Plan</button>
              </article>
            </div>
          </div>
        </section>

        <section id="stories" className="section stories">
          <div className="container story-wrap">
            <div>
              <p className="eyebrow">Traveler Stories</p>
              <h2>"The most beautifully planned trip we have ever taken."</h2>
              <p>
                "Everything from airport pickup to our cliffside villa was perfect. WanderLuxe made our honeymoon truly magical."
              </p>
              <p className="author">— Sarah &amp; David, New York</p>
            </div>
            <div className="story-stats">
              <div>
                <strong>25K+</strong>
                <span>Happy Travelers</span>
              </div>
              <div>
                <strong>120+</strong>
                <span>Global Destinations</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>Average Rating</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section newsletter">
          <div className="container newsletter-box">
            <h2>Get exclusive travel deals in your inbox</h2>
            <form id="subscribeForm" onSubmit={handleSubscribe}>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
              <button className="btn" type="submit">
                Subscribe
              </button>
            </form>
            <p id="formMessage" aria-live="polite">
              {message}
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>© 2026 WanderLuxe. Crafted for dreamers.</p>
          <div>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </footer>
    </>
  );
}
