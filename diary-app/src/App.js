import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useRoutes} from 'hookrouter';
import CreateEntry from './components/createEntry'
import LandingPage from './components/landingPage';
import ViewEntries  from './components/viewEntries';



function App() {

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

export default App;
