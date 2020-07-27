// Import Statements
// STRUCTURE
import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import NavPiece from './NavPiece';

// HELPERS

// ASSETS
import { ReactComponent as DiaryIcon } from '../assets/diaryIcon.svg';

// Styling Declaration
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

    .navBarSection {
        flex: 1;
    }
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

            <div className="navBarSection">
                <ul>
                    {userPaths.map(path => {
                        return <li onClick={() => console.log(path.route)}>{path.title}</li>;
                    })}
                </ul>
            </div>
        </Container>
    );
};

// Export Statements
export default Navbar;
