import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import pythonIcon from "../../assets/pythonIcon.svg";
import flaskIcon from "../../assets/flask.svg";
import flask from "../../assets/flask.svg";
import hurdlewordle from "../../assets/hurdlewordle.png";
import Dynatrace_Logo from "../../assets/Dynatrace_Logo.svg"
import externalLink from "../../assets/external-link.svg";
import externalLinkDT from "../../assets/externallink-blue_400.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

  

      <ScrollAnimation animateIn="bounceInDown" delay={0.1 * 1000}>
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <a href="https://github.com/evanmichaelstrand/wordle_solver_site" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="View Repository" />
                </a>
              {/*<div className="project-links">
                  <a href="https://youtu.be/Ieh2UFjsSOw" target="_blank">
                    <img src={externalLinkDT} alt="Visit site" />
                  </a>
                </div>
                */}
            </header>
        
            <div className="body">
              <h3>Hurdle Wordle - Wordle solving website</h3>
              {/*<img className="project_img" src={hurdlewordle}></img>*/}
              <p>
              This application solves popular NY Times game Wordle. The program 
              will offer recommendations for the next best guess, then filter down
              the remaining words based on the previous resulting colors. Each possible
              word is given a score based on my algorithm.
              </p>
            </div>
            <footer>
              <p>
                <a href="https://youtu.be/Ieh2UFjsSOw" target="_blank">See how it works</a>
              </p>
              <ul className="tech-list">
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
                    <img src={pythonIcon} alt="Python" />
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
                    <img src={flaskIcon} alt="Flask" />
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
                    <img src={jsIcon} alt="JavaScript" />
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
                    <img src={htmlIcon} alt="HTML" />
                  </ScrollAnimation>
                </div>
                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
                    <img src={cssIcon} alt="CSS" />
                  </ScrollAnimation>
                </div>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="bounceInDown" delay={0.2 * 1000}>
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <a href="https://github.com/evanmichaelstrand/entity-exporter" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="View Repository" />
                </a>
            </header>
            <div className="body">
              <h3>Entity Exporter</h3>
              <p>
              Built on Dynatrace's AppEngine, Entity Exporter uses the Entities API to 
              allow users to easily download a list of entities from their Dynatrace environment.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
              <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
                    <img src={reactIcon} alt="React" />
                  </ScrollAnimation>
                </div>

                <div className="hability">
                  <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
                    <img src={Dynatrace_Logo} alt="Dynatrace" />
                  </ScrollAnimation>
                </div>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        

        <ScrollAnimation animateIn="bounceInDown" delay={0.3 * 1000}>
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <a href="https://github.com/evanmichaelstrand/myportfolio" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="View Repository" />
                </a>
            </header>
            <div className="body">
              <h3>MedicalBooks - Book Selling Site</h3>
              <p>
              This website sells medical books online and is popular with medical students. Medical students use it to buy books and acquire knowledge. The site has all kinds of medical books in one place.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
  
      </div>
    </Container>
  );
}