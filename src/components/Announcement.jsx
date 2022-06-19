import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:500
`
const Announcement = () => {
  return (
   <Container>
       Welcome to the great summer deal upto $55
   </Container>
  )
}

export default Announcement