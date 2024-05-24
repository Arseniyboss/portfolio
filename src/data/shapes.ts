import * as THREE from 'three'
import { Shape } from '@/types'

export const shapes: Shape[] = [
  {
    geometry: new THREE.IcosahedronGeometry(2),
    position: [0, 0, 0],
  },
  {
    geometry: new THREE.DodecahedronGeometry(),
    position: [-3, 2, 0],
  },
  {
    geometry: new THREE.OctahedronGeometry(),
    position: [3, 2, 0],
  },
  {
    geometry: new THREE.TorusGeometry(0.8, 0.3),
    position: [-3, -2, 0],
  },
  {
    geometry: new THREE.CapsuleGeometry(0.5, 1.3),
    position: [3, -2, 0],
  },
]
