import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.toggle === true ? '#eeeeee' : '#000000' };
    .create-entry__title-label,
    .create-entry__entry-label {
        color: ${props => props.toggle === true ? '#df7116' : '#eeeeee' };
    }
    .create-entry__date {
        color: ${props => props.toggle === true ? '#000000' : '#eeeeee' };
    }  
    
    form {
        max-width: 768px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding: 0 20px;

        label {
            text-align: left;
        }
    }

    .create-entry__date {
        text-align: right;
        margin-bottom: 20px;
        max-width: 768px;
        padding: 0 20px;
        margin: 0 auto 20px;
    }

    .create-entry__input-container {
        display: flex;
        flex-direction: column;
    }

    .create-entry__input-container {
        width: 100%;
        margin-bottom: 20px;
    }

    .create-entry-btn {
        background-color: #df7116;
        color: 	#ffffff;
    }

    .btn {
        padding: 20px 40px;
        font-size: 18px;
        border: none;
        margin: 0 auto 20px;
        cursor: pointer;
    }
`;

const StyledButton = styled.button `
    background-color: ${props => props.toggle  ? '#000000' : '#eeeeee'};
    color: 	${props => props.toggle ? '#eeeeee' : '#000000'};
`;

//homework: Style the page; put more fields in (date, (alpha+ photos?), (alpha+ geolocation?)) Put everything into mobx on click; on change save to local storage as its doing

const Whatever = ({AppStore}) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();

    let todayDate = mm + '/' + dd + '/' + yyyy;

    const [x,y] = useState(0);
    const [toggleState, updateToggleState] = useState(true);
    const [inputTitle, updateInputTitle] = useState('');
    const [inputEntry, updateInputEntry] = useState('');

    const toggleMode = (e) => {
        let button = e.target
        updateToggleState(toggleState => !toggleState)
        console.log(toggleState);

        if(toggleState) {
            button.innerHTML =  'Day Mode';
        } else {
            button.innerHTML =  'Night Mode';

        }
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const submitObject = {
            title: inputTitle,
            entry: inputEntry
        };

        console.log(submitObject);
    }
    

    const booleanThing = false;
    const tempValue = AppStore.temp.get();

    const tempObject = AppStore.entryObject;

    return (
        <Container toggle={toggleState}>
            <div className="create-entry__date">
                <span>Today's Date: </span>{todayDate}
            </div>
            <form>
                <div className="create-entry__input-container">
                    <label htmlFor="create-entry__title-input" className="create-entry__title-label">Title:</label>
                    <input onChange={(e) => updateInputTitle(e.target.value)} type="text" className="create-entry__title-input"/>
                </div>
                <div className="create-entry__input-container">
                    <label htmlFor="create-entry__entry-input" className="create-entry__entry-label">Entry:</label>
                    <textarea onChange={(e) => updateInputEntry(e.target.value) } className="create-entry__entry-input" placeholder="How was your Day?" rows="4" cols="50" name="entry" />  
                </div>
                
                <input type="submit" onClick={ (e) => onSubmit(e) } className="btn create-entry-btn"/>
            </form>
            <StyledButton toggle={toggleState}
                className="create-entry__nightmode btn toggle-btn" 
                onClick={ (e) => {
                    toggleMode(e);
                }} 
                >
                    Night Mode
            </StyledButton>
            {/* <button 
                className="testbutton" 
                onClick={ () => {
                    AppStore.updateObject({title:inputTitle , entry:inputEntry})
                }} 
                >
                    CLICK ME
            </button>
            <button onClick={ () => { AppStore.updateTemp() } } className="lol_button"> HEY </button>
            <div>
                <div>
                    LOCAL STATE
                </div>
                <div>
                    {inputTitle}
                </div>
                <div>
                    {inputEntry}
                </div>
                <div>
                    {tempValue}
                </div>
            </div>
            <div>
                <div>
                    MOBX
                </div>
                <div>
                    {tempObject.entryTitle}
                </div>
                <div>
                    {tempObject.entryContent}
                </div>
            </div> */}
        </Container>
    )
};

export default inject('AppStore')(observer(Whatever));
