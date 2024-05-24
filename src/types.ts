import { BufferGeometry } from 'three'

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

export type Shape = {
  geometry: BufferGeometry
  position: [number, number, number]
}
