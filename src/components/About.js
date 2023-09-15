import React from 'react'
import aboutImg from '../images/about.jpeg'
import Title from './Title'

const About = () => {
  return (
    <>
      <section class="section" id="about">
        <Title title="about" subTitle="us" />

        <div class="section-center about-center">
          <div class="about-img">
            <img src={aboutImg} class="about-photo" alt="awesome beach" />
          </div>
          <article class="about-info">
            <h3>explore the difference</h3>
            <p>
              India, where every state is a story and evey culture is a chapter!
              <br></br>
              Here at Atithi, we connect you with the local families of the
              cultures and traditions you want to explore. Happy exploring!
            </p>
            <a href="#" class="btn">
              read more
            </a>
          </article>
        </div>
      </section>
    </>
  )
}

export default About
