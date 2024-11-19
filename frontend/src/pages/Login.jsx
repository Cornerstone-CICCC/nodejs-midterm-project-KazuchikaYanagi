import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isError, setIsError] = useState();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        "http://localhost:3001/users/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      );

      console.log(res);
      if (res.statusText !== "OK") {
        console.log(isError);
      }
      navigate("/createDaily");
    } catch (err) {
      console.error(err);
      setIsError(err.response.data.message);
    }
  };

  const handleNavigateRegisterPage = () => {
    navigate("/register");
  };

  return (
    <div className="w-auto m-5">
      <form
        action="http://localhost:3001/users/register"
        method="POST"
        className="flex flex-col"
      >
        <label htmlFor="username" className="mb-10">
          <h2 className="text-xl mb-2">Username</h2>
          <input
            type="text"
            placeholder="username"
            className="border w-full p-1"
            id="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password" className="mb-10">
          <h2 className="text-xl mb-2">Password</h2>
          <input
            type="password"
            placeholder="password"
            className="border w-full p-1 mb-2"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          {isError && (
            <p className="text-red-500 text-lg font-semibold">{isError}</p>
          )}
        </label>

        <div className="flex justify-around">
          <button
            type="submit"
            className="bg-blue-400 text-white p-2 rounded-full w-[20%] hover:bg-blue-500"
            onClick={handleLogin}
          >
            Login
          </button>
          <span className="font-semibold">
            Do you have an account?
            <button
              onClick={handleNavigateRegisterPage}
              className="text-blue-400 underline hover:text-blue-500 pl-3"
            >
              Register New Account
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
