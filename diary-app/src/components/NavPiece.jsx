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

.tooltip {
    position:relative;
    display: inline-block;

}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px; 
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  margin-left: -60px; 
}

.tooltip:hover .tooltiptext {
  visibility: visible;
 }

ul {
        list-style-type: none;
        display: flex;
        flex: 1;
        flex-direction: row;
    }
    .logoIcon {
        width: 40px;
        height: 40px;
        svg {
            &:hover {
                fill: purple;
            }
        }
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
        svg {
            &:hover {
                fill: pink!important;
            }
        }


    }

    .accountIcon{
        width: 40px;
        height: 40px;
        svg {
            &:hover {
                fill: green;
            }
        }
    }

    .settingsIcon{
        width: 40px;
        height: 40px;
        svg {
            &:hover {
                fill: red;
            }
        }

    }

    .menuIcon{
        width: 40px;
        height: 40px;
        svg {
            &:hover {
                fill: yellow;
            }
        }
        
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
                <li className="logoIcon tooltip tooltiptext">
                    <LogoIcon />
                    <span class="tooltiptext">Jong is Awesome</span>
                </li>
                    
                </ul>
            </Container>
        );
    } else if (type === 'right'){
        return (
            <Container type={type}>
                <ul className="navSectionRight">

                <li className="DiaryIcon tooltip tooltiptext">
                        <DiaryIcon />
                        <span class="tooltiptext">Create Entry</span>
                    </li>
                    <li className="viewEntryNav tooltip tooltiptext">
                    <ViewEntryIcon />
                        <span class="tooltiptext">View Entry</span>
                    </li>


                    <li className="accountIcon tooltip tooltiptext">
                    <AccountIcon />
                    <span class="tooltiptext">Account</span>

                        
                    </li>
                    <li className="settingsIcon tooltip tooltiptext">
                        <SettingsIcon />
                        <span class="tooltiptext">Settings</span>
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
