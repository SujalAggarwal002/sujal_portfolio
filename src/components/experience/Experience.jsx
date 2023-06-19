import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        
        {/* Responsibilties */}
        <div className="experience__frontend">
          <h3>Responsibilities</h3>
          <div className="experience__content">

            {/* CSI */}
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Computer Society of India</h4>
              <small className='text-light'>Member</small>
              </div>
            </article>

            {/* Vector */}
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Navdhara Runner Ups</h4>
              <small className='text-light'>Vector-Personal Smart Robot</small>
              </div>
            </article>
            

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Class Representative</h4>
              <small className='text-light'>1st Year</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>State Level Selection</h4>
              <small className='text-light'>Smart City-School Project</small>
              </div>
            </article>
          </div>
        </div>

        {/* Programming */}
        <div className="experience__backend">
          <h3>Programming</h3>
          <div className="experience__content">
            {/* Javascript */}
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            {/* React */}
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            
            {/* python */}
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            {/* java */}
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            {/* RDBMS */}
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>RDBMS</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

            {/* MSSQL */}
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MSSQL</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>IoT</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Kotlin</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience