import React from 'react';

import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.toggle === true ? '#eeeeee' : '#000000' };

    .btn {
        padding: 20px 40px;
        font-size: 18px;
        border: none;
        margin: 0 auto 20px;
        cursor: pointer;
    }
`
const LandingPage = () => {


    return (
        <Container>
            <h1 className="main_title"> DIARY APP </h1>

            <div className="main__button-container">
                <a href="/create-entry" className="btn">Create an Entry</a>
                <a href="/view-entries" className="btn">View Your Entries</a>
            </div>
        </Container>
    )
}

export default LandingPage;