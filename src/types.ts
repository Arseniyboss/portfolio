export interface Skill {
  id: number
  img: string
  name: string
}

export interface Project extends Skill {
  url: string
}
