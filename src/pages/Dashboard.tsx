import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import {
  Calendar,
  Users,
  Shuffle,
  Trophy,
  Quote,
} from "lucide-react";

function Dashboard() {
  return (
    <main className="layout">
      <Sidebar />

      <section className="dashboard">
        <section className="hero">
          <div className="hero-copy">
            <p>WELCOME BACK, AMANDA 👋</p>

            <h1>
              Let’s play some
              <br />
              great games today.
            </h1>

            <span>
              Create sessions, add players, generate pairings,
              and track results.
            </span>

            <Link to="/matches">
              Create Session →
            </Link>
          </div>

          <div className="hero-image" />
        </section>

        <section className="dash-cards">
          <div className="dash-card">
            <Calendar size={24} />

            <div>
              <small>UP NEXT</small>
              <h3>24 May, 7:00 PM</h3>
              <p>Pagi Sore Tennis Club</p>
              <p>Outdoor Court 2</p>

              <em>Doubles</em>
            </div>
          </div>

          <div className="dash-card">
            <Users size={24} />

            <div>
              <small>YOU’VE GOT</small>
              <h3>8 Players</h3>
              <p>Ready to compete</p>
              <p>Bring the energy!</p>

              <div className="avatars">
                <i />
                <i />
                <i />
                <i />
                <b>+4</b>
              </div>
            </div>
          </div>

          <div className="dash-card">
            <Shuffle size={24} />

            <div>
              <small>PAIRINGS</small>
              <h3>Automatic</h3>
              <p>Balanced rotations</p>
              <p>Fair for everyone</p>
            </div>
          </div>

          <div className="dash-card">
            <Trophy size={24} />

            <div>
              <small>KEEP IT UP</small>
              <h3>Great Progress!</h3>
              <p>You’re building great memories.</p>

              <em>Win Rate 68%</em>
            </div>
          </div>
        </section>

        <section className="motivation">
          <div>
            <Quote size={16} />
            DAILY MOTIVATION
          </div>

          <p>
            “The only bad game is the one you don’t play.”
          </p>

          <strong>”</strong>
        </section>
      </section>
    </main>
  );
}

export default Dashboard;