import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='Kvartum' caption='' className='logobg' />
          <h1 className='hero-title'>VI BYGGER DIGITALE OPPLEVELSER</h1>

          <div className='sub-heading'>
            <TitleSm title='REKLAME' /> <span>.</span>
            <TitleSm title='INNHOLDSPRODUKSJON' /> <span>.</span>
            <TitleSm title='MARKEDSFØRING' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Innovative digitale opplevelser' />
            <p> Velkommen til en reise der vi sammen vil oppdage endeløse digitale potensialer og forme din digitale suksesshistorie."</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      
      <br />
      <br />

      
      
    </>
  )
}

export default Hero
