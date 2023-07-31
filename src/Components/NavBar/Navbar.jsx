import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div>
        <h1>CellXpress</h1>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink></NavLink>
      </div>
    </nav>
  );
}
