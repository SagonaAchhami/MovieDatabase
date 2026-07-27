import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/movieApi";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await register({
        email,
        password,
      });

      alert("Registration Successful");

      navigate("/login");
    } catch (error) {
      alert("Registration Failed");
    }
  }

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-green-800">
          Register
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
          Register
        </button>
      </form>
    </div>
  );
}