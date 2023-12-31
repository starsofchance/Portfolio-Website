import Home from "../portfolioContainer/Home/Home";
import AboutMe from "../portfolioContainer/AboutMe/AboutMe";
import Resume from "../portfolioContainer/Resume/Resume";
import ProjectsIntroduction from "../portfolioContainer/ProjectsIntroduction/ProjectsIntroduction";
import ContactMe from "../portfolioContainer/ContactMe/ContactMe";
export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "AboutMe",
    component: AboutMe,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },
  {
    screen_name: "Projects Introduction",
    component: ProjectsIntroduction,
  },
  {
    screen_name: "Contact Me",
    component: ContactMe,
  },
];
export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
