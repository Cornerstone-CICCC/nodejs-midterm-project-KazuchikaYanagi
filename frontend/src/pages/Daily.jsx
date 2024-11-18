import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Daily = () => {
  const [editTitle, setEditTitle] = useState();
  const [editContext, setEditContext] = useState();
  // const [editImage, setEditImage] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let getDailyById = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/dailies/${id}`, {
          withCredentials: true,
        });
        // console.log(res.data);
        const { title, content } = await res.data;
        console.log(title, content);
        setEditTitle(title);
        setEditContext(content);
        // setEditImage(image);
      } catch (err) {
        console.error(err);
      }
    };
    getDailyById();
  }, []);

  const handleUpdate = async () => {
    try {
      const data = {
        title: editTitle,
        content: editContext,
        // image: editImage || "",
      };
      // await axios.put(
      //   "http://localhost:3001/cloudinary/update",
      //   { image: editImage },
      //   { withCredentials: true }
      // );
      await axios.put(`http://localhost:3001/dailies/update/${id}`, data, {
        withCredentials: true,
      });
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  const handlePreviousPage = () => {
    navigate("/home");
  };

  return (
    <div className="w-auto m-3">
      <form
        action={`http://localhost:3001/dailes/update/${id}`}
        method="POST"
        className="flex flex-col"
      >
        <label htmlFor="title" className="mb-5">
          <h2>Title</h2>
          <input
            type="text"
            placeholder="Daily title"
            className="border w-full"
            id="title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            required
          />
        </label>
        <label htmlFor="content" className="mb-5">
          <h2>Contents</h2>
          <textarea
            name="content"
            id="content"
            placeholder="What did you do today?"
            rows={7}
            maxLength={1000}
            className="border w-full"
            onChange={(e) => setEditContext(e.target.value)}
            value={editContext}
            required
          ></textarea>
        </label>

        <div className="flex justify-evenly">
          <button
            type="button"
            className="bg-red-400 text-white p-2 rounded-full w-[20%]"
            onClick={handlePreviousPage}
          >
            Cancel
          </button>
          <button
            type="button"
            className="bg-blue-400 text-white p-2 rounded-full w-[20%]"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Daily;
