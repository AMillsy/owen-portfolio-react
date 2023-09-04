import { Link } from "react-router-dom";
import "../styles/Navigation.css";
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="links" to={"models"}>
            Models
          </Link>
        </li>
        <li>
          <Link className="links" to={"workflow"}>
            Workflow
          </Link>
        </li>
        <li>
          <Link className="links" to={"contact"}>
            Contact
          </Link>
        </li>
        <li>
          <Link className="links" to={"about-me"}>
            About me{" "}
          </Link>
        </li>
      </ul>
      <h1>Owen Tonks</h1>
    </nav>
  );
};

export default Navigation;
