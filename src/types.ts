export interface Skill {
  name: string
  img: string
}

export interface Project extends Skill {
  url: string
}

export type NavLink = {
  id: number
  label: string
  href: string
}
