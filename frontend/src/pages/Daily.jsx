import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Daily = () => {
  const [editTitle, setEditTitle] = useState();
  const [editContext, setEditContext] = useState();
  const [editImage, setEditImage] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let getDailyById = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/dailies/${id}`, {
          withCredentials: true,
        });
        // console.log(res.data);
        const { title, content, image } = await res.data;
        console.log(title, content, image);
        setEditTitle(title);
        setEditContext(content);
        setEditImage(image);
      } catch (err) {
        console.error(err);
      }
    };
    getDailyById();
  }, []);

  const handleUpdate = async () => {
    const data = {
      title: editTitle,
      content: editContext,
      image: editImage || "",
    };
    await axios.put(`http://localhost:3001/dailies/update/${id}`, data, {
      withCredentials: true,
    });
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
        <label htmlFor="file" className="flex flex-col mb-5">
          <h2>Insert Image</h2>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setEditImage(e.target.value)}
            value={editImage}
          />
        </label>
        {/* <button
          className={`w-32 p-2 rounded-full mb-5 ${
            isPublished ? "bg-blue-300" : "bg-red-300"
          }`}
          onClick={(e) => {
            e.preventDefault();
            setIsPublished(!isPublished);
          }}
        >
          {isPublished ? "Published ON" : "Published OFF"}
        </button> */}
        {/* <input type="checkbox" name="published" id="published" checked /> */}
        <button
          type="submit"
          className="bg-blue-400 text-white p-2 rounded-full w-[20%]"
          onClick={handleUpdate}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Daily;
