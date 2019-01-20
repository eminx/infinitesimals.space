import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import Home from './pages/Home';
import Ravoeira from './pages/Ravoeira';
import SpiralSphinx from './pages/Spiral-Sphinx';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <div style={{ maxWidth: 620, margin: '0 auto' }}>
            <Route exact path="/" component={Home} />
            <Route exact path="/ravoeira" component={Ravoeira} />
            <Route exact path="/spiral-sphinx" component={SpiralSphinx} />
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
