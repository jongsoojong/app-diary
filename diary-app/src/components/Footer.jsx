//Import Statements
import React from 'react';
import styled from 'styled-components';

//Components


//Helpers


//Styling Declaration
const Container = styled.div `
display: flex;
flex: 1;


`


//Declared Components

const Footer = ({}) => {
	return (
 	<Container>
	<ul>

		<li><a href="#contact">Contact</a></li>
		<li><a href="#terms">Terms</a></li>
		<li><a href="#faq">FAQ</a></li>
		<li><a href="#covidSafety">Covid Safety</a></li>
		<li><a href="#logIn">Log In / Create Account</a></li>

	</ul>
	<Container/>
	);
};

export default Footer;