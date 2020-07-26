// Imports
import React from 'react';

import styled from 'styled-components';

// Component Declartion 
const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	background-color: #4f5f76;
	font-family: "Lucida Console", Monaco, monospace;


	.date {
		padding: 0.25em;
		color:  #e5eaf5;

	}

	.content {
		color: #e5eaf5;
		background-color: #091f36;
		padding: 2.0em;
		width: 75%;
		margin: 25px;
		border-radius: 1.563em;
	    

	}

	.title { 
		padding: 1.563em;
		font-size: 1.0	em, 1.25em, 0, 1.25em;
		color: #0f2862;
		text-transform: uppercase;
		font-weight; 800;
		text-shadow: 5px 5px 10px #e5eaf5;

	}

`;

const Entry = ({id, data}) => {
	return (
		<Container>
			<div className="title"><h2>{data.title}</h2></div>
			<div className="date">{data.date}</div>
			<div className="content">
				<div>{data.entry}</div>
			</div>
		</Container>
		);
};

export default Entry;