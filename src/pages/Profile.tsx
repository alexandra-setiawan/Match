import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

// -- Data -- //
const heroStats = [
  { label: "Sessions Played", value: "42" },
  { label: "Win Rate", value: "68%" },
  { label: "Matches", value: "156" },
];

const statGrid = [
  { label: "Win Rate", value: "68%" },
  { label: "Games Won", value: "156" },
  { label: "Games Lost", value: "73" },
  { label: "Avg. Score", value: "6.2", unit: "per game" },
];

// -- Sub-components -- //
function SectionHead({ title, action } : {title: string, action: string}) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <button>{action}</button>
    </div>
  );
}

// -- Page -- //
function Profile() {
  return (
    <main className="layout">
      <Sidebar />

      <section className="profile">
        <h1>My Profile</h1>

        <section className="profile-hero">
          <div className="avatar" />

          <div className="profile-info">
            <div className="name-row">
              <h2>Amanda Wijaya</h2>
              <Link to="/edit-profile">
                <button>Edit Profile</button>
              </Link>
            </div>

            <span>Intermediate Player</span>
            <p>📍 Jakarta, Indonesia</p>
            <p>💛 Tennis • Badminton</p>
            <p>⏱ Member since Mar 2024</p>
          </div>

          <div className="profile-stats">
            {heroStats.map(({label, value}) => (
              <div key={label}>
                <strong>{value}</strong>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </section>

        <SectionHead title="Statistics Overview" action="View details" />
        <section className="stat-grid">
          {statGrid.map(({label, value, unit}) => (
            <div key={label}>
              <p>{label}</p>
              <strong>
                {value} {unit && <small>{unit}</small>}
              </strong>
              <span />
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}

export default Profile;