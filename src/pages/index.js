import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";

// markup
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
  return (
    <main>
      <ul>
      { fighters.map((fighter, i) =>  {
        const data = fighter.node;
        return <li key={ i }>{ data.firstname } { data.lastname }</li>
      })}
      </ul>
    </main>
  )
}

export default IndexPage
