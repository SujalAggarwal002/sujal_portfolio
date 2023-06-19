import React from 'react'
import './about.css'
import SUJAL from '../../assets/sujalMain2.jpg'
import {FaAward} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'
import {AiFillFolderAdd} from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={SUJAL} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward/>
              <h5>Experience</h5>
              <small>CSI Member </small>
            </article>


            <article className='about__card'>
              <FaGraduationCap/>
              <h5>University</h5>
              <small>CGPA : 9.51</small>
            </article>


            <article className='about__card'>
              <AiFillFolderAdd/>
              <h5>Projects</h5>
              <small>2+ Completed</small>
            </article>
          </div>
          
            <p>
            I am a skilled Android App developer. Currently Developing Android Apps using Java and Kotlin. I am working on simpler android apps and would be working on complex apps to solve Real-World problems.
            </p>
            <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default about