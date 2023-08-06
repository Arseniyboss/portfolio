import { Skill as Props } from '@types'
import { Container, SkillImage, SkillName } from './styles'

const Skill = ({ img, name }: Props) => {
  return (
    <Container>
      <SkillImage src={img} alt='' width={250} height={250} priority />
      <SkillName>{name}</SkillName>
    </Container>
  )
}

export default Skill
