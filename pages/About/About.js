import "./About.css";
import { cleanPage } from "../../utils/cleanPage";
import { Divider } from "../../components/Divider/Divider";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
  <section class="about">
  <h2>Master's Projects</h2>
  ${Divider()}
  </section>`;

  const section = document.querySelector("section")
  const div = document.createElement("div")
  div.className = "container gallery";
  const header = document.createElement("header");
  const parrafo1 = document.createElement("p");
  parrafo1.textContent = 
  "Although my professional career began in a different field, I currently work as a primary school teacher, my interest in technology and programming has led me to make a significant shift towards web development";
  header.appendChild(parrafo1);
  div.appendChild(header);
  section.appendChild(div);

  const sectionImg1 = document.createElement("section");
  sectionImg1.className = "img1";
  
  const sectionImg2 = document.createElement("section");
  sectionImg2.className = "img2";

  const div2 = document.createElement("div");
  const parrafo2 = document.createElement("p");
  parrafo2.textContent = 
  "Throughout my previous career, I developed skills in problem-solving, teamwork, and communication, which I now apply to web development. Through my studies and personal projects, I am deepening my knowledge of HTML, CSS, and JavaScript. In addition to all the content I am studying in the web development course.";
  div2.appendChild(parrafo2);

  const sectionImg3 = document.createElement("section");
  sectionImg3.className = "img3";
 
  div.appendChild(sectionImg1);
  div.appendChild(sectionImg2);
  div.appendChild(div2);
  div.appendChild(sectionImg3);


  const div3 = document.createElement("div");
  const parrafo3 = document.createElement("p");
  div3.className = "footer";
  parrafo3.textContent = 
  "My current goal is to gain practical experience and advance in my growth as a junior web developer. I am committed to continuing to learn and improve my skills, and I am excited about the opportunities that this new stage in my professional career will bring.";
  div3.appendChild(parrafo3);
  div.appendChild(div3);
  }
