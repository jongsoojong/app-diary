import React from 'react';
import styled from 'styled-components';

import { ReactComponent as LogoIcon } from '../assets/logoPlaceholder.svg';
import { ReactComponent as ViewEntryIcon } from '../assets/viewEntryIcon.svg';
import { ReactComponent as DiaryIcon } from '../assets/diaryIcon.svg';
import { ReactComponent as AccountIcon} from '../assets/accountIcon.svg';
import { ReactComponent as SettingsIcon} from '../assets/settingsIcon.svg';
import { ReactComponent as MenuIcon} from '../assets/menuIcon.svg';

const Container = styled.div`
    display: flex;
    flex: 1;
ul {
        list-style-type: none;
        display: flex;
        flex: 1;
        flex-direction: row;
    }
    .logoIcon {
        width: 40px;
        height: 40px;
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
    .viewEntryNav{
        width: 40px;


    }

    .accountIcon{
        width: 40px;
        height: 40px;
    }

    .settingsIcon{
        width: 40px;
        height: 40px;

    }

    .menuIcon{
        width: 40px;
        height: 40px;
    }
    .navBarSection {
        flex: 1;
    }

    li {
        padding-right: 20px;
    }

    .navSectionRight{
        justify-content: flex-end;
        align-items: center;
        display: none;

        @media screen and (min-width: 769px){
            display: flex;
        }
    }

    .navSectionRight--mobile{
        justify-content: flex-end;
        align-items: center;
        display: flex;

        @media screen and (min-width: 769px){
            display: none;
        }
    }

  
    }
`;

const NavPiece = ({ type }) => {
    if (type === 'left') {
        return (
            <Container type={type}>
                <ul>
                <li className="logoIcon">
                    <LogoIcon />
                </li>
                    
                </ul>
            </Container>
        );
    } else if (type === 'right'){
        return (
            <Container type={type}>
                <ul className="navSectionRight">

                <li className="DiaryIcon">
                        <DiaryIcon />
                    </li>
                    <li className="viewEntryNav">
                    <ViewEntryIcon />
                        
                    </li>


                    <li className="accountIcon">
                    <AccountIcon />

                        
                    </li>
                    <li className="settingsIcon">
                        <SettingsIcon />
                    </li>


                </ul>

                <ul className="navSectionRight--mobile">
                    <li className="menuIcon">
                    <MenuIcon />

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
