import { Metadata } from 'next'
import { Heading } from '@styles/globals'
import { Container } from '@styles/card'
import Project from '@components/project/Project'
import projects from '@data/projects'

export const metadata: Metadata = {
  title: 'Projects',
}

const Projects = () => {
  return (
    <>
      <Heading>Projects</Heading>
      <Container aria-label='projects'>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </Container>
    </>
  )
}

export default Projects
