import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff, CircleDot } from "lucide-react";
import { supabase } from "../lib/supabase";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleRegister() {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      alert(error.message);
      return;
    }

    const userId = data.user?.id;

    if (userId) {
      await supabase.from("profiles").insert({
        user_id: userId,
        name,
        sport: "Tennis",
        skill_level: null,
      });
    }

    alert("Account created. Please log in.");
    navigate("/login");
  }

  return (
    <main style={styles.screen}>
      <Link to="/" style={styles.logo}>
        PAGI <span style={styles.lime}>SORE</span>
      </Link>

      <section style={styles.card}>
        <div style={styles.icon}>
          <CircleDot size={42} strokeWidth={2.6} />
        </div>

        <h1 style={styles.title}>Create account</h1>
        <p style={styles.subtitle}>Start organising your sports sessions</p>

        <label style={styles.label}>Name</label>
        <div style={styles.inputWrap}>
          <User size={22} />
          <input
            style={styles.input}
            placeholder="Amanda Wijaya"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <label style={styles.label}>Email</label>
        <div style={styles.inputWrap}>
          <Mail size={22} />
          <input
            style={styles.input}
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <label style={styles.label}>Password</label>
        <div style={styles.inputWrap}>
          <Lock size={22} />
          <input
            style={styles.input}
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            style={styles.iconButton}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
          </button>
        </div>

        <button style={styles.primary} onClick={handleRegister}>
          Create account →
        </button>

        <Link to="/login" style={styles.secondaryWithMargin}>
          Log in instead
        </Link>
      </section>

      <Link to="/" style={styles.backHome}>
        Back to home
      </Link>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  screen: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    background:
      "radial-gradient(circle at 50% 18%, rgba(199,227,79,0.1), transparent 24%), linear-gradient(135deg,#f9fbf7 0%,#edf4f8 100%)",
    color: "#172033",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    top: 56,
    left: 64,
    fontSize: 24,
    fontWeight: 900,
    letterSpacing: 9,
    textDecoration: "none",
    color: "#172033",
  },
  lime: { color: "#c7e34f" },
  card: {
    width: 520,
    minHeight: 650,
    background: "rgba(255,255,255,0.94)",
    borderRadius: 32,
    padding: "58px",
    boxShadow: "0 34px 90px rgba(23,32,51,0.15)",
  },
  icon: {
    width: 74,
    height: 74,
    borderRadius: 999,
    background: "rgba(199,227,79,0.18)",
    color: "#c7e34f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 28px",
  },
  title: { textAlign: "center", fontSize: 40, margin: 0 },
  subtitle: {
    textAlign: "center",
    color: "rgba(23,32,51,0.68)",
    fontSize: 17,
    margin: "14px 0 40px",
  },
  label: { display: "block", fontWeight: 900, margin: "22px 0 10px" },
  inputWrap: {
    height: 60,
    border: "1px solid rgba(23,32,51,0.18)",
    borderRadius: 14,
    background: "white",
    display: "flex",
    alignItems: "center",
    gap: 16,
    padding: "0 18px",
    color: "rgba(23,32,51,0.55)",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    height: "100%",
    fontSize: 16,
    background: "transparent",
  },
  iconButton: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    color: "rgba(23,32,51,0.55)",
  },
  primary: {
    width: "100%",
    height: 58,
    borderRadius: 999,
    border: "none",
    background: "#c7e34f",
    color: "#172033",
    fontWeight: 900,
    fontSize: 16,
    marginTop: 30,
    cursor: "pointer",
  },
  secondaryWithMargin: {
    width: "100%",
    height: 58,
    borderRadius: 999,
    border: "1px solid rgba(23,32,51,0.45)",
    color: "#172033",
    fontWeight: 900,
    fontSize: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    marginTop: 18,
  },
  backHome: {
    position: "absolute",
    bottom: 42,
    color: "#c7e34f",
    fontWeight: 900,
  },
};

export default Register;