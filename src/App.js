import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Link } from 'rebass';
import { Container, Row, Col } from 'react-grid-system';
import theme from './theme';
import Home from './pages/Home';
import Ravoeira from './pages/Ravoeira';
import SpiralSphinx from './pages/Spiral-Sphinx';
import Contact from './pages/Contact';

function App() {
  // const isNotHomePage =
  //   window && window.location && window.location.pathname !== '/';

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container fluid="true">
          <Row>
            <Col md={3}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: 24
                }}
              >
                <div>
                  <Link href="/" style={{ padding: 12 }}>
                    Home
                  </Link>
                </div>
                <div>
                  <Link href="/contact" style={{ padding: 12 }}>
                    Contact
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <Router>
                <div>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/ravoeira" component={Ravoeira} />
                  <Route exact path="/spiral-sphinx" component={SpiralSphinx} />
                </div>
              </Router>
            </Col>
            <Col md={3} />
          </Row>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
