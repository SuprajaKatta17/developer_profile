import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="profile_photo.png" alt="Supraja Katta" />;
}

function Intro() {
  return (
    <div>
      <h1>Supraja Katta</h1>
      <p>
        Passionate about leveraging technical skills to solve real-world
        problems. Eager to contribute to innovative projects and grow in a
        collaborative, fast-paced environment. When not coding I would like to
        cook (and eat), and roam around the roads exploring new things.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="C#" emoji="💪" color="orangered" />
      <Skill skill="Asp.Net" emoji="💪" color="purple" />
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
