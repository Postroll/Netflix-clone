import React from 'react'
import styled from 'styled-components'

const BackgroundImage = () => {
  return (
    <BackgroundContainer>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5f9bcca9-628c-4bdd-a7af-8ede1d0119a7/FR-en-20230904-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='could not load background'/>
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  img{
    height: 100vh;
    width: 100vw;
  }
`

export default BackgroundImage