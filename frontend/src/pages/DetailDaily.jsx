import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailDaily = () => {
  const { id } = useParams();
  const [daily, setDaily] = useState(null);

  useEffect(() => {
    const handleDisplay = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/dailies/${id}`, {
          withCredentials: true,
        });
        setDaily(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    handleDisplay();
  }, [id]);

  return (
    <div className="mx-[10%]">
      {daily && (
        <>
          <img src={daily.image} alt="img" className="w-full mx-auto" />
          <h1 className="font-semibold text-4xl">{daily.title}</h1>
          <p>{daily.content}</p>
        </>
      )}
    </div>
  );
};

export default DetailDaily;
