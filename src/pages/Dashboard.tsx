import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

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
      </section>
    </main>
  );
}

export default Dashboard;