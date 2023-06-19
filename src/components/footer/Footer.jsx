import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsDiscord} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SUJAL AGGARWAL</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/sujal-aggarwal-7a3646266" target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/SujalAggarwal" target='_blank' rel='noreferrer'><BsGithub/></a>
        <a href="https://discordapp.com/users/775050224942448642" target='_blank' rel='noreferrer'><BsDiscord/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;2023 Sujal Aggarwal. All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer