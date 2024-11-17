import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const RenderPost = ({ p }) => {
  let { title, date, content, id, userId } = p;
  const [fetchImage, setFetchImage] = useState();
  const navigate = useNavigate();

  const handleEditDaily = () => {
    navigate(`/daily/edit/${id}`);
  };

  const handleDeleteDaily = async () => {
    await axios.delete(`http://localhost:3001/dailies/delete/${id}`, {
      withCredentials: true,
    });
    console.log(id);
    window.location.href = "/home";
  };

  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get("http://localhost:3001/cloudinary/retrieve", {
        withCredentials: true,
      });
      const x = res.data.resources.resources[1].secure_url;
      // const emptyArr = [];
      // const { resources } = res.data.resources;
      // for (let i = resources.length; i >= 0; i--) {
      //   emptyArr.push(resoruces[i].secure_url);
      // }
      // console.log(res.data.resources.resources);
      console.log(res.data.resources);
      console.log(x);
      setFetchImage(x);
    };
    fetchImage();
  }, []);

  return (
    <div className="flex justify-between w-[80%] bg-red-200 mb-5">
      <img src={fetchImage} alt="kusatsu" className="radius-md" />
      <div className="flex">
        <div>
          <h1 className="font-semibold text-2xl">{title}</h1>
          <p>{content}</p>
        </div>
        <span>{date}</span>
        <div className="flex gap-2">
          <button
            onClick={handleDeleteDaily}
            className="w-8 h-8 bg-gray-100 rounded-full"
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <button
            onClick={handleEditDaily}
            className="w-8 h-8 bg-gray-100 rounded-full"
          >
            <FontAwesomeIcon icon={faPen} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenderPost;
