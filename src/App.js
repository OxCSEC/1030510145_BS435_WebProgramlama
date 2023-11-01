import logo from './logo.svg';
import './App.css';
import {Button, Col, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">

        <Container>
            <Row>
                <Col><Button>merhaba</Button></Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
