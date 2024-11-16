import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RenderPost = ({ p }) => {
  let { title, date, content, id, userId } = p;
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

  return (
    <div className="flex justify-between w-[80%] bg-red-200 mb-5">
      {/* <img
        src="../../public/kusatus-onsen.jpeg"
        alt="kusatsu"
        className="radius-md"
      /> */}
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
