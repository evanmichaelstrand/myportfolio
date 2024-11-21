import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import pythonIcon from "../../assets/pythonIcon.svg";
import flaskIcon from "../../assets/flask.svg";
//import flask from "../../assets/flask.svg";
//import hurdlewordle from "../../assets/hurdlewordle.png";
import Dynatrace_Logo from "../../assets/Dynatrace_Logo.svg"
import azureIcon from "../../assets/azureIcon.svg";
import k8sIcon from "../../assets/k8sIcon.svg";
import externalLink from "../../assets/external-link.svg";
//import externalLinkDT from "../../assets/externallink-blue_400.svg";
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <div>
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
                      <a href="https://youtu.be/Ieh2UFjsSOw" target="_blank" rel = "noreferrer">See how it works</a>
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
                    <h3>Personal Website</h3>
                    <p>
                    This website! Deployed with Azure App Service and monitored with Dynatrace..
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
                            <img src={azureIcon} alt="Azure" />
                          </ScrollAnimation>
                        </div>
                    </ul>
                  </footer>
                </div>
              </ScrollAnimation>
        
            </div>
          </Container>

      <Container id="certs">
        <h2>My Certificates</h2>
        <div className="projects">

        <ScrollAnimation animateIn="bounceInDown" delay={0.1 * 1000}>
            <div className="project">
              <header>
             
                <svg width="50" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.005 15.1854C14.4075 15.1854 16.355 13.1842 16.355 10.7154C16.355 8.24673 14.4075 6.24545 12.005 6.24545C9.6026 6.24545 7.65503 8.24673 7.65503 10.7154C7.65503 13.1842 9.6026 15.1854 12.005 15.1854Z" stroke="#239ece" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.875 3.52545C13.385 2.59545 14.765 2.97545 14.745 4.04545C14.735 4.85545 15.585 5.35545 16.255 4.94545C17.145 4.39545 18.165 5.43545 17.625 6.35545C17.225 7.04545 17.715 7.92545 18.495 7.90545C19.535 7.88545 19.905 9.30545 18.995 9.82545C18.305 10.2154 18.305 11.2254 18.995 11.6154C19.905 12.1354 19.535 13.5555 18.495 13.5355C17.715 13.5255 17.215 14.3954 17.625 15.0854C18.155 16.0054 17.145 17.0455 16.255 16.4955C15.585 16.0855 14.725 16.5854 14.745 17.3954C14.765 18.4654 13.375 18.8455 12.875 17.9155C12.495 17.2155 11.505 17.2155 11.125 17.9155C10.615 18.8455 9.23499 18.4654 9.25499 17.3954C9.26499 16.5854 8.415 16.0855 7.745 16.4955C6.855 17.0455 5.83499 16.0054 6.37499 15.0854C6.77499 14.3954 6.28499 13.5155 5.50499 13.5355C4.46499 13.5555 4.09499 12.1354 5.00499 11.6154C5.69499 11.2254 5.69499 10.2154 5.00499 9.82545C4.09499 9.30545 4.46499 7.88545 5.50499 7.90545C6.28499 7.91545 6.78499 7.04545 6.37499 6.35545C5.84499 5.43545 6.855 4.39545 7.745 4.94545C8.415 5.35545 9.27499 4.85545 9.25499 4.04545C9.23499 2.97545 10.625 2.59545 11.125 3.52545C11.515 4.22545 12.495 4.22545 12.875 3.52545Z" stroke="#239ece" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.86498 18.3254L5.33498 19.2755C5.07498 19.7355 5.57497 20.2455 6.04497 19.9855L7.75498 19.0355C8.10498 18.8555 8.52498 19.0955 8.53498 19.4955L8.57499 21.4855C8.60499 22.0255 9.30499 22.1955 9.57499 21.7355L10.285 20.4555" stroke="#239ece" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.145 18.3354L18.675 19.2755C18.935 19.7355 18.435 20.2455 17.955 19.9855L16.255 19.0355C15.905 18.8555 15.485 19.0955 15.475 19.4955L15.435 21.4855C15.405 22.0255 14.705 22.1955 14.435 21.7355L13.735 20.4555" stroke="#239ece" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <a href="https://www.dynatrace.com/dynatrace-university/" target="_blank" rel="noreferrer">
                  <img src={Dynatrace_Logo} alt="Dynatrace" />
                </a>

              </header>
          
              <div className="body">
                <h3>Dynatrace Certified Professional</h3>
                  <p>
                  May 2023
                  </p>
              </div>
              <footer>
              </footer>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="bounceInDown" delay={0.2 * 1000}>
            <div className="project">
              <header>
                <svg width="50" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.005 15.1854C14.4075 15.1854 16.355 13.1842 16.355 10.7154C16.355 8.24673 14.4075 6.24545 12.005 6.24545C9.6026 6.24545 7.65503 8.24673 7.65503 10.7154C7.65503 13.1842 9.6026 15.1854 12.005 15.1854Z" stroke="#239ece" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.875 3.52545C13.385 2.59545 14.765 2.97545 14.745 4.04545C14.735 4.85545 15.585 5.35545 16.255 4.94545C17.145 4.39545 18.165 5.43545 17.625 6.35545C17.225 7.04545 17.715 7.92545 18.495 7.90545C19.535 7.88545 19.905 9.30545 18.995 9.82545C18.305 10.2154 18.305 11.2254 18.995 11.6154C19.905 12.1354 19.535 13.5555 18.495 13.5355C17.715 13.5255 17.215 14.3954 17.625 15.0854C18.155 16.0054 17.145 17.0455 16.255 16.4955C15.585 16.0855 14.725 16.5854 14.745 17.3954C14.765 18.4654 13.375 18.8455 12.875 17.9155C12.495 17.2155 11.505 17.2155 11.125 17.9155C10.615 18.8455 9.23499 18.4654 9.25499 17.3954C9.26499 16.5854 8.415 16.0855 7.745 16.4955C6.855 17.0455 5.83499 16.0054 6.37499 15.0854C6.77499 14.3954 6.28499 13.5155 5.50499 13.5355C4.46499 13.5555 4.09499 12.1354 5.00499 11.6154C5.69499 11.2254 5.69499 10.2154 5.00499 9.82545C4.09499 9.30545 4.46499 7.88545 5.50499 7.90545C6.28499 7.91545 6.78499 7.04545 6.37499 6.35545C5.84499 5.43545 6.855 4.39545 7.745 4.94545C8.415 5.35545 9.27499 4.85545 9.25499 4.04545C9.23499 2.97545 10.625 2.59545 11.125 3.52545C11.515 4.22545 12.495 4.22545 12.875 3.52545Z" stroke="#239ece" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.86498 18.3254L5.33498 19.2755C5.07498 19.7355 5.57497 20.2455 6.04497 19.9855L7.75498 19.0355C8.10498 18.8555 8.52498 19.0955 8.53498 19.4955L8.57499 21.4855C8.60499 22.0255 9.30499 22.1955 9.57499 21.7355L10.285 20.4555" stroke="#239ece" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.145 18.3354L18.675 19.2755C18.935 19.7355 18.435 20.2455 17.955 19.9855L16.255 19.0355C15.905 18.8555 15.485 19.0955 15.475 19.4955L15.435 21.4855C15.405 22.0255 14.705 22.1955 14.435 21.7355L13.735 20.4555" stroke="#239ece" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <a href="https://training.linuxfoundation.org/certification/kubernetes-cloud-native-associate/" target="_blank" rel="noreferrer">
                  <img src={k8sIcon} alt="Kubernetes" />
                </a>
              </header>
              <div className="body">
                <h3>Kubernetes and Cloud Native Associate</h3>
                <p>
                October 2023
                </p>
              </div>
              <footer>
              </footer>
            </div>
          </ScrollAnimation>

          

          <ScrollAnimation animateIn="bounceInDown" delay={0.3 * 1000}>
            <div className="project">
              <header>
                <svg width="50" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.005 15.1854C14.4075 15.1854 16.355 13.1842 16.355 10.7154C16.355 8.24673 14.4075 6.24545 12.005 6.24545C9.6026 6.24545 7.65503 8.24673 7.65503 10.7154C7.65503 13.1842 9.6026 15.1854 12.005 15.1854Z" stroke="#239ece" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.875 3.52545C13.385 2.59545 14.765 2.97545 14.745 4.04545C14.735 4.85545 15.585 5.35545 16.255 4.94545C17.145 4.39545 18.165 5.43545 17.625 6.35545C17.225 7.04545 17.715 7.92545 18.495 7.90545C19.535 7.88545 19.905 9.30545 18.995 9.82545C18.305 10.2154 18.305 11.2254 18.995 11.6154C19.905 12.1354 19.535 13.5555 18.495 13.5355C17.715 13.5255 17.215 14.3954 17.625 15.0854C18.155 16.0054 17.145 17.0455 16.255 16.4955C15.585 16.0855 14.725 16.5854 14.745 17.3954C14.765 18.4654 13.375 18.8455 12.875 17.9155C12.495 17.2155 11.505 17.2155 11.125 17.9155C10.615 18.8455 9.23499 18.4654 9.25499 17.3954C9.26499 16.5854 8.415 16.0855 7.745 16.4955C6.855 17.0455 5.83499 16.0054 6.37499 15.0854C6.77499 14.3954 6.28499 13.5155 5.50499 13.5355C4.46499 13.5555 4.09499 12.1354 5.00499 11.6154C5.69499 11.2254 5.69499 10.2154 5.00499 9.82545C4.09499 9.30545 4.46499 7.88545 5.50499 7.90545C6.28499 7.91545 6.78499 7.04545 6.37499 6.35545C5.84499 5.43545 6.855 4.39545 7.745 4.94545C8.415 5.35545 9.27499 4.85545 9.25499 4.04545C9.23499 2.97545 10.625 2.59545 11.125 3.52545C11.515 4.22545 12.495 4.22545 12.875 3.52545Z" stroke="#239ece" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.86498 18.3254L5.33498 19.2755C5.07498 19.7355 5.57497 20.2455 6.04497 19.9855L7.75498 19.0355C8.10498 18.8555 8.52498 19.0955 8.53498 19.4955L8.57499 21.4855C8.60499 22.0255 9.30499 22.1955 9.57499 21.7355L10.285 20.4555" stroke="#239ece" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18.145 18.3354L18.675 19.2755C18.935 19.7355 18.435 20.2455 17.955 19.9855L16.255 19.0355C15.905 18.8555 15.485 19.0955 15.475 19.4955L15.435 21.4855C15.405 22.0255 14.705 22.1955 14.435 21.7355L13.735 20.4555" stroke="#239ece" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <a href="https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/?practice-assessment-type=certification" target="_blank" rel="noreferrer">
                  <img src={azureIcon} alt="Azure" />
                </a>
              </header>
              <div className="body">
                <h3>Microsoft Azure Fundamentals</h3>
                <p>
                April 2024
                </p>
              </div>
              <footer>
              </footer>
            </div>
          </ScrollAnimation>

        </div>
      </Container>

    </div>
  );
}