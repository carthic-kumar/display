import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import * as THREE from 'three'
import GearObject from './GearObject'
import ProfileCard3D from './ProfileCard3D'

function ParticleField({ count = 2000 }) {
  const mesh = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const radius = 5 + Math.random() * 15
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)

      const color = new THREE.Color()
      color.setHSL(0.5 + Math.random() * 0.2, 0.8, 0.6)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    return [positions, colors]
  }, [count])

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta * 0.05
    mesh.current.rotation.x += delta * 0.02
  })

  return (
    <Points positions={positions} stride={3} ref={mesh}>
      <PointMaterial
        transparent
        color="#00d4ff"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function SimulationMesh() {
  const mesh = useRef()
  const wireframe = useRef()

  useFrame((state) => {
    mesh.current.rotation.x = state.clock.elapsedTime * 0.1
    mesh.current.rotation.y = state.clock.elapsedTime * 0.15
    wireframe.current.rotation.x = state.clock.elapsedTime * 0.1
    wireframe.current.rotation.y = state.clock.elapsedTime * 0.15
  })

  return (
    <group>
      <mesh ref={mesh} scale={1.5}>
        <icosahedronGeometry args={[1, 3]} />
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.9}
          roughness={0.1}
          emissive="#00d4ff"
          emissiveIntensity={0.1}
        />
      </mesh>
      <mesh ref={wireframe} scale={1.51}>
        <icosahedronGeometry args={[1, 3]} />
        <meshBasicMaterial
          color="#00d4ff"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  )
}

function FloatingRings() {
  const ring1 = useRef()
  const ring2 = useRef()
  const ring3 = useRef()

  useFrame((state) => {
    ring1.current.rotation.x = state.clock.elapsedTime * 0.2
    ring1.current.rotation.y = state.clock.elapsedTime * 0.3
    ring2.current.rotation.x = state.clock.elapsedTime * 0.15
    ring2.current.rotation.y = -state.clock.elapsedTime * 0.25
    ring3.current.rotation.x = -state.clock.elapsedTime * 0.1
    ring3.current.rotation.y = state.clock.elapsedTime * 0.2
  })

  return (
    <group>
      <mesh ref={ring1} position={[3, 0, 0]}>
        <torusGeometry args={[0.8, 0.02, 16, 100]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring2} position={[-2.5, 1, 1]}>
        <torusGeometry args={[0.6, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring3} position={[0, -2, 2]}>
        <torusGeometry args={[0.7, 0.02, 16, 100]} />
        <meshBasicMaterial color="#ec4899" transparent opacity={0.5} />
      </mesh>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      className="absolute inset-0 z-0"
    >
      <color attach="background" args={['#0a0a0f']} />
      <fog attach="fog" args={['#0a0a0f', 10, 20]} />

      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, 3, -5]} color="#00d4ff" intensity={2} />
      <pointLight position={[5, -3, 5]} color="#a855f7" intensity={2} />

      <ParticleField count={1500} />
      <SimulationMesh />
      <GearObject position={[-4, 2, -2]} scale={0.8} rotation={[0.5, 0.5, 0]} />
      <GearObject position={[4, -1.5, 1]} scale={0.6} rotation={[-0.3, 0.7, 0.2]} />
      <FloatingRings />
      <ProfileCard3D position={[0, -2, -3]} scale={1.5} />
    </Canvas>
  )
}
