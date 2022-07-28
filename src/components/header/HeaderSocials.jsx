import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {SiDevpost} from "react-icons/si"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/pilotprix/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/PilotPrix" target="_blank"><FaGithub /></a>
        <a href="https://devpost.com/PilotPrix" target="_blank"><SiDevpost /></a>
    </div>
  )
}

export default HeaderSocials