import React from 'react';
import styled from 'styled-components';

import { ReactComponent as DiaryIcon } from '../assets/diaryIcon.svg';
import { ReactComponent as accountIcon} from '../assets/accountIcon.svg';
import { ReactComponent as settingsIcon} from '../assets/settingsIcon.svg';

const Container = styled.div`
    display: flex;
    flex: 1;

    li {
        padding-right: 20px;
    }

    .viewEntryNav{
        padding-top: 10px;
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
                    <li className="viewEntryNav">View Entry</li>
                </ul>
            </Container>
        );
    } else if (type === 'right'){
        return (
            <Container type={type}>
                <ul>
                    <li className="accountIcon">
                    <accountIcon />

                        
                    </li>
                    <li className="settingsIcon">
                        <settingsIcon />
                    </li>


                </ul>
             </Container>
            );

}
     else {
        return <Container />;
    }
};

export default NavPiece;
