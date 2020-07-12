import React, {useEffect, useState} from 'react';

import { navigate } from 'hookrouter';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';
import firebase from '../firebase/index.js';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    // background-color: ${props => props.toggle === true ? '#eeeeee' : '#000000' };
    background-color: #eeeeee;

    .inner-container {
        max-width: 768px;
        margin: 0 auto;
        padding: 0 20px;
    }

    .main_title {
        margin: 0;
        font-size: 40px;
        text-align: center;
        margin-bottom: 20px;
    }

    .btn {
        display: block;
        max-width: 300px;
        margin: 0 auto 20px;
        padding: 20px 40px;
        font-size: 18px;
        background-color: #df7116;
        color: 	#ffffff;
        border: none;
        cursor: pointer;
        text-decoration: none;
    }
`
const LandingPage = () => {

    const [ dataArray, updateDataArray ] = useState([]);

    useEffect(() => {
        console.log('only once');
        firebase.firestore().collection('diary-entries').onSnapshot((snapshot) => {
            console.log('OH SNAP', snapshot);
            const totalEntries = snapshot.docs.map((doc) => ({ 
                id: doc.id,
                ...doc.data() 
            }))
            updateDataArray(totalEntries);
        })
    }, [])

    console.log('the DATA ARRAY', dataArray);

    const goToPage = (url) => {
        navigate(url);
    } 



    return (
        <Container>
            <div className="main__inner-container">
                <h1 className="main_title"> DIARY APP </h1>

                <div className="main__button-container">
                    <button onClick={ () => goToPage('/create-entry') } className="btn">Create an Entry</button>
                    <button onClick={ () => goToPage('/view-entries') } className="btn">View Your Entries</button>
                </div>

                <div className="dataArrayRender">
                    { dataArray.map((entry) => {
                        return (<div> {entry.id} </div>)
                    }) }
                </div>
            </div>
        </Container>
    )
}

export default LandingPage;