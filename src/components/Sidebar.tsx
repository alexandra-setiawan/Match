import { Link, useLocation } from "react-router-dom";
import { Home, Shuffle, User, Plus } from "lucide-react";

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="sidebar">
      <div className="logo">
        Match<span>.</span>
      </div>

      <nav className="nav">
        <Link className={pathname === "/dashboard" ? "active" : ""} to="/dashboard">
          <Home size={17} />
          Home
        </Link>

        <Link className={pathname === "/matches" ? "active" : ""} to="/matches">
          <Shuffle size={17} />
          Matches
        </Link>

        <Link className={pathname === "/profile" ? "active" : ""} to="/profile">
          <User size={17} />
          Profile
        </Link>
      </nav>

      <Link className="create-btn" to="/matches">
        <Plus size={16} />
        Create Session
      </Link>
    </aside>
  );
}

export default Sidebar;