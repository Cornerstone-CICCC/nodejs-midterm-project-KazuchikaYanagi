import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateDaily = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [image, setImage] = useState(null);
  const [isImage, setIsImage] = useState(false);

  const navigate = useNavigate();

  const handleUploadImage = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setIsImage(true);
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!image) {
        console.error("Image file is missing");
        return navigate("/home");
      }

      const formData = new FormData();
      formData.append("image", image);

      const imgUpload = await axios.post(
        "http://localhost:3001/cloudinary/upload",
        formData,
        {
          withCredentials: true,
        }
      );

      const res = await axios.post(
        "http://localhost:3001/dailies/add",
        {
          title: title,
          content: content,
          image: imgUpload.data.result.url || "",
          isImage,
        },
        { withCredentials: true }
      );

      navigate("/home");
    } catch (err) {
      console.error(err);
      navigate("/login");
    }
  };

  return (
    <div className="w-auto m-5">
      <form
        action="http://localhost:3001/dailes"
        method="POST"
        className="flex flex-col"
      >
        <label htmlFor="title" className="mb-5">
          <h2 className="text-xl mb-2">Title</h2>
          <input
            type="text"
            placeholder="Daily title"
            className="border w-full p-1"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label htmlFor="content" className="mb-5">
          <h2 className="text-xl mb-2">Contents</h2>
          <textarea
            name="content"
            id="content"
            placeholder="What did you do today?"
            rows={7}
            maxLength={1000}
            className="border w-full p-1"
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </label>
        <label htmlFor="file" className="flex flex-col mb-5">
          <h2>Insert Image</h2>
          <input
            type="file"
            accept="image/jpeg, image/png"
            onChange={handleUploadImage}
          />
        </label>

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
