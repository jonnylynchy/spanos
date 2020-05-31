import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Timer } from './containers/Timer';

function App() {

  return (
    <Router>
      <React.Fragment>
        <h1>Timer</h1>
        <Route path="/timer">
          <Timer />
        </Route>
      </React.Fragment>
    </Router>
  );
}

export default App;
