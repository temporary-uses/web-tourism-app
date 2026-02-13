const destinations = [
  {
    name: "Santorini, Greece",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    duration: "5 Days",
    price: "$1,799",
    description: "Blue-domed villages, dramatic sunsets, and cliffside luxury stay experiences.",
    tags: ["Island", "Romantic", "Luxury"],
  },
  {
    name: "Kyoto, Japan",
    image:
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1200&q=80",
    rating: 4.8,
    duration: "7 Days",
    price: "$2,240",
    description: "Ancient temples, cherry blossoms, and cultural heritage blended with modern calm.",
    tags: ["Culture", "History", "Food"],
  },
  {
    name: "Banff, Canada",
    image:
      "https://images.unsplash.com/photo-1601758063541-6e1e2f252f82?auto=format&fit=crop&w=1200&q=80",
    rating: 4.7,
    duration: "6 Days",
    price: "$1,950",
    description: "Turquoise alpine lakes, mountain trails, and scenic train journeys through Rockies.",
    tags: ["Nature", "Adventure", "Family"],
  },
];

function DestinationCard({ destination }) {
  return (
    <article className="card">
      <img className="card-image" src={destination.image} alt={destination.name} />
      <div className="card-content">
        <div className="card-header-row">
          <h3>{destination.name}</h3>
          <span className="price">{destination.price}</span>
        </div>
        <p>{destination.description}</p>
        <div className="meta">
          <span>⭐ {destination.rating}</span>
          <span>🗓 {destination.duration}</span>
        </div>
        <div className="tags">
          {destination.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function App() {
  const [activeTag, setActiveTag] = React.useState("All");
  const allTags = ["All", ...new Set(destinations.flatMap((d) => d.tags))];

  const filtered =
    activeTag === "All"
      ? destinations
      : destinations.filter((destination) => destination.tags.includes(activeTag));

  return (
    <>
      <header className="hero">
        <div className="overlay" />
        <nav>
          <h1>WanderVista</h1>
          <button className="ghost">Plan My Trip</button>
        </nav>
        <div className="hero-content">
          <p className="kicker">CURATED ESCAPES • PREMIUM EXPERIENCES</p>
          <h2>Discover Your Next Beautiful Journey</h2>
          <p>
            Handpicked destinations, seamless planning, and unforgettable memories—crafted for
            modern travelers.
          </p>
          <div className="hero-actions">
            <button className="primary">Explore Packages</button>
            <button className="secondary">Watch Story</button>
          </div>
        </div>
      </header>

      <main>
        <section className="filter-panel">
          <h2>Top Destinations</h2>
          <div className="filters">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={activeTag === tag ? "chip active" : "chip"}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        <section className="card-grid">
          {filtered.map((destination) => (
            <DestinationCard key={destination.name} destination={destination} />
          ))}
        </section>

        <section className="cta">
          <h2>Ready to Start Your Adventure?</h2>
          <p>Join 40,000+ travelers who book their dream tours with WanderVista each year.</p>
          <button className="primary">Get Personalized Itinerary</button>
        </section>
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
