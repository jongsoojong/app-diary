//Import Statements
import React from 'react';
import styled from 'styled-components';

//Components


//Helpers


//Styling Declaration
const Container = styled.div `
display: flex;
flex: 1;
padding: 2.5rem;
background: #C6C6C6;

* {
	box-sizing: border-box;
}

.footerContainer {
	max-width: 1280px;
	
}

.footerLinksContainer {
	display: flex;
	flex: wrap;
	width: 100%;
}

ul {
	display: block;
	margin-block-start: 1em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	padding-inline-start: 40px;
}

.footerLinks {
	display: flex;
	list-style: none;
	padding: 0;
	font-size: 1.125rem;
	font-family: "Futura STD", Arial, sans-serif;
	font-weight: 400;
	line-height: 2.28;
	letter-spacing: 0.033em;
	margin: 0 0 1.875rem 0;
}


a {
	color: #282828;
	opacity: 1;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background-color: transparent;
	text-decoration: none;
}

.socialMediaFooterContainer {
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	width: 100%;
}

.footerSocialLinks {
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
	align-items: flex-start;
}

.footerSubscribe {
	display: block;
	justify-content: right;
	padding-left: 10rem;
}



`


//Declared Components

const Footer = ({}) => {
	return (
		<Container>
<div clasName="footerContainer">
	
	<div className="footerLinksContainer">

		<div className="footerLinks">
			
		<ul>

			<li className="footerLinks"><a href="#contact">Covid Safety</a></li>
			<li className="footerLinks"><a href="#terms">FAQ</a></li>
			<li className="footerLinks"><a href="#faq">Contact</a></li>
			<li className="footerLinks"><a href="#covidSafety">Privacy</a></li>


		</ul>

		<ul>

			<li className="footerLinks"><a href="#logIn">Craftsmanship</a></li>
			<li className="footerLinks"><a href="#logIn">Stockist</a></li>
			<li className="footerLinks"><a href="#logIn">Press</a></li>
			<li className="footerLinks"><a href="#logIn">Reviews</a></li>

		</ul>

		<ul>

			<li className="footerLinks"><a href="#logIn">Wholesale</a></li>
			<li className="footerLinks"><a href="#logIn">Shipping</a></li>
			<li className="footerLinks"><a href="#logIn">Returns</a></li>
			<li className="footerLinks"><a href="#logIn">QuadPay FAQ</a></li>

		</ul>

		<ul>

			<li className="footerLinks"><a href="#logIn">Log In / Create Account</a></li>

		</ul>

		</div>

		<div className="footerSubscribe">
		
			<label for="Email" className="footerSubscribeTitle">Email</label>

			<form method="post" action="/contact#contactForm" accept-charset="UTF-8" className="contactForm" nonvalidate="nonvalidate"><br/><br />

				<input type="hidden" name="formType" value="customer" />
				<input type="hidden" name="utf-8" value="✓" />

				<div className="footerSubscribeInput">

					<input type="hidden" name="contact[tags]" value="newsletter" />
					<input type="email" name="contact[email]" id="Email" className="newsletterInput" value=" " autocorrect="off" autocapitalize="off" />

				<div className="footerSubscribeInputBtn"> 

					<button type="submit" className="btn footerSubscribeBtn" name="commit" id="Subscribe">Sign up for our newsletter</button>


				</div>	
		</div>
		</form>
		</div>

	</div>

	<div className="socialMediaFooterContainer">

			<ul className="footerSocialLinks">

				<li className="footerSocialLink">insert social links here</li>

			</ul>
		
		</div>

</div>
		</Container>
		);
};

export default Footer;