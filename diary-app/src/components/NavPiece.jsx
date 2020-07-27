import React from 'react';
import styled from 'styled-components';

import { ReactComponent as DiaryIcon } from '../assets/diaryIcon.svg';

const Container = styled.div`
    display: flex;
    flex: 1;

    animation: breathe 2s infinite ease-in-out;

    @keyframes breathe {
        0% {
            font-weight: bold;
        }

        50% {
            font-weight: normal;
        }

        100% {
            font-weight: lighter;
        }
    }
`;

const NavPiece = ({ type }) => {
    if (type === 'left') {
        return (
            <Container type={type}>
                <ul>
                    <li className="DiaryIcon">
                        <DiaryIcon />
                    </li>
                    <li>View Entry</li>
                </ul>
            </Container>
        );
    } else {
        return <Container />;
    }
};

export default NavPiece;
