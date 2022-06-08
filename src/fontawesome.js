import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight, faArrowUpRightFromSquare, faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import FontAwesomeIcon from "./components/FontAwesomeIcon.vue";
library.add(faArrowRight, faArrowUpRightFromSquare, faBars, faMoon, faSun, faDiscord, faGithub, faTwitter);

export default FontAwesomeIcon;