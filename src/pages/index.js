import React, { Suspense, useRef } from "react"
import { Canvas } from 'react-three-fiber';
import { useStaticQuery, graphql } from "gatsby";
import '../styles/app.css';
import { Html, PerspectiveCamera } from '@react-three/drei';



import Model from '../models/cowboy-small/Cowboy.js';
// markup

function Plane({ ...props }) {
  return (
    <mesh {...props} receiveShadow>
      <meshStandardMaterial color='hotpink' />
      <planeBufferGeometry args={[500, 500, 1, 1]} />
      <shadowMaterial transparent opacity={0.2} />
    </mesh>
  )
}

const IndexPage = () => {
  const fightersQuery = graphql`{
    allGunfightersJson {
      edges {
        node {
          id
          ambidextrous
          bac
          braveryacc
          braveryspd
          bsp
          exp
          firstname
          gac
          lastname
          loss
          nickname
          profession
          rank
          seed
          spd
          st
          win
          winvshigher
          winvstop10
          winvstop5
          wpn
        }
      }
    }
  }`;
  const response = useStaticQuery(fightersQuery);
  const fighters = response.allGunfightersJson.edges;
  const d = 8.25
  //const [ref, api] = useBox(() => ({ mass: 1 }))

  return (
    <div>
      <h1>Gunfighter</h1>
      <Canvas >

        <PerspectiveCamera makeDefault>
          <hemisphereLight skyColor={"black"} groundColor={0xffffff} intensity={0.5} position={[0, 50, 0]} />
          <directionalLight
            position={[-8, 20, 8]}
            shadow-camera-left={d * -1}
            shadow-camera-bottom={d * -1}
            shadow-camera-right={d}
            shadow-camera-top={d}
            shadow-camera-near={0.1}
            shadow-camera-far={1500}
            castShadow
          />

          <Suspense fallback={<Html>loading..</Html>}>
            <Model position={[0, -0.2, -6]} scale={[1,1,1]} rotation={[0, 0, 0]} />
          </Suspense>
          <Plane rotation={[-0.5 * Math.PI, 0, 0]} position={[0,0,0]} />

        </PerspectiveCamera>

      </Canvas>
    </div>
  )
}

export default IndexPage
