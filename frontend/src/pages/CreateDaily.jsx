import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateDaily = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [image, setImage] = useState(null);
  const [isImage, setIsImage] = useState(false);
  // const [imgUrl, setImgUrl] = useState();
  // const [isPublished, setIsPublished] = useState(true);
  const navigate = useNavigate();

  const handleUploadImage = (e) => {
    // e.preventDefault();
    if (e.target.files) {
      const file = e.target.files[0];
      console.log(file);
      setIsImage(true);
      setImage(file);
      // setImgUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(image);
      if (!image) {
        console.error("Image file is missing");
        return navigate("/home");
      }

      const formData = new FormData();
      formData.append("image", image);

      const imgUpload = await axios.post(
        "http://localhost:3001/cloudinary/upload",
        // { image: isImage },
        formData,
        {
          // headers: {
          //   "Content-Type": "multipart/form-data",
          // },
          withCredentials: true,
        }
      );
      console.log(imgUpload);

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

      // setPostData(res.data);
      console.log(res.data);
      navigate("/home");
      // }
    } catch (err) {
      console.error(err);
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
            // onChange={handleUploadImage}
            onChange={handleUploadImage}
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
