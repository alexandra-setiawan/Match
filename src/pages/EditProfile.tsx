import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff, CircleDot } from "lucide-react";
import { supabase } from "../lib/supabase";

function EditProfile() {
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
            placeholder="amanda@example.com"
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
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            style={styles.togglePassword}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
          </button>
        </div>

        <button style={styles.button} onClick={handleRegister}>
          Create Account
        </button>
      </section>
    </main>
  );
}

const styles: {[key: string]: React.CSSProperties} = {
  screen: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
    position: "relative",
  },
  logo: {
    position: "absolute",
    top: 20,
    fontSize: 24,
    fontWeight: 900,
    color: "#333",
    textDecoration: "none",
  },
  lime: {
    color: "#c7e34f",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px 30px",
    borderRadius: 8,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: 360,
    display: "flex",
    flexDirection: "column",
  },
  icon: {
    marginBottom: 20,
    color: "#c7e34f",
  },
  title: {
    margin: 0,
    marginBottom: 8,
    fontSize: 22,
    fontWeight: 700,
    color: "#172033",
  },
  subtitle: {
    margin: 0,
    marginBottom: 24,
    fontSize: 14,
    color: "#555",
  },
  label: {
    fontSize: 12,
    color: "#555",
    marginBottom: 6,
    marginTop: 12,
  },
  inputWrap: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    flexGrow: 1,
    padding: "10px 12px",
    paddingLeft: 36,
    borderRadius: 4,
    border: "1px solid #ccc",
    fontSize: 14,
  },
  togglePassword: {
    position: "absolute",
    right: 8,
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#555",
  },
  button: {
    marginTop: 12,
    padding: "10px 0",
    backgroundColor: "#c7e34f",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default EditProfile;