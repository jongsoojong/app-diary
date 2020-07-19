import React from 'react';
import './App.css';
import {useRoutes} from 'hookrouter';
import CreateEntry from './components/createEntry'
import LandingPage from './components/landingPage';
import ViewEntries  from './components/viewEntries';

import firebase from './firebase/index.js';

import { inject, observer } from 'mobx-react';



const App = ({AppStore}) =>  {

  firebase.firestore().collection('diary-entries').onSnapshot((snapshot) => {
      snapshot.docs.forEach( (doc) => {
          AppStore.updateObject({
              mobId: doc.id,
              date: doc.data().date,
              title: doc.data().title,
              entry: doc.data().entry
          })
      })
  })

  const routes = {
    '/': () => { return <LandingPage /> },
    '/create-entry': () => { return <CreateEntry /> },
    '/view-entries': () => { return <ViewEntries />}
  };

  const routeResult = useRoutes(routes);

  return (
      routeResult 
  );
}

export default inject('AppStore')(observer(App));
