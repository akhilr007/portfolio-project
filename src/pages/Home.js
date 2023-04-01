import { LinkedIn, Email, GitHub } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "../styles/Home.css";
import myResume from "../assets/Akhil-Rajan.pdf";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My name is Akhil</h2>
        <div className="prompt">
          <p>
            A software developer with passion for problem solving and creating
            web apps. I have experience in Node and React.
          </p>
          <IconButton
            aria-label="www.linkedin.com"
            onClick={() =>
              window.open("https://www.linkedin.com/in/rajan-akhil/", "__blank")
            }
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            aria-label="www.github.com"
            onClick={() =>
              window.open("https://github.com/akhilr007", "__blank")
            }
          >
            <GitHub />
          </IconButton>
          <IconButton
            aria-label="www.gmail.com"
            onClick={() =>
              window.open("mailto:rajanakhil07@gmail.com", "__blank")
            }
          >
            <Email />
          </IconButton>
        </div>
        <IconButton aria-label="download-resume" className="prompt">
          <a href={myResume} download="resume.pdf">
            Download my resume
          </a>
        </IconButton>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, MaterialUI, TailwindCSS, Bootstrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB, Sequelize</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>C++, Java, Javascript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
