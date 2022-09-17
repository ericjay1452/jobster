import React from 'react'
import styled from "styled-components"

export const LandingPage = () => {
  return (
    <Wrapper>
        <nav>
            <img src={""} alt = "jobster logo" className='logo'/>
        </nav>

        <div className='container page'>
          {/* Two column layout */}

          <div>
           <h1>Jobs <span>Tracking</span> App</h1>
           <p>lorem go yo cd ngndfgg  sjjdj   nvxcvj jdjfn ujdfoho IDBLSDD fddnslaskfkfjjk jfdjjskkn</p>
           <button className='btn btn-hero'>Signin / Login </button>
          </div>
{/* 
          <img src={''} alt= "logo" className='img main-img'/> */}
          <p>loeoff dfepfprmf weohoehho ereildn</p>
         </div>  
    </Wrapper>
  )
}

const Wrapper = styled.main `
nav {
  width : var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: var(--nav-height);
}

.page {
  min-height: calc(100vh - var(--nav-height));
  display: grid;
  align-items: center;
  margin-top: -3rem;
}

h1 {
  font-weight: 700;

  span {
    color : var(--primary-500)
  }
}
`
