/*
 NOTE
	Todas las paginas van dentro de este Layout
	Las paginas son incluidas en el layout usando props.children
*/

// React 
import React from 'react'

import {
	MDBContainer
} from 'mdbreact';

// components
import '../../styles/styles.css'; 
import NavigationBar from './navigationBar';
 
import Footer from './footer'

const Layout = (props) =>
		// Use .container-fluid for a full width container, spanning the entire width of the viewport.
		// <div className="container-fluid body-bg">

	<MDBContainer style={{maxWidth: '100%'}}>
		<div style={{marginTop: '5rem'}} >
			<NavigationBar/>
			{props.children}
			<Footer/>
		</div>
	</MDBContainer>
		
		{/* </div> */}

export default Layout;