
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/core/useGLTF'
//import { boxBufferGeometry, MeshWobbleMaterial} from '@react-three/drei';


export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>

      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.1, 0, 0]} rotation={[0, 0, 0]} scale={[100, 100, 100]}>
            <mesh material={materials['Material.006']} geometry={nodes.Cube_Cube001_Material006_0.geometry} ></mesh>
          </group>
          <group position={[0.1, 0, 0]} rotation={[0, 0, 0]} scale={[100, 100, 100]}>
            <mesh material={materials['Material.001']} geometry={nodes.Cube002_Cube000_Material001_0.geometry} />
          </group>
          <group position={[0.1, 0, 0]} rotation={[0, 0, 0]} scale={[100, 100, 100]}>
            <mesh material={materials['Material.014']} geometry={nodes.Cube003_Cube_Material014_0.geometry} />
            <mesh material={materials.None} geometry={nodes.Cube003_Cube_None_0.geometry} />
            <mesh material={materials['Material.006']} geometry={nodes.Cube003_Cube_Material006_0.geometry} />
            <mesh material={materials['Material.010']} geometry={nodes.Cube003_Cube_Material010_0.geometry} />
          </group>
          <group position={[0.1, 0, 0]} rotation={[0, 0, 0]} scale={[100, 100, 100]}>
            <mesh material={materials['Material.002']} geometry={nodes.Cube001_Cube005_Material002_0.geometry} />
            <mesh material={materials.None} geometry={nodes.Cube001_Cube005_None_0.geometry} />
            <mesh material={materials['Material.004']} geometry={nodes.Cube001_Cube005_Material004_0.geometry} />
            <mesh material={materials['Material.003']} geometry={nodes.Cube001_Cube005_Material003_0.geometry} />
          </group>
          <group position={[0.1, 0, 0]} rotation={[0, 0, 0]} scale={[100, 100, 100]}>
            <mesh material={materials['Material.005']} geometry={nodes.Cube_Cube000_Material005_0.geometry} />
          </group>
          <group position={[0.1, 0, 0]} rotation={[0, 0, 0]} scale={[100, 100, 100]}>
            <mesh material={materials['Material.008']} geometry={nodes.Cube_Cube002_Material008_0.geometry} />
          </group>
          <group rotation={[0, 0, 0]} scale={[100, 100, 100]}>
            <mesh material={materials.None} geometry={nodes.Group1_None_0.geometry} />
          </group>
          <group position={[0.1, 0, 0]} rotation={[0, 0, 0]} scale={[100, 100, 100]}>
            <mesh material={materials['Material.006']} geometry={nodes.Cube_Cube003_Material006_0.geometry} />
          </group>
          <group position={[7.54, 0, 1.79]} rotation={[0, 0, 0]} scale={[100, 100, 100]}>
            <mesh material={materials['Material.006']} geometry={nodes.Cube_Cube004_Material006_0.geometry} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
