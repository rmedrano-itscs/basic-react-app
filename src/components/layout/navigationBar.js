import React  from 'react';
import { HOME }from '../../routes/routes'; 
// import managedDatasets from '../../managedDatasets/managedDatasets';

// import { UserConsumer } from '../contexts/userContext';

// import {  inject, observer,    } from "mobx-react"
// import { getSnapshot } from 'mobx-state-tree'
// // import { Link } from 'react-router-dom';
// import { authLogin } from '../firebase/config'
// import '../estilos/Estilos.css'
// import {withRouter} from 'react-router'

// import { PAGE_USERS } from '../rutas/rutas'

import { withRouter } from 'react-router'
// import { Redirect } from 'react-router-dom';

import {
	Button,
	Fa,
	Navbar, 
	NavbarBrand, 
	NavItem, 
	NavLink, 
	NavbarNav, 
	Collapse,	
	NavbarToggler,
	DropdownToggle, 
	Dropdown, 
	DropdownMenu, 
	DropdownItem 
} from 'mdbreact';



const LogoEmpresa = () => 
	<NavbarBrand 
		href={HOME}
		// color='white'
	>
	<img 
		src= "ITSCS Logo 100x69.png" 
		heigth='25'  
		width='25'
	/>
 		ITSCS
 	</NavbarBrand>	

const MenuPrincipal = () => {
	return (
	<NavbarNav  left>

		<NavItem>
			<NavLink to={HOME}>Home</NavLink>
		</NavItem> 


		{/* <NavItem>
			<NavLink to={routes.USERS}>Users</NavLink>
		</NavItem> 

		<NavItem>
			<NavLink to={routes.COLLECTIONS}>Collections</NavLink>
		</NavItem> 

		<NavItem>
			<NavLink to={routes.DOCUMENT}>Document</NavLink>
		</NavItem> 

		{/* // already did this. I loaded the datasets collection. */}
		{/* <NavItem>
			<NavLink to={routes.INITIAL_LOAD_OF_DATASETS}>Load datasets</NavLink>
		</NavItem>  */}


	</NavbarNav>
	)
}


const MenuSecundario = withRouter((props) => {
	// const { user, signout } = useAuth(); 

	// const { isAuthenticated, loginWithRedirect, logout, user, getTokenSilently} = useAuth0();
	
	// console.log( 'user:', user)
	// const tokenClaims = getIdTokenClaims();
	// console.log('tokenClaims:',tokenClaims);



	return (
		<NavbarNav right>

			{/* {!isAuthenticated && (
				<Button 
					onClick={() => loginWithRedirect({})}>
						Log in
				</Button>
      )}

      {isAuthenticated && user && (
				<>
					<h1>{user.nickname}</h1>
					<Button onClick={() => logout()}>
						Log out
					</Button>
				</>
			)} */}

			{/* {user
				? <> {`usuario: ${user.email}`}
					<Button onClick ={ async ()=> {
						await signout();
						props.history.push(rutas.LOGIN);
					}
					}>
						Logout
					</Button> </>
				: <NavItem> 
						<NavLink to={rutas.LOGIN} color='white'>
							Login
						</NavLink>
					</NavItem> 
			} */}
		</NavbarNav>
	)
})
	

// const NavigationBar =  (props) => 
const NavigationBar =  () => 

<Navbar 
		color="indigo" 
		// color="peach-gradient"
		dark expand="md" 
		fixed="top" 
		expand="lg" 
		scrolling
		style={{
			// margin: '15px',
			// marginTop: '20px',
		// color: 'elegant-color-dark'
		}}
	> 
		{/* <LogoEmpresa/> */}
		<MenuPrincipal/>
		{/* <MenuSecundario/> */}

	</Navbar>

	export default NavigationBar