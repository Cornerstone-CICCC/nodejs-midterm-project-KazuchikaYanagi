import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateDaily = () => {
  // const [formData, setFormData] = useState({
  //   title: "",
  //   text: "",
  //   image: "",
  // });
  const [isTitle, setIsTitle] = useState();
  const [isText, setIsText] = useState();
  const [isImage, setIsImage] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("http://localhost:3001/dailies", {
        title: isTitle,
        content: isText,
        image: isImage,
      });
      console.log(res);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-auto m-3">
      <form action="" className="flex flex-col">
        <label htmlFor="" className="mb-5">
          <h2>Title</h2>
          <input
            type="text"
            placeholder="Daily title"
            className="border w-full"
            onChange={(e) => setIsTitle(e.target.value)}
          />
        </label>
        <label htmlFor="" className="mb-5">
          <h2>Contents</h2>
          <textarea
            name=""
            id=""
            placeholder="What did you do today?"
            rows={7}
            maxLength={1000}
            className="border w-full"
            onChange={(e) => setIsText(e.target.value)}
          ></textarea>
        </label>
        <label htmlFor="" className="flex flex-col mb-5">
          <h2>Insert Image</h2>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setIsImage(e.target.value)}
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
