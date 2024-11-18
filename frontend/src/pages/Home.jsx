import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RenderPost from "../components/RenderPost";

const Home = () => {
  const [isDaily, setIsDaily] = useState([]);
  // const [auth, setAuth] = useState(document.cookie);
  const navigate = useNavigate();

  // const allCookie = document.cookie;
  // console.log(allCookie);

  // console.log(auth);

  const handleLogout = async () => {
    const res = await axios.get("http://localhost:3001/users/logout");
    console.log(res);
    navigate("/");
  };

  useEffect(() => {
    let getDaily = async () => {
      try {
        const allData = await axios.get("http://localhost:3001/dailies/", {
          withCredentials: true,
        });
        setIsDaily(allData.data);
      } catch (err) {
        console.error(err);
      }
    };
    getDaily();
  }, []);

  return (
    <>
      <div className="flex flex-col-reverse justify-center">
        {isDaily?.map((p) => {
          return <RenderPost p={p} key={p.id} className="w-full" />;
        })}
      </div>
      <button
        className="text-white bg-blue-400 p-2 w-40 rounded-full mx-[15%] mt-10 hover:bg-blue-500"
        onClick={handleLogout}
      >
        Log out
      </button>
    </>
  );
};

export default Home;
