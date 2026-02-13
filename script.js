const { useMemo, useState } = React;

const destinations = [
  {
    id: 1,
    name: 'Santorini, Greece',
    category: 'Beach',
    days: '5-7 days',
    budget: '$1,400+',
    image:
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Kyoto, Japan',
    category: 'Culture',
    days: '4-6 days',
    budget: '$1,200+',
    image:
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Banff, Canada',
    category: 'Nature',
    days: '6-8 days',
    budget: '$1,500+',
    image:
      'https://images.unsplash.com/photo-1614281460426-37ed7306c510?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Dubai, UAE',
    category: 'City',
    days: '4-5 days',
    budget: '$1,700+',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    name: 'Bali, Indonesia',
    category: 'Beach',
    days: '5-8 days',
    budget: '$1,100+',
    image:
      'https://images.unsplash.com/photo-1518544866330-95a4f0f4796c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    name: 'Marrakech, Morocco',
    category: 'Culture',
    days: '4-6 days',
    budget: '$1,000+',
    image:
      'https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=900&q=80',
  },
];

const recommendations = {
  Relaxed: 'Choose coastal stays with spa access and sunset cruises for a slower rhythm.',
  Explorer: 'Balance iconic attractions with hidden local neighborhoods and food trails.',
  Adventure: 'Add one high-energy experience each day: hikes, diving, or guided expeditions.',
};

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [tripStyle, setTripStyle] = useState('Explorer');
  const [travelerName, setTravelerName] = useState('');
  const [budget, setBudget] = useState('1200');

  const filteredDestinations = useMemo(() => {
    if (activeFilter === 'All') return destinations;
    return destinations.filter((spot) => spot.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="app">
      <header className="site-header">
        <div className="container nav-wrap">
          <div className="brand">Globe<span>Trek</span></div>
          <nav className="nav-links">
            <a href="#destinations">Destinations</a>
            <a href="#planner">Trip Planner</a>
            <a href="#stories">Stories</a>
          </nav>
          <button className="btn">Start Planning</button>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-grid">
            <article className="hero-panel">
              <p className="eyebrow">Luxury Meets Discovery</p>
              <h1>Build your perfect journey with a modern tourism app.</h1>
              <p>
                Browse stunning destinations, filter by travel style, and get personalized
                recommendations in seconds.
              </p>
              <div className="hero-actions">
                <button className="btn" onClick={() => setActiveFilter('All')}>Explore All</button>
                <button className="btn ghost" onClick={() => setTripStyle('Adventure')}>I Want Adventure</button>
              </div>
            </article>
            <article
              className="hero-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1500&q=80')",
              }}
            >
              <div className="quick-stats">
                <article>
                  <strong>220+</strong>
                  <span>Routes</span>
                </article>
                <article>
                  <strong>4.9/5</strong>
                  <span>Rating</span>
                </article>
                <article>
                  <strong>35k+</strong>
                  <span>Travelers</span>
                </article>
              </div>
            </article>
          </div>
        </section>

        <section id="destinations" className="section container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Featured Places</p>
              <h2>Trending Destinations</h2>
            </div>
            <div className="filter-group">
              {['All', 'Beach', 'Culture', 'Nature', 'City'].map((item) => (
                <button
                  key={item}
                  className={`filter-btn ${activeFilter === item ? 'active' : ''}`}
                  onClick={() => setActiveFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="destinations-grid">
            {filteredDestinations.map((spot) => (
              <article className="card" key={spot.id}>
                <img src={spot.image} alt={spot.name} />
                <div className="card-content">
                  <h3>{spot.name}</h3>
                  <p className="eyebrow" style={{ marginTop: '0.45rem' }}>{spot.category}</p>
                  <div className="card-meta">
                    <span>{spot.days}</span>
                    <span>{spot.budget}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="planner" className="section container planner">
          <article className="panel">
            <p className="eyebrow">Smart Trip Planner</p>
            <h2>Personalize your next adventure</h2>
            <div className="form-grid" style={{ marginTop: '1rem' }}>
              <label>
                Traveler Name
                <input
                  className="input"
                  value={travelerName}
                  onChange={(e) => setTravelerName(e.target.value)}
                  placeholder="Alex Carter"
                />
              </label>
              <label>
                Style
                <select className="select" value={tripStyle} onChange={(e) => setTripStyle(e.target.value)}>
                  {Object.keys(recommendations).map((style) => (
                    <option key={style} value={style}>
                      {style}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label style={{ display: 'block', marginTop: '0.8rem' }}>
              Budget (USD)
              <input
                className="input"
                type="range"
                min="800"
                max="5000"
                step="100"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </label>

            <p className="reco">
              {travelerName ? `${travelerName}, ` : ''}
              {recommendations[tripStyle]} Suggested budget target: <strong>${budget}</strong>.
            </p>
          </article>

          <article id="stories" className="panel">
            <p className="eyebrow">Traveler Story</p>
            <h3>"GlobeTrek made our anniversary trip unforgettable."</h3>
            <p style={{ color: 'var(--muted)', marginTop: '0.8rem' }}>
              "From the moment we landed in Santorini, every transfer, hotel, and experience
              felt curated just for us. The app made it incredibly easy to compare options and
              book confidently."
            </p>
            <p style={{ marginTop: '1rem', color: 'var(--sunset)', fontWeight: 700 }}>
              — Priya & Ethan, Seattle
            </p>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>© 2026 GlobeTrek Tourism. Travel beautifully.</p>
          <p>Instagram · YouTube · Facebook</p>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
