import "./style.css";
import { changeTheme } from "./components/NavBar/NavBar";
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { Divider } from "./components/Divider/Divider";
import { About } from "./pages/About/About";

const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);
linkPage("#aboutlink", About);

Home();

changeTheme();

footer.insertAdjacentHTML("beforebegin", Divider());
