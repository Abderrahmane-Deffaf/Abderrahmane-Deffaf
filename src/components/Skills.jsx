import React from 'react'
import { skills } from '../Text/skills'
import SkillsWrapper from '../subComponents/SkillsWrapper'

const Skills = () => {
  return (
    <section className='mt-[6rem] flex flex-col gap-[3rem]'>
      <h2 className='text-center'>Skills</h2>
      <div className='flex flex-col gap-[4rem]'>
        {
          skills.map((Element)=> {
            return(
              <SkillsWrapper key={Element.title} Element={Element} />
            )
          })
        }
      </div>
    </section>
  )
}

export default Skills