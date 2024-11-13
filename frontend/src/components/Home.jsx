import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  // const getDaily = async () => {
  //   try {
  //     const allDailies = await.
  //   } catch (err) {

  //   }
  // }

  // const handlePostDaily = async () => {
  //   try {
  //     const allDailies = await axios.get("http://localhost:3001/dailies/");
  //     const { title, content, date, image } = await allDailies.data;
  //     console.log(title, content, date, image);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // handlePostDaily();

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between w-[80%] bg-red-200 mb-5">
        <img
          src="../../public/kusatus-onsen.jpeg"
          alt="kusatsu"
          className="radius-md"
        />
        <div className="flex">
          <div>
            <h1 className="font-semibold text-2xl">Local Trip</h1>
            <p>I have a wonderful time with my bestie!!</p>
          </div>
          <div>
            <button>
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
            <button>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
