import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/movieApi";

export default function Login({ onLogin }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await login({
        email,
        password,
      });

      onLogin(response.data.data);

      alert("Login Successful");

      navigate("/");
    } catch (error) {
      alert("Invalid email or password");
    }
  }

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-green-800">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className="w-full bg-green-700 text-white py-3 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}