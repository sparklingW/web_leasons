import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from 'styled-components';
// importing costume components
import MainPage from './components/MainPage';
import ReactTopics from './components/Topics/ReactTopics';
import JSTopics from './components/Topics/JSTopics';

function App() {
  return (
    <Router>
      <MainAppWrapper>
        <Switch>
          <Route exact path='/'>
            <MainPage />
          </Route>
          <Route path='/lessons/react'>
            <ReactTopics />
          </Route>
          <Route path='/lessons/js'>
            <JSTopics />
          </Route>
          <Route path='/lessons/vue'>
            <ReactTopics />
          </Route>
          <Route path='/lessons/node'>
            <ReactTopics />
          </Route>
          <Route path='/lessons/express'>
            <ReactTopics />
          </Route>
          <Route path='/lessons/angular'>
            <ReactTopics />
          </Route>
        </Switch>
      </MainAppWrapper>
    </Router>
  );
}

export default App;

const MainAppWrapper = styled.div``;