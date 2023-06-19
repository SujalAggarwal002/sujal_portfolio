import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsDiscord} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sujal-aggarwal-7a3646266" target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/SujalAggarwal" target='_blank' rel='noreferrer'><FaGithub/></a>
        <a href="https://discordapp.com/users/775050224942448642" target='_blank' rel='noreferrer'><BsDiscord/></a>
    </div>
  )
}

export default HeaderSocials