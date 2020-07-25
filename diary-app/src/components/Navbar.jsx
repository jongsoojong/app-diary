// Import
import React from 'react';

import styled from 'styled-components';

import {ReactComponent as DiaryIcon} from '../assets/diaryIcon.svg'

//Compoment Declartion
const Container = styled.div`
display: flex;
flex-direction: row;
width: 100%;

ul {
	list-style-type: none;
	display: flex;
	flex: 1;
	flex-direction: row;

}

.DiaryIcon {
	width: 40px;
	height: 40px;
	svg {
		&:hover {
			fill: blue;
		}
	}
}

navBarSection {
	flex: 1;
	width: 33%;
}
`;


const Navbar = ({}) => {

return (
	<Container>
		<div className="navBarSection">
			<ul>
				<li className="DiaryIcon"><DiaryIcon/></li>
				<li>View Entry</li>
			</ul>

		</div>

		<div className="navBarSection">
			
		</div>

		<div className="navBarSection">
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