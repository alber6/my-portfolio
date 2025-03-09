import "./Home.css";
import { cleanPage } from "../../utils/cleanpage/";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hi, I'm</p>
    <h1>Alberto Peinado</h1>
    <p>I'm a passionate web development student currently finishing my first year of a master degree.
    This portfolio is a showcase of the projects and skills I’ve been developing during my studies.
    My goal is to continue growing as a web developer, taking on new challenges and applying creative solutions. I invite you to explore the projects I’ve worked on so far.  </p>
    </section>`;
};