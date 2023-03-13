import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is S.P Acharya</h2>
        <div className="prompt">
          <p>A Front-end developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/sp-acharya/"><LinkedInIcon /></a>
          <a href="https://github.com/SP-ach"><GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, React Native, Flutter, NPM,
              BootStrap, MaterialUI, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, PHP, ExpressJS, GraphQL,
              MySQL, MongoDB, DynamoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C, C++, TypeScript</span>
          </li>
          <li className="item">
            <h2>Corporate skills</h2>
            <span>Teamwork, TeamBuilding, Communication, Adaptability, Multitasking, Excellent work ethic, Analyzer</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
