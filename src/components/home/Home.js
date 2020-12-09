
import React, { useState, useEffect } from "react";
import { MDBBtn } from 'mdbreact'; 
const Home = () => {
  return (
    <>
      <h1>Pagina inicial</h1>
      <MDBBtn onClick={()=>{
          alert('hello7')
        }}
      />
    </>
  )
}

export default Home;