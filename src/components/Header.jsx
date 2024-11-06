import profilPicture from "../assets/aing.png";
import "../styles/Header.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <div className="header-jumbotron">
      <div
        style={{
          backgroundColor: "#222831",
          padding: "2px",
          borderRadius: "50%",
          display: "inline-block",
        }}
      >
        <img
          src={profilPicture}
          alt="Profile Picture"
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
      <h3>Buchory Agung Firdaus</h3>
      <p>Website Developer</p>
      <div className="socialMedia">
        <a href="https://instagram.com/buchoryfirdaus" target="_blank">
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/buchory-agung-firdaus-1424881b1/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/buchoryfirdaus" target="_blank">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Header;
