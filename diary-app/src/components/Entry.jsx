// Imports
import React from 'react';

import styled from 'styled-components';

// Component Declartaion 
const Container = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	background-color: blue;

	.date {
		color: orange;

	}

	.content {
		background-color: gray;
		font-family: Impact, Charcoal, sans-serif;

	}

	.title { 
		font-size: 0.75vw;
		color: silver;

	}

`;

const Entry = ({id, data}) => {
	console.log("id: ", id);
	console.log("data: ", data);
	return (
		<Container>
		
		<div className="date">{data.date}</div>
		<div className="content">{data.entry}</div>
		<div className="title">{data.title}</div>

		</Container>
		);
};

// Exports
export default Entry;