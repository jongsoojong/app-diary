// Import
import React from 'react';

import styled from 'styled-components';

//Compoment Declartion
const Container = styled.div`

`;


const Navbar = ({}) => {

return (
	<Container>
		<div>
			<ul>
				<li><a href="">Create Entry</a></li>
				<li><a href="">View Entry</a></li>
			</ul>

		</div>

		<div>
			
		</div>

		<div>
			<ul>
			<li>Account</li>
			<li>Settings</li>

			</ul>

		</div>


	</Container>
	);

};
// Export
export default Navbar;