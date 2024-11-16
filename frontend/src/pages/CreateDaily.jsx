import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateDaily = ({ setPostData }) => {
  const [isTitle, setIsTitle] = useState();
  const [isText, setIsText] = useState();
  const [isImage, setIsImage] = useState();
  // const [isPublished, setIsPublished] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        "http://localhost:3001/dailies/add",
        {
          title: isTitle,
          content: isText,
          image: isImage,
          // published: isPublished,
        },
        { withCredentials: true }
      );

      setPostData(res.data);
      console.log(res.data);
      navigate("/home");
      // }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUploadImage = async () => {
    // e.preventDefault();
    await axios.post(
      "http://localhost:3001/cloudinary/upload",
      {
        withCredentials: true,
      },
      setIsImage(e.target.files[0])
    );
  };

  return (
    <div className="w-auto m-3">
      <form
        action="http://localhost:3001/dailes"
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
            onChange={(e) => setIsTitle(e.target.value)}
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
            onChange={(e) => setIsText(e.target.value)}
            required
          ></textarea>
        </label>
        <label htmlFor="file" className="flex flex-col mb-5">
          <h2>Insert Image</h2>
          <input type="file" accept="image/*" onChange={handleUploadImage} />
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
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateDaily;
