import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex gap-4 justify-center *:text-xl *:font-semibold *:hover:scale-105 *:transition-transform *:duration-500 *:ease-in-out">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navbar;
