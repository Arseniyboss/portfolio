import { Metadata } from 'next'
import { Heading } from '@/styles/globals'
import { CardWrapper } from '@/styles/card'
import Skill from '@/components/skill/Skill'
import skills from '@/data/skills'

export const metadata: Metadata = {
  title: 'Skills',
}

const Skills = () => {
  return (
    <>
      <Heading>Skills</Heading>
      <CardWrapper aria-label='skills'>
        {skills.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </CardWrapper>
    </>
  )
}

export default Skills
