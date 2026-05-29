import { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  CircleDot,
  Dumbbell,
  Goal,
  Disc3,
  Users,
  User,
  Grid2X2,
  Calendar,
  Flag,
  ArrowRight,
  ArrowLeft,
  Plus,
  X,
  Shuffle,
} from "lucide-react";



const sports = [
  {
    name: "Tennis",
    icon: <CircleDot size={40} />,
  },
  {
    name: "Badminton",
    icon: <Dumbbell size={40} />,
  },
  {
    name: "Padel",
    icon: <Goal size={40} />,
  },
  {
    name: "Pickleball",
    icon: <Disc3 size={40} />,
  },
];

function GenerateMatches() {
  const [step, setStep] = useState(1);
  const [sport, setSport] = useState("Tennis");
  const [format, setFormat] = useState("Doubles");

  return (
    <main className="layout">
      <Sidebar />

      <section className="matches">
        <header className="match-head">
          <div>
            <h1>CREATE SESSION</h1>
            <p>Build a fair sports session in 3 steps.</p>
          </div>

          <div className="steps">
            <div className={step >= 1 ? "step active" : "step"}>
              <span>{step > 1 ? "✓" : "1"}</span>
              <strong>Sport & Format</strong>
            </div>

            <div className={step >= 2 ? "step active" : "step"}>
              <span>{step > 2 ? "✓" : "2"}</span>
              <strong>Rules</strong>
            </div>

            <div className={step >= 3 ? "step active" : "step"}>
              <span>3</span>
              <strong>Players</strong>
            </div>
          </div>
        </header>

        <div className="match-body">
          <section className="match-card">
            {step === 1 && (
              <>
                <h2>CHOOSE SPORT</h2>

                <div className="sport-grid">
                  {sports.map((item) => (
                    <button
                      key={item.name}
                      className={
                        sport === item.name
                          ? "choice selected"
                          : "choice"
                      }
                      onClick={() => setSport(item.name)}
                    >
                      {item.icon}

                      <strong>{item.name}</strong>

                      {sport === item.name && <b>✓</b>}
                    </button>
                  ))}
                </div>

                <hr />

                <h2>CHOOSE FORMAT</h2>

                <div className="format-grid">
                  <button
                    className={
                      format === "Doubles"
                        ? "choice selected"
                        : "choice"
                    }
                    onClick={() => setFormat("Doubles")}
                  >
                    <Users size={40} />
                    <strong>Doubles</strong>
                    <p>2 vs 2</p>

                    {format === "Doubles" && <b>✓</b>}
                  </button>

                  <button
                    className={
                      format === "Singles"
                        ? "choice selected"
                        : "choice"
                    }
                    onClick={() => setFormat("Singles")}
                  >
                    <User size={40} />
                    <strong>Singles</strong>
                    <p>1 vs 1</p>

                    {format === "Singles" && <b>✓</b>}
                  </button>

                  <button
                    className={
                      format === "Round Robin"
                        ? "choice selected"
                        : "choice"
                    }
                    onClick={() => setFormat("Round Robin")}
                  >
                    <Grid2X2 size={40} />
                    <strong>Round Robin</strong>
                    <p>Everyone vs Everyone</p>

                    {format === "Round Robin" && <b>✓</b>}
                  </button>
                </div>

                <div className="match-bottom">
                  <div className="note">
                    <span>i</span>
                    You can change these settings later.
                  </div>

                  <button onClick={() => setStep(2)}>
                    Continue
                    <ArrowRight size={18} />
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <button
                  className="back-pill"
                  onClick={() => setStep(1)}
                >
                  <ArrowLeft size={15} />
                  Sport & Format
                </button>

                <h2>RULES & SETTINGS</h2>

                <div className="format-grid">
                  <label>
                    Session Name
                    <input defaultValue="Sunday Morning Doubles" />
                  </label>

                  <label>
                    Rotation Style
                    <select>
                      <option>Balanced Rotation</option>
                    </select>
                  </label>

                  <label>
                    Games per Set
                    <select>
                      <option>6 Games</option>
                    </select>
                  </label>

                  <label>
                    Courts
                    <select>
                      <option>2 Courts</option>
                    </select>
                  </label>
                </div>

                <div className="match-bottom">
                  <button
                    className="ghost-btn"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>

                  <button onClick={() => setStep(3)}>
                    Continue
                    <ArrowRight size={18} />
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <button
                  className="back-pill"
                  onClick={() => setStep(2)}
                >
                  <ArrowLeft size={15} />
                  Rules
                </button>

                <h2>ADD PLAYERS</h2>

                <div className="player-row">
                  <input placeholder="Player name" />

                  <button>
                    <Plus size={17} />
                    Add Player
                  </button>
                </div>

                <div className="player-list">
                  <div>
                    <span>Amanda Wijaya</span>
                    <button>
                      <X size={14} />
                    </button>
                  </div>

                  <div>
                    <span>Dedi Kurniawan</span>
                    <button>
                      <X size={14} />
                    </button>
                  </div>
                </div>

                <hr />

                <h2>GENERATED PAIRINGS</h2>

                <div className="pairings">
                  <div className="pairing">
                    <em>Court 1</em>

                    <span>
                      Amanda Wijaya / Dedi
                    </span>

                    <strong>VS</strong>

                    <span>
                      Tasya Amanda / Martina
                    </span>
                  </div>
                </div>

                <div className="match-bottom">
                  <button
                    className="ghost-btn"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </button>

                  <button>
                    Generate Pairings
                    <Shuffle size={18} />
                  </button>
                </div>
              </>
            )}
          </section>

          <aside className="preview">
            <h3>SESSION PREVIEW</h3>

            <div className="preview-item">
              <div>
                <CircleDot size={18} />
              </div>

              <p>
                Sport
                <strong>{sport}</strong>
              </p>
            </div>

            <div className="preview-item">
              <div>
                <Users size={18} />
              </div>

              <p>
                Format
                <strong>{format}</strong>
              </p>
            </div>

            <div className="preview-item">
              <div>
                <Calendar size={18} />
              </div>

              <p>
                Date & Time
                <strong>27 May 2025, 09:00 AM</strong>
              </p>
            </div>

            <div className="preview-item">
              <div>
                <Grid2X2 size={18} />
              </div>

              <p>
                Courts
                <strong>2 Courts</strong>
              </p>
            </div>

            <div className="preview-item">
              <div>
                <Users size={18} />
              </div>

              <p>
                Players
                <strong>2</strong>
              </p>
            </div>

            <div className="preview-item">
              <div>
                <Flag size={18} />
              </div>

              <p>
                Matches
                <strong>1</strong>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default GenerateMatches;