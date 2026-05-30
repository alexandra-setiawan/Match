import { Link } from "react-router-dom";
import { Calendar, Users, Shuffle, Trophy } from "lucide-react";
import React from "react";

function Home() {
  return (
    <main>
      <section style={styles.homeHero}>
        <div style={styles.heroOverlay} />

        <nav style={styles.navbar}>
          <div style={styles.logo}>
            Match<span style={styles.logoSpan}>.</span>
          </div>
          <div style={styles.navLinks}>
            <a style={styles.navLink}>Features</a>
            <a style={styles.navLink}>How It Works</a>
            <a style={styles.navLink}>About</a>
            <Link style={styles.navLogin} to="/login">Log In</Link>
          </div>
        </nav>

        <div style={styles.heroSection}>
          <div style={styles.heroInner}>
            <p style={styles.eyebrow}>STRESS LESS, PLAY MORE.</p>
            <h1 style={styles.heroTitle}>
              Match<span style={styles.heroTitleSpan}>.</span>
            </h1>
            <p style={styles.heroDescription}>
              A smarter way to organise sports sessions, generate fair pairings,
              and track results.
            </p>
            <Link style={styles.ctaButton} to="/matches">Create Session →</Link>
          </div>
        </div>
      </section>

      <section style={styles.featuresSection}>
        <div style={styles.featuresIntro}>
          <p style={styles.sectionLabel}>WHY MATCH?</p>
          <h2 style={styles.featuresHeading}>
            Stop organising games through messy group chats.
          </h2>
          <div style={styles.accentLine} />
          <p style={styles.featuresBody}>
            We help casual sports groups create sessions, manage players,
            generate fair pairings, and track scores — all in one place.
          </p>
        </div>

        <div style={styles.featureGrid}>
          {[
            { num: "01", Icon: Calendar, title: "Create Sessions", body: "Pick a sport, format, date, time, and location in seconds." },
            { num: "02", Icon: Users,    title: "Add Players",      body: "Add friends or guest players. Everyone's in one place." },
            { num: "03", Icon: Shuffle,  title: "Generate Matches", body: "We create fair pairings based on rules and balance." },
            { num: "04", Icon: Trophy,   title: "Track Results",    body: "Record scores and get instant standings and leaderboards." },
          ].map(({ num, Icon, title, body }) => (
            <div key={num} style={styles.featureCard}>
              <p style={styles.cardNumber}>{num}</p>
              <Icon size={28} style={styles.cardIcon} />
              <h3 style={styles.cardHeading}>{title}</h3>
              <p style={styles.cardBody}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.homeCTAWrap}>
        <div style={styles.homeCTACard}>
          <div>
            <p style={styles.ctaSectionLabel}>READY FOR THE NEXT SESSION?</p>
            <h2 style={styles.ctaHeading}>Let's make game day easier.</h2>
            <p style={styles.ctaBody}>
              Create your first session and experience smarter sports management.
            </p>
            <Link style={styles.ctaButton} to="/login">Get Started →</Link>
          </div>

          <div style={styles.homeStats}>
            <div style={styles.statItem}>
              <Users size={28} style={styles.statIcon} />
              <h3 style={styles.statNumber}>200+</h3>
              <p style={styles.statLabel}>Active Players</p>
            </div>
            <div style={styles.statItemMid}>
              <Calendar size={28} style={styles.statIcon} />
              <h3 style={styles.statNumber}>150+</h3>
              <p style={styles.statLabel}>Sessions Created</p>
            </div>
            <div style={styles.statItemLast}>
              <Trophy size={28} style={styles.statIcon} />
              <h3 style={styles.statNumber}>98%</h3>
              <p style={styles.statLabel}>Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

const styles: Record<string, React.CSSProperties> = {

  // ─── HERO ───
  homeHero: {
    position: "relative",
    minHeight: "55vh",
    display: "flex",
    flexDirection: "column",
    backgroundImage: "url('/hero-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#131929",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to right, rgba(13,18,30,0.88) 0%, rgba(13,18,30,0.55) 55%, rgba(13,18,30,0.10) 100%)",
    zIndex: 1,
  },

  // ─── NAVBAR ───
  navbar: {
    position: "relative",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.5rem 2.5rem",
  },
  logo: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#fff",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
  },
  logoSpan: {
    color: "#c8f135",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "2.25rem",
  },
  navLink: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "0.78rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.75)",
    textDecoration: "none",
    cursor: "pointer",
  },
  navLogin: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "0.78rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#fff",
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.45)",
    padding: "0.4rem 1.2rem",
    borderRadius: "3px",
  },

  // ─── HERO CONTENT ───
  heroSection: {
    position: "relative",
    zIndex: 5,
    flex: 1,
    display: "flex",
    alignItems: "center",
    padding: "3rem 2.5rem 5rem",
  },
  heroInner: {
    maxWidth: "520px",
  },
  eyebrow: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.18em",
    color: "#c8f135",
    marginBottom: "1rem",
  },
  heroTitle: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "clamp(4rem, 8vw, 6.5rem)",  // ⚠️ clamp() won't work here — use a fixed value instead, e.g. "6rem"
    fontWeight: 800,
    lineHeight: 1,
    color: "#fff",
    letterSpacing: "-0.01em",
    marginBottom: "1.5rem",
  },
  heroTitleSpan: {
    color: "#c8f135",
  },
  heroDescription: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.65,
    color: "rgba(255,255,255,0.7)",
    maxWidth: "400px",
    marginBottom: "2.25rem",
  },
  ctaButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.6rem",
    fontFamily: "'Barlow', sans-serif",
    fontSize: "0.72rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#0e1422",
    background: "#c8f135",
    padding: "0.8rem 1.75rem",
    borderRadius: "3px",
    textDecoration: "none",
  },

  // ─── FEATURES ───
  featuresSection: {
    background: "#f0eeea",
    padding: "5rem 2.5rem",
    display: "grid",
    gridTemplateColumns: "280px 1fr",
    gap: "3rem",
    alignItems: "start",
  },
  featuresIntro: {
    paddingTop: "0.5rem",
  },
  sectionLabel: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "0.68rem",
    fontWeight: 700,
    letterSpacing: "0.15em",
    color: "#8aaa0e",
    marginBottom: "0.85rem",
  },
  featuresHeading: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "2.2rem",
    fontWeight: 800,
    lineHeight: 1.15,
    color: "#0e1422",
    marginBottom: "1.25rem",
  },
  accentLine: {
    width: "36px",
    height: "3px",
    background: "#c8f135",
    marginBottom: "1.1rem",
    borderRadius: "2px",
  },
  featuresBody: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "0.9rem",
    fontWeight: 400,
    lineHeight: 1.7,
    color: "#6b6b6b",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "1rem",
  },
  featureCard: {
    background: "#fff",
    border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: "8px",
    padding: "1.75rem 1.5rem",
    display: "flex",
    flexDirection: "column",
  },
  cardNumber: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "0.68rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    color: "#c8f135",
    marginBottom: "1.1rem",
  },
  cardIcon: {
    marginBottom: "1.1rem",
    color: "#0e1422",
  },
  cardHeading: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "0.8rem",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: "#0e1422",
    marginBottom: "0.6rem",
  },
  cardBody: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "0.82rem",
    fontWeight: 400,
    lineHeight: 1.6,
    color: "#6b6b6b",
  },

  // ─── CTA STRIP ───
  homeCTAWrap: {
    background: "#f0eeea",
    padding: "0 2.5rem 5rem",
  },
  homeCTACard: {
    background: "#131929",
    borderRadius: "10px",
    padding: "3.5rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4rem",
    alignItems: "center",
  },
  ctaSectionLabel: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "0.68rem",
    fontWeight: 700,
    letterSpacing: "0.15em",
    color: "#c8f135",
    marginBottom: "0.75rem",
  },
  ctaHeading: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "2.25rem",
    fontWeight: 800,
    lineHeight: 1.1,
    color: "#fff",
    marginBottom: "0.85rem",
  },
  ctaBody: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "0.875rem",
    fontWeight: 400,
    color: "rgba(255,255,255,0.55)",
    lineHeight: 1.65,
    marginBottom: "2rem",
  },
  homeStats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
    padding: "0 2rem 0 0",
    borderRight: "1px solid rgba(255,255,255,0.1)",
  },
  statItemMid: {
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
    padding: "0 2rem",
    borderRight: "1px solid rgba(255,255,255,0.1)",
  },
  statItemLast: {
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
    padding: "0 0 0 2rem",
  },
  statIcon: {
    color: "#c8f135",
    marginBottom: "0.5rem",
  },
  statNumber: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "2.25rem",
    fontWeight: 800,
    color: "#fff",
    lineHeight: 1,
  },
  statLabel: {
    fontFamily: "'Barlow', sans-serif",
    fontSize: "0.75rem",
    fontWeight: 400,
    color: "rgba(255,255,255,0.45)",
    letterSpacing: "0.04em",
  },
};

//export default Home;