import { useState } from "react";
import styles from "./signInForm.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function SignInForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useAuth();

  async function handleSubmit(email, password) {
      setError(null);
    try {
      await login(email, password);
      navigate("/")
    } catch (error) {
      setError("Forkert email eller password");
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(email, password);
      }}
      className={styles.signInForm}
    >
      {error && <p>{error}</p>}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className={styles.formInput}
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className={styles.formInput}
        type="password"
        placeholder="Password"
      />
      <button className={styles.submitBtn}>
        Log ind <span>{String.fromCharCode(9658)}</span>
      </button>
    </form>
  );
}
