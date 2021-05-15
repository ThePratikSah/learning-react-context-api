import { useContext } from "react";
import UserStore from "./Store/Store";

const NavBar = () => {
  const { name } = useContext(UserStore);

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Privacy</li>
      </ul>
      <span>{name}</span>
    </nav>
  );
};

export default NavBar;
