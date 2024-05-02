import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import hero from "../../assets/hero.png"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import emailIcon from "../../assets/email-icon.svg";
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
//import { spanStyle, divStyle, slideImages, Slideshow } from '../Slide/slide'

/*
<ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        */

export function Hero() {
  return (
    <Container id="home">
      <ScrollAnimation animateIn="fadeInLeft" delay={1.5 * 1000}>
        <div className="hero-image">
          <img src={hero} alt="Ilustração" />
        </div>
      </ScrollAnimation>
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeIn" delay={0.2 * 1000} duration={2}>
          <h1>Evan Strand</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <h2>Software Product Specialist</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1.2 * 1000}>
          <h3>Connect</h3>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeInUp" delay={1.5 * 1000}>
        <div className="social-media">
          
          <a
          href="https://www.linkedin.com/in/evan-strand-a33331195/"
          target="_blank"
          rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a
            href="https://github.com/evanmichaelstrand"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>

          <a href="mailto:evanmstrand@gmail.com"
          target="_blank">
            <img src={emailIcon} alt="Email" />
          </a>

        </div>
        </ScrollAnimation>

      </div>
      
    </Container>

  )
}
/*
<div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Ilustração" />
        </ScrollAnimation>
      </div>
      */