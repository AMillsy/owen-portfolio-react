import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"models"}>Models</Link>
        </li>
        <li>
          <Link to={"workflow"}>Workflow</Link>
        </li>
        <li>
          <Link to={"contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"about-me"}>About me </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
