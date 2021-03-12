import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from 'react-three-fiber'
import { useGLTF } from '@react-three/drei/coreuseGLTF'

import { useAnimations } from '@react-three/drei/useAnimations'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/cowboy.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.hips} />
      <skinnedMesh
        material={materials.tinycowboy_material}
        geometry={nodes.Cowboy.geometry}
        skeleton={nodes.Cowboy.skeleton}
      />
      <mesh material={nodes.CowboyHP.material} geometry={nodes.CowboyHP.geometry} />
    </group>
  )
}

useGLTF.preload('/cowboy.gltf')
