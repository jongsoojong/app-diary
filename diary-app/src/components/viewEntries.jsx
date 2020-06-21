import React from 'react';

import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';

import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #eeeeee;

    .main-title {
        margin: 0;
        font-size: 40px;
        text-align: center;
        margin-bottom: 20px;
    }
`



const ViewEntries = ({AppStore}) => {

    const userEntries = AppStore.entryObject;

    return(
        <Container>
            <div className="view-entries__inner-container">
                <h1 className="main-title"> YOUR ENTRIES </h1>
                <div className="view-entries__entries">
                    {
                        Object.entries(userEntries).map(([hash, entry]) => {
                            return(
                                <div className="view-entries__entry" key={hash}>
                                    <div className="entry__date"> {entry.date} </div>
                                    <div className="entry__title"> {entry.title} </div>
                                    <div className="entry__entry">
                                        {entry.entry}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </Container>
    )
}

export default inject('AppStore')(observer(ViewEntries));