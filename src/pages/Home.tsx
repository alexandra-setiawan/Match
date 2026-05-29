import { Link } from "react-router-dom";
import { Calendar, Users, Shuffle, Trophy } from "lucide-react";

function Home() {
  return (
    <main>
      <section className="home-hero">
        <nav className="navbar">
          <div className="logo">PAGI <span>SORE</span></div>

          <div className="nav-links">
            <a>Features</a>
            <a>How It Works</a>
            <a>About</a>
            <Link className="nav-login" to="/login">Log In</Link>
          </div>
        </nav>

        <div className="hero-section">
          <div className="hero-inner">
            <p className="eyebrow">STRESS LESS, PLAY MORE.</p>
            <h1 className="hero-title">Match<span>.</span></h1>
            <p className="hero-description">
              A smarter way to organise sports sessions, generate fair pairings,
              and track results.
            </p>
            <Link className="cta-button" to="/matches"> Create Session →</Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-intro">
          <p className="section-label">WHY MATCH?</p>
          <h2>Stop organising games through messy group chats.</h2>
          <div className="accent-line"></div>
          <p>
            We help casual sports groups create sessions, manage players,
            generate fair pairings, and track scores — all in one place.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <p className="card-number">01</p>
            <Calendar size={42} />
            <h3>Create Sessions</h3>
            <p>Pick a sport, format, date, time, and location in seconds.</p>
          </div>

          <div className="feature-card">
            <p className="card-number">02</p>
            <Users size={42} />
            <h3>Add Players</h3>
            <p>Add friends or guest players. Everyone’s in one place.</p>
          </div>

          <div className="feature-card">
            <p className="card-number">03</p>
            <Shuffle size={42} />
            <h3>Generate Matches</h3>
            <p>We create fair pairings based on rules and balance.</p>
          </div>

          <div className="feature-card">
            <p className="card-number">04</p>
            <Trophy size={42} />
            <h3>Track Results</h3>
            <p>Record scores and get instant standings and leaderboards.</p>
          </div>
        </div>
      </section>

      <section className="home-cta-wrap">
        <div className="home-cta-card">
          <div>
            <p className="section-label">READY FOR THE NEXT SESSION?</p>
            <h2>Let’s make game day easier.</h2>
            <p>Create your first session and experience smarter sports management.</p>
            <Link className="cta-button" to="/login">Get Started <span>→</span></Link>
          </div>

          <div className="home-stats">
            <div><Users size={36} /><h3>200+</h3><p>Active Players</p></div>
            <div><Calendar size={36} /><h3>150+</h3><p>Sessions Created</p></div>
            <div><Trophy size={36} /><h3>98%</h3><p>Satisfaction</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;