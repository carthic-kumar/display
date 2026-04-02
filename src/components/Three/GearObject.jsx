import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function GearObject({ position = [0, 0, 0], scale = 1, rotation = [0, 0, 0] }) {
  const mesh = useRef()

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x += rotation[0] * 0.005
      mesh.current.rotation.y += rotation[1] * 0.005
      mesh.current.rotation.z += rotation[2] * 0.005
    }
  })

  return (
    <group ref={mesh} position={position} scale={scale} rotation={rotation}>
      {/* Outer ring with teeth - created with torus */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.15, 8, 24]} />
        <meshStandardMaterial
          color="#374151"
          metalness={0.9}
          roughness={0.2}
        />
      </mesh>

      {/* Teeth - small cylinders around the edge */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const x = Math.cos(angle) * 1
        const z = Math.sin(angle) * 1
        return (
          <mesh key={i} position={[x, 0, z]} rotation={[0, 0, angle]}>
            <boxGeometry args={[0.15, 0.3, 0.15]} />
            <meshStandardMaterial
              color="#4b5563"
              metalness={0.9}
              roughness={0.2}
            />
          </mesh>
        )
      })}

      {/* Center hub */}
      <mesh>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 16]} />
        <meshStandardMaterial
          color="#1f2937"
          metalness={0.9}
          roughness={0.3}
        />
      </mesh>

      {/* Central hole (using a smaller cylinder for cutout effect) */}
      <mesh position={[0, 0.11, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 8]} />
        <meshStandardMaterial
          color="#0a0a0f"
          metalness={0.0}
          roughness={1}
        />
      </mesh>

      {/* Decorative cutouts */}
      {Array.from({ length: 4 }).map((_, i) => {
        const angle = (i / 4) * Math.PI * 2
        const x = Math.cos(angle) * 0.25
        const z = Math.sin(angle) * 0.25
        return (
          <mesh key={`cutout-${i}`} position={[x, 0.11, z]} rotation={[0, 0, angle]}>
            <boxGeometry args={[0.08, 0.15, 0.08]} />
            <meshStandardMaterial
              color="#0a0a0f"
              metalness={0.0}
              roughness={1}
            />
          </mesh>
        )
      })}
    </group>
  )
}
