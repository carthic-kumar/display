import { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function ProfileCard3D({ position = [0, 0, 0], scale = 1 }) {
  const mesh = useRef()
  const [hovered, setHover] = useState(false)
  const [imageTexture, setImageTexture] = useState(null)

  useEffect(() => {
    const loader = new THREE.TextureLoader()
    // Try to load profile image, fallback to placeholder
    loader.load(
      '/profile.jpg',
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace
        setImageTexture(texture)
      },
      undefined,
      () => {
        // If image fails to load, use placeholder SVG
        loader.load('/profile-placeholder.svg', (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace
          setImageTexture(texture)
        })
      }
    )
  }, [])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = THREE.MathUtils.lerp(
        mesh.current.rotation.y,
        hovered ? Math.PI * 0.1 : 0,
        0.1
      )
    }
  })

  if (!imageTexture) return null

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <group ref={mesh} position={position} scale={scale}>
        {/* Main card */}
        <mesh
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        >
          <boxGeometry args={[2, 2.5, 0.1]} />
          <MeshDistortMaterial
            color="#12121a"
            speed={2}
            distort={hovered ? 0.1 : 0.03}
            radius={1}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Border glow */}
        {hovered && (
          <mesh scale={[2.1, 2.6, 0.05]}>
            <boxGeometry />
            <meshBasicMaterial
              color="#00d4ff"
              transparent
              opacity={0.3}
            />
          </mesh>
        )}

        {/* Profile image */}
        {imageTexture && (
          <mesh position={[0, 0.3, 0.06]}>
            <circleGeometry args={[0.7, 32]} />
            <meshBasicMaterial map={imageTexture} />
          </mesh>
        )}

        {/* Name */}
        <Text
          position={[0, -0.9, 0.06]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Carthic Kumar
        </Text>

        {/* Title */}
        <Text
          position={[0, -1.15, 0.06]}
          fontSize={0.12}
          color="#00d4ff"
          anchorX="center"
          anchorY="middle"
        >
          R&D Verification Engineer
        </Text>

        {/* Company */}
        <Text
          position={[0, -1.3, 0.06]}
          fontSize={0.1}
          color="#a855f7"
          anchorX="center"
          anchorY="middle"
        >
          Synopsys
        </Text>
      </group>
    </Float>
  )
}
