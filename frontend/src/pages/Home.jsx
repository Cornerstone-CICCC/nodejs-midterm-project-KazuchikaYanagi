import { useEffect, useState } from "react";
import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import RenderPost from "../components/RenderPost";

const Home = () => {
  const [isDaily, setIsDaily] = useState([]);
  const navigate = useNavigate();

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
        console.log(allData.data);
        setIsDaily(allData.data);
        // return allDailies.data;
      } catch (err) {
        console.error(err);
      }
    };
    getDaily();
  }, []);

  useEffect(() => {
    console.log("updated");
    console.log(isDaily);
  }, [isDaily]);

  return (
    <div className="flex flex-col justify-center">
      {isDaily?.map((p) => {
        return <RenderPost p={p} key={p.id} />;
      })}

      <button
        className="text-white bg-blue-400 p-2 w-40 rounded-full"
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
};

export default Home;
