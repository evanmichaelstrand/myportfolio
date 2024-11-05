import { Container } from "./styles";
import Dynatrace_Logo from "../../assets/Dynatrace_Logo.svg"
import cu_logo from "../../assets/cu_logo.png";
import about_dt from "../../assets/about_dt.png";
import graduation from "../../assets/evanandkiragraduation.jpg";
import ScrollAnimation from "react-animate-on-scroll";


export function About() {
  return (
    <div>
      <div className="pad"></div>
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
          <a  href="https://www.dynatrace.com/" target="_blank" rel="noreferrer">
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

    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Education</h2>
          <div className="about-logo">
            <img src={cu_logo} alt="CU" />
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          I attended the University of Colorado Boulder, where I received two bachelor's degrees in
          Computer Science and Mathematics.
          {/*With my technical background and passion for creating solutions, my goal is to provide strategic consulting to my clients.*/}
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            My course work included Software Development, Artificial Intelligence, Data Science, Database Systems,
            and more. 
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Most importantly, University helped me develope my problem solving skills and instil confidence in my 
            ability to lean.
          </p>
        </ScrollAnimation>
      </div>

      <div className="about-image" >
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000} >
          <img src={graduation} alt="Evan and Kira's Graduation" />
        </ScrollAnimation>
      </div>

    </Container>

    </div>
    
  )
}
