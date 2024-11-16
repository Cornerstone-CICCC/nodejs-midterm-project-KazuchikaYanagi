import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-2">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/createDaily">Article</NavLink>
      <NavLink to="/">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </nav>
  );
};

export default Navbar;
