import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutSection from '@/components/About'
import ProjectsSection from '@/components/Projects'
import StackedSection from "@/components/StackedSection";
import ContactSection from '@/components/Contact'
import Footer from '@/components/Footer'
import TechStackSlider from '@/components/Slider'
import SkillsSection from '@/components/Skills'

const page = () => {
  return (
    <>
      <div className='bg-slate-950'>
        <Navbar />
        <Hero />
        <TechStackSlider />
        <AboutSection />
        <SkillsSection />
        <hr className='border-t-2 border-gray-700 my-10' />
        <ProjectsSection />
        <hr className='border-t-2 border-gray-700 my-10' />
        <StackedSection>
          <ContactSection />
        </StackedSection>
        <div className='mt-10'>
          <TechStackSlider />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default page