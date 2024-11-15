import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleCreateNewUser = async (e) => {
    try {
      e.preventDefault();
      // if (username && password) {
      const res = await axios.post("http://localhost:3001/users/register", {
        username,
        password,
      });
      console.log(res);
      navigate("/");
      // }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-auto m-3">
      <form
        action="http://localhost:3001/users/register"
        method="POST"
        className="flex flex-col"
      >
        <label htmlFor="username" className="mb-5">
          <h2>Username</h2>
          <input
            type="text"
            placeholder="username"
            className="border w-full"
            id="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password" className="mb-5">
          <h2>Password</h2>
          <input
            type="password"
            placeholder="password"
            className="border w-full"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button
          type="submit"
          className="bg-blue-400 text-white p-2 rounded-full w-[20%]"
          onClick={handleCreateNewUser}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;