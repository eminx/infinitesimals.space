import React, { useEffect } from 'react';
import { Link } from 'rebass';
import { Container, Row, Col } from 'react-grid-system';

function Layout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container fluid style={{ maxWidth: 1080 }}>
      <Row>
        <Col md={3}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: 24,
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
            <div>
              <Link href="/bio" style={{ padding: 12 }}>
                Bio
              </Link>
            </div>
          </div>
        </Col>
        <Col md={6}>{children}</Col>
        <Col md={3} />
      </Row>
    </Container>
  );
}

export default Layout;
