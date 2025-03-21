import { Container } from './styles'

import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import emailIcon from "../../assets/email-icon.svg";
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
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
            target="_blank"
            rel = "noreferrer">
              <img src={emailIcon} alt="Email" />
          </a>
        {/*
      <a href="https://vinayaksingh.in" className="logo">
        <span>www.vinayak</span>
        <span>singh.in</span>
      </a>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          <span>❤️</span> 
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/codevinayak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/CodeVinayak/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://t.me/CodeVinayak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a>
        <a
          href="https://www.instagram.com/vinayaksingh.in"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
     
        </div>
        */}
      </div>
    </Container>
  )
}
