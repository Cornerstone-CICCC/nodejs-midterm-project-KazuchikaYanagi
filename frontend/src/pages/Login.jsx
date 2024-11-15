import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isError, isSetError] = useState("");

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
      // let newRes = setIsAuth(res);

      // const res = await axios({
      //   method: "post",
      //   url: "http://localhost:3001/dailies/add",
      //   data: {
      //     username,
      //     password,
      //   },
      //   withCredentials: true,
      // });

      console.log(res);
      if (res.statusText !== "OK") {
        isSetError(res.message);
      }
      navigate("/createDaily");
    } catch (err) {
      console.error(err);
    }
  };

  const handleNavigateRegisterPage = () => {
    navigate("/register");
  };

  return (
    <div className="w-auto m-3">
      {isError || ""}
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
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          onClick={handleNavigateRegisterPage}
          className="text-blue-400 underline"
        >
          Register New Account
        </button>
      </form>
    </div>
  );
};

export default Login;
