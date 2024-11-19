import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <div>
      <img
        src="../../public/kate-trysh-SueCu7_G-oc-unsplash.jpg"
        alt="img"
        className="h-screen w-screen object-cover opacity-30 fixed"
      />
      <div className="absolute w-auto top-1/2 text-center mx-[400px]">
        <h1 className="font-extrabold text-6xl text-orange-400 mb-5 font-mono">
          Welcome to DayLi!
        </h1>
        <h1 className="text-orange-400 text-2xl mb-3 font-mono">
          Store your memories with images
        </h1>

        <button
          type="button"
          className="bg-orange-300 w-32 p-2 text-white rounded-full hover:bg-orange-400"
          onClick={handleNavigate}
        >
          Login
        </button>
      </div>

      <p></p>
    </div>
  );
};

export default Main;
