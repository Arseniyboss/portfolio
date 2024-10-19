import { Metadata } from 'next'
import { Heading } from '@/styles/globals'
import { CardWrapper } from '@/styles/card'
import Project from '@/components/project/Project'
import projects from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects',
}

const Projects = () => {
  return (
    <>
      <Heading>Projects</Heading>
      <CardWrapper aria-label='projects'>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </CardWrapper>
    </>
  )
}

export default Projects
