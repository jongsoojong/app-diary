import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
    min-height: 100%;
    color: #fff;
    font-size: 8vw;
    font-weight: bold;
    background-color: #000;
    z-index: 3;
    opacity: 0.3;
`;

const Loader = () => {
    /*
		LOADER
		- component overlay with some animation that disappears when state is X and appears when state is Y
		- BONUS POINTS: have it color shift with dark mode / light mode states
	*/

    return <Container>LOADING...</Container>;
};

export default Loader;
