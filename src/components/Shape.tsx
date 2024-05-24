import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { MeshNormalMaterial, Mesh } from 'three'
import { Float } from '@react-three/drei'
import { animateShape } from '@/utils/animations'
import { Shape as Props } from '@/types'

const Shape = ({ position, geometry }: Props) => {
  const material = new MeshNormalMaterial()
  const ref = useRef<Mesh>(null)

  useGSAP(() => {
    animateShape(ref)
  }, [])
  return (
    <group position={position}>
      <Float speed={3} rotationIntensity={3} floatIntensity={3}>
        <mesh geometry={geometry} material={material} ref={ref} />
      </Float>
    </group>
  )
}

export default Shape
