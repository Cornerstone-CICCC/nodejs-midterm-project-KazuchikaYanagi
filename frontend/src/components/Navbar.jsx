import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around gap-2 font-medium h-12 text-orange-400">
      <NavLink to="/">DayLi</NavLink>
      <div className="flex gap-5">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/createDaily">Post</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Sing up</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
