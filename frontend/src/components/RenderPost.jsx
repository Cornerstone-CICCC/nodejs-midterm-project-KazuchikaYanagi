import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const RenderPost = ({ p }) => {
  let { title, date, content, id, userId } = p;

  const handleEditDaily = () => {};

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
        <div>
          <button onClick={handleDeleteDaily}>
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <button onClick={handleEditDaily}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenderPost;
