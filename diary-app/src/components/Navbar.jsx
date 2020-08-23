// Import Statements
// STRUCTURE
import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import NavPiece from './NavPiece';

// HELPERS


// Styling Declaration
const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    position: fixed;
    background: #eeeeee;
 `;

// Component Declaration
const Navbar = () => {
    /*
    CREATION:
    - create array of paths with titles and end routes for hookrouter
    TO DO:
    - connect router to userPath route entries
    */

    const userPaths = [
    {
            title: 'View Entries',
            route: '/view-entries'
        },
        {
            title: 'Create Entry',
            route: '/create-entry'
        },
        {
            title: 'Account',
            route: '/account'
        },
        {
            title: 'Settings',
            route: '/settings'
        }
    ];

    /*
    RETURN
    - Take NavPiece components, pass in prop for render return
    - loop through userPaths to return <li></li> elements with title and route
    TO DO:
    - convert <div className='navBarSection'> to be a <NavPiece>
    */

    return (
        <Container>
            <NavPiece type={'left'} />

            <NavPiece type={'middle'} />

            <NavPiece type={'right'} />

        </Container>
    );
};

// Export Statements
export default Navbar;