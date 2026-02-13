import './styles.css';

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="container nav-wrap">
      <a class="brand" href="#home">Wander<span>Luxe</span></a>
      <button class="menu-toggle" aria-label="Open menu">☰</button>
      <nav class="site-nav">
        <a href="#destinations">Destinations</a>
        <a href="#packages">Packages</a>
        <a href="#stories">Stories</a>
        <a href="#contact">Contact</a>
      </nav>
      <a class="btn btn-small" href="#packages">Book Now</a>
    </div>
  </header>

  <main id="home">
    <section class="hero">
      <div class="container hero-content">
        <p class="eyebrow">Luxury Travel Experiences</p>
        <h1>Explore the world with style, comfort, and wonder.</h1>
        <p class="lead">From tropical islands to hidden mountain villages, we craft unforgettable adventures tailored to your vibe.</p>
        <div class="hero-actions">
          <a href="#destinations" class="btn">Start Exploring</a>
          <a href="#stories" class="btn btn-ghost">Watch Stories</a>
        </div>
      </div>
    </section>

    <section id="destinations" class="section">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Top Picks</p>
          <h2>Dream Destinations</h2>
          <div class="filter-buttons">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="beach">Beach</button>
            <button class="filter-btn" data-filter="mountain">Mountain</button>
            <button class="filter-btn" data-filter="city">City</button>
          </div>
        </div>

        <div class="cards-grid" id="destinationGrid">
          <article class="card" data-category="beach">
            <img src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=900&q=80" alt="Maldives beach villas" />
            <div class="card-body">
              <h3>Maldives</h3>
              <p>Crystal lagoons, overwater villas, sunset cruises.</p>
            </div>
          </article>

          <article class="card" data-category="mountain">
            <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80" alt="Swiss Alps mountain adventure" />
            <div class="card-body">
              <h3>Swiss Alps</h3>
              <p>Scenic train rides, alpine lodges, glacier walks.</p>
            </div>
          </article>

          <article class="card" data-category="city">
            <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80" alt="Tokyo city lights" />
            <div class="card-body">
              <h3>Tokyo</h3>
              <p>Neon nightlife, ancient shrines, world-class food.</p>
            </div>
          </article>

          <article class="card" data-category="beach">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80" alt="Bali tropical coast" />
            <div class="card-body">
              <h3>Bali</h3>
              <p>Volcanic beaches, jungle retreats, temple sunsets.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="packages" class="section packages">
      <div class="container">
        <div class="section-head">
          <p class="eyebrow">Best Offers</p>
          <h2>Curated Travel Packages</h2>
        </div>

        <div class="package-grid">
          <article class="package-card popular">
            <p class="badge">Most Popular</p>
            <h3>Classic Escape</h3>
            <p class="price">$1,299</p>
            <ul>
              <li>5 Nights / 6 Days</li>
              <li>4-Star Hotels</li>
              <li>Airport Transfers</li>
              <li>Daily Breakfast</li>
            </ul>
            <button class="btn full">Choose Plan</button>
          </article>

          <article class="package-card">
            <h3>Adventure Pro</h3>
            <p class="price">$1,899</p>
            <ul>
              <li>7 Nights / 8 Days</li>
              <li>Adventure Activities</li>
              <li>Guided Local Tours</li>
              <li>All Meals Included</li>
            </ul>
            <button class="btn full">Choose Plan</button>
          </article>

          <article class="package-card">
            <h3>Luxury Elite</h3>
            <p class="price">$2,899</p>
            <ul>
              <li>10 Nights / 11 Days</li>
              <li>5-Star Resorts</li>
              <li>Private Chauffeur</li>
              <li>Personal Travel Concierge</li>
            </ul>
            <button class="btn full">Choose Plan</button>
          </article>
        </div>
      </div>
    </section>

    <section id="stories" class="section stories">
      <div class="container story-wrap">
        <div>
          <p class="eyebrow">Traveler Stories</p>
          <h2>"The most beautifully planned trip we have ever taken."</h2>
          <p>"Everything from airport pickup to our cliffside villa was perfect. WanderLuxe made our honeymoon truly magical."</p>
          <p class="author">— Sarah & David, New York</p>
        </div>
        <div class="story-stats">
          <div><strong>25K+</strong><span>Happy Travelers</span></div>
          <div><strong>120+</strong><span>Global Destinations</span></div>
          <div><strong>4.9/5</strong><span>Average Rating</span></div>
        </div>
      </div>
    </section>

    <section id="contact" class="section newsletter">
      <div class="container newsletter-box">
        <h2>Get exclusive travel deals in your inbox</h2>
        <form id="subscribeForm">
          <input type="email" id="emailInput" placeholder="Enter your email" required />
          <button class="btn" type="submit">Subscribe</button>
        </form>
        <p id="formMessage" aria-live="polite"></p>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-wrap">
      <p>© 2026 WanderLuxe. Crafted for dreamers.</p>
      <div>
        <a href="#">Instagram</a>
        <a href="#">YouTube</a>
        <a href="#">Facebook</a>
      </div>
    </div>
  </footer>
`;

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('#destinationGrid .card');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    cards.forEach((card) => {
      card.style.display = filter === 'all' || card.dataset.category === filter ? 'block' : 'none';
    });
  });
});

const subscribeForm = document.getElementById('subscribeForm');
const emailInput = document.getElementById('emailInput');
const formMessage = document.getElementById('formMessage');

if (subscribeForm && emailInput && formMessage) {
  subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = `Thanks, ${emailInput.value}! You'll get exclusive deals soon.`;
    subscribeForm.reset();
  });
}
