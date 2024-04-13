import { Metadata } from 'next'
import { Heading } from '@/styles/globals'
import { Container } from '@/styles/card'
import Skill from '@/components/skill/Skill'
import skills from '@/data/skills'

export const metadata: Metadata = {
  title: 'Skills',
}

const Skills = () => {
  return (
    <>
      <Heading>Skills</Heading>
      <Container aria-label='skills'>
        {skills.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </Container>
    </>
  )
}

export default Skills
