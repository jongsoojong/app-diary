//Import
import React, {useEffect, useState} from 'react';
import styled from 'styled-components'

const Container = styled.div`

`

//Declared Components

const Hero = ({}) => {

    const heroUrl = "https://images.unsplash.com/photo-1586184028447-9e913a92e8ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2978&q=80";

    return (
        <Container>
            <img src={heroUrl}/>
        </Container>

        );
};

//export
export default Hero;
