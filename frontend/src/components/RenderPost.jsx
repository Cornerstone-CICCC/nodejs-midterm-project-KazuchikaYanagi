import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RenderPost = ({ p }) => {
  let { title, date, content, image, id } = p;
  console.log(content);
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
    <div className="flex w-[70%] rounded-md mb-5 mx-[15%] shadow-xl">
      <img
        src={image}
        alt="image"
        className="basis-1/4 radius-md object-contain h-36 rounded-l-md"
      />
      <div className="basis-9/12 flex">
        <div className="text-center my-auto basis-8/12 w-[100%]">
          {title.split(" ").length > 4 ? (
            <h1 className="font-semibold text-3xl mb-3">
              {title.split(" ").splice(0, 4).join(" ") + " ..."}
            </h1>
          ) : (
            <h1 className="font-semibold text-3xl mb-3">{title}</h1>
          )}

          {content.split(" ").length > 4 ? (
            <p className="text-gray-500">
              {content.split(" ").splice(0, 4).join(" ") + " ..."}
            </p>
          ) : (
            <p className="text-gray-500">{content}</p>
          )}
          {/* <p className="text-gray-500">{content}</p> */}
        </div>
        <div className="flex basis-4/12 flex-col p-2">
          <div className="flex flex-1 gap-2 items-center justify-center">
            <button
              onClick={handleDeleteDaily}
              className="w-8 h-8 bg-gray-100 rounded-full"
            >
              <FontAwesomeIcon
                icon={faTrashCan}
                className="text-gray-400 hover:text-black transition-all duration-300"
              />
            </button>
            <button
              onClick={handleEditDaily}
              className="w-8 h-8 bg-gray-100 rounded-full"
            >
              <FontAwesomeIcon
                icon={faPen}
                className="text-gray-400 hover:text-black transition-all duration-300"
              />
            </button>
          </div>

          <span className="text-gray-500 items-center text-sm mx-auto">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RenderPost;
