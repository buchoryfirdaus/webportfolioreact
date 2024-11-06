import "../styles/About.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";

function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, ex.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
          tenetur dicta eius a odit, repellat quos qui omnis quisquam vitae.
        </p>
        <h4>Programming Language & Tools</h4>
        <div className="skills">
          <FaHtml5 />
          <FaCss3Alt />
          <RiTailwindCssFill />
          <FaBootstrap />
          <SiPhp />
          <RiJavascriptFill />
          <FaReact />
          <FaLaravel />
          <DiCodeigniter />
        </div>
      </div>
    </section>
  );
}

export default About;
