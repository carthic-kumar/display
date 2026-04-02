import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import GearObject from './GearObject'

function ParticleField({ count = 1000 }) {
  const mesh = useRef()

  const [positions, colors] = useMemo(() => {
    const p = new Float32Array(count * 3)
    const c = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const radius = 5 + Math.random() * 15
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      p[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      p[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      p[i * 3 + 2] = radius * Math.cos(phi)

      const color = new THREE.Color()
      color.setHSL(0.55 + Math.random() * 0.15, 0.7, 0.6)
      c[i * 3] = color.r
      c[i * 3 + 1] = color.g
      c[i * 3 + 2] = color.b
    }

    return [p, c]
  }, [count])

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta * 0.03
    mesh.current.rotation.x += delta * 0.01
  })

  return (
    <Points positions={positions} colors={colors} ref={mesh} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.04}
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
    mesh.current.rotation.x = state.clock.elapsedTime * 0.08
    mesh.current.rotation.y = state.clock.elapsedTime * 0.12
    wireframe.current.rotation.x = state.clock.elapsedTime * 0.08
    wireframe.current.rotation.y = state.clock.elapsedTime * 0.12
  })

  return (
    <group>
      <mesh ref={mesh} scale={2}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.9}
          roughness={0.15}
          emissive="#0ea5e9"
          emissiveIntensity={0.05}
        />
      </mesh>
      <mesh ref={wireframe} scale={2.02}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial
          color="#0ea5e9"
          wireframe
          transparent
          opacity={0.08}
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
    ring1.current.rotation.x = state.clock.elapsedTime * 0.15
    ring1.current.rotation.y = state.clock.elapsedTime * 0.2
    ring2.current.rotation.x = state.clock.elapsedTime * 0.12
    ring2.current.rotation.y = -state.clock.elapsedTime * 0.18
    ring3.current.rotation.x = -state.clock.elapsedTime * 0.08
    ring3.current.rotation.y = state.clock.elapsedTime * 0.15
  })

  return (
    <group>
      <mesh ref={ring1} position={[4, 1, -1]}>
        <torusGeometry args={[0.6, 0.015, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.15} />
      </mesh>
      <mesh ref={ring2} position={[-3.5, -0.5, 2]}>
        <torusGeometry args={[0.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.15} />
      </mesh>
      <mesh ref={ring3} position={[-1, -3, 1]}>
        <torusGeometry args={[0.4, 0.015, 16, 100]} />
        <meshBasicMaterial color="#d946ef" transparent opacity={0.1} />
      </mesh>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
      className="absolute inset-0 z-0"
    >
      <color attach="background" args={['#020617']} />
      <fog attach="fog" args={['#020617', 12, 25]} />

      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <pointLight position={[-5, 3, -5]} color="#0ea5e9" intensity={1.5} />
      <pointLight position={[5, -3, 5]} color="#8b5cf6" intensity={1.5} />

      <ParticleField count={800} />
      <SimulationMesh />
      <GearObject position={[-4, 2, -3]} scale={0.6} rotation={[0.5, 0.5, 0]} />
      <GearObject position={[5, -1.5, 1]} scale={0.4} rotation={[-0.3, 0.7, 0.2]} />
      <FloatingRings />
    </Canvas>
  )
}
