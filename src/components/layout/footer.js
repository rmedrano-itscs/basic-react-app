//NOTE

// React
import React from 'react';
// import { observer, inject,  } from "mobx-react"
import '../../styles/styles.css'; 


// Interface del usuario (GUI)
import { Col, Container, Row, Footer } from 'mdbreact';

const PiePagina = (props) => {

  return(
    <Footer 
      className= 'estilo-footer' 
      color='elegant-color-dark'
      expand='lg'
      className="fixed-bottom"
      // style = {{
      //   marginTop: '20px',
      //   margin: '10px',
      //   width: '100%',
      // }}
    >
        {/* <Container className="text-left border-danger"> */}
            <Col sm="6">
              footer
            </Col>

        {/* </Container> */}
        <div className="footer-copyright text-center">
          <Col style={{textAlign: 'center'}}>
            <p>
              &copy; {(new Date().getFullYear())} Todos los derechos reservados/>
            </p>
          </Col>
        </div>
    </Footer>
    );
}
      
export default  PiePagina;