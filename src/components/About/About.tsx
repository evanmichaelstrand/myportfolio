import { Container } from "./styles";
import VinayakSingh from "../../assets/VinayakSingh.png";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import Dynatrace_Logo from "../../assets/Dynatrace_Logo.svg"
import about_dt from "../../assets/about_dt.png";
import ScrollAnimation from "react-animate-on-scroll";


export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Occupation</h2>
          <div className="about-logo">
            <img src={Dynatrace_Logo} alt="Dynatrace" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Hello, I'm Evan! I work for Dynatrace as a Product Specialist.
          {/*With my technical background and passion for creating solutions, my goal is to provide strategic consulting to my clients.*/}
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            Dynatrace is an enterprise-level software observability platform with capabilities
            ranging from application observability, infrastructure monitoring, runtime vulnerability
            detection and more. 
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            As a Product Specialist, my goal is to provide strategic consulting to my clients.
            I deliver coaching sessions, recommendations, and technical troubleshooting.
          </p>
          <a  href="https://www.dynatrace.com/">
            Learn more about Dynatrace
          </a>
        </ScrollAnimation>
      </div>
  
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={about_dt} alt="About Dynatrace" />
        </ScrollAnimation>
  </div>
    </Container>
  )
}
