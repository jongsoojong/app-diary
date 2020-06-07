import React, { useState } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';

const Container = styled.div`
    display: flex;
    flex: 1;
    border: ${props => props.toggle === true ? '1px solid blue' : '1px solid red' };

    form {
        display: flex;
        flex-direction: column;

        label {
            text-align: left;
        }
    }
`;

const Whatever = ({AppStore}) => {

    const [x,y] = useState(0);
    const [inputTitle, updateInputTitle] = useState('');
    const [inputEntry, updateInputEntry] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        const submitObject = {
            title: inputTitle,
            entry: inputEntry
        };

        console.log(submitObject);
    }
    

    const booleanThing = false;
    const tempValue = AppStore.dataObject;

    return (
        <Container toggle={booleanThing}>
            <form>
                <label htmlFor="create-entry__title-input" className="create-entry__title-label">Title:</label>
                <input onChange={(e) => updateInputTitle(e.target.value)} type="text" className="create-entry__title-input"/>

                <label htmlFor="create-entry__entry-input" className="create-entry__entry-label">Entry:</label>
                <textarea onChange={(e) => updateInputEntry(e.target.value) } className="create-entry__entry-input" placeholder="How was your Day?" rows="4" cols="50" name="entry" />  
                
                <input type="submit" onClick={ (e) => onSubmit(e) } className="btn create-entry-btn"/>
            </form>
            <button onClick={ () => { AppStore.updateTemp() } } className="lol_button"> HEY </button>
            {inputTitle}
            {inputEntry}
            {JSON.stringify(tempValue)}
        </Container>
    )
};

export default inject('AppStore')(observer(Whatever));
