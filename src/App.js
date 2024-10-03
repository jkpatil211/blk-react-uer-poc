import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

import Banner from './components/Banner/Banner';
import { Container, Row, Stack } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Container fluid className="">
      <Header />
      <Banner />
    </Container>
    // <Container fluid className="">
    //     <Header />
    //     <Banner />
    //   {/* <Container>
    //     <Header />
    //     <Banner />
    //   </Container> */}
    //   {/* <Row>
    //     <Header />
    //   </Row> */}
      
    //   {/* <Header /> */}
    //   {/* <Banner /> */}
    // </Container>
  );
}

export default App;
