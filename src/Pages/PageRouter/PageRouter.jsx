import "../PageRouter/PageRouter.css";
import { Link } from "react-router-dom";
const PageRouter = () => {
  return (
    <div className="router_container">
      <ul>
        <li>
          <Link to={`/bubbles`}>Bubbles</Link>
        </li>
        <li>
          <Link to={"/Todo"}>Todo List</Link>
        </li>
        <li>
          <Link to={"/Music"}>Spotify Clone</Link>
        </li>
        <li>
          <Link to={"/Dragonball"}>Dragonball</Link>
        </li>
      </ul>
    </div>
  );
};

export default PageRouter;
