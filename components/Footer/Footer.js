import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2>Contact</h2>
<div>
<a href= https://github.com/ target="_blank">
${Button("/images/github.jpg", "GitHub")}
</a>
<a href= https://www.linkedin.com/in/alberto-peinado-gonz%C3%A1lez-794664110/ target="_blank">
${Button("/images/linkedin.jpg", "LinkedIn")}
<a href="mailto:albertopeinado08@gmail.com">
${Button("/images/gmail.png", "Gmail")}
</a>
</div>
`;