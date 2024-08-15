import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col md={6}>
            <h4>KhanCook</h4>
            &copy; 2023 Khan Inc. Все права защищены.
          </Col>
          <Col md={6} className="text-right">
            <i className="fa fa-phone"></i> +7 707 175 0287<br />
            Звонок по Казахстану бесплатно<br />
            <i className="fa fa-telegram"></i> <i className="fa fa-instagram"></i>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
