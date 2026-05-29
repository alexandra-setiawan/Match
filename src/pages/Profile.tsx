import Sidebar from "../components/Sidebar";

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
              <button>Edit Profile</button>
            </div>

            <span>Intermediate Player</span>
            <p>📍 Jakarta, Indonesia</p>
            <p>💛 Tennis • Badminton</p>
            <p>⏱ Member since Mar 2024</p>
          </div>

          <div className="profile-stats">
            <div><strong>42</strong><p>Sessions Played</p></div>
            <div><strong>68%</strong><p>Win Rate</p></div>
            <div><strong>156</strong><p>Matches</p></div>
          </div>
        </section>

        <div className="section-head">
          <h2>Upcoming Session</h2>
          <a>View all</a>
        </div>

        <section className="upcoming">
          <div className="date-box">
            <small>SAT</small>
            <strong>24</strong>
            <small>MAY</small>
            <p>7:00 PM – 9:00 PM</p>
            <p>Pagi Sore Tennis Club</p>
            <em>Doubles</em>
          </div>

          <div className="versus">
            <div>
              <small>TEAM A</small>
              <p>Amanda Wijaya</p>
              <p>Dedi Kurniawan</p>
            </div>

            <strong>VS</strong>

            <div>
              <small>TEAM B</small>
              <p>Tasya Amanda</p>
              <p>Martina Setiawan</p>
            </div>
          </div>
        </section>

        <div className="section-head">
          <h2>Statistics Overview</h2>
          <a>View details</a>
        </div>

        <section className="stat-grid">
          <div><p>Win Rate</p><strong>68%</strong><span /></div>
          <div><p>Games Won</p><strong>156</strong><span /></div>
          <div><p>Games Lost</p><strong>73</strong><span /></div>
          <div><p>Avg. Score</p><strong>6.2 <small>per game</small></strong></div>
        </section>
      </section>
    </main>
  );
}

export default Profile;